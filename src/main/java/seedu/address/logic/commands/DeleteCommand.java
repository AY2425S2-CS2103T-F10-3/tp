package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import java.util.List;

import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.Region;
import javafx.stage.Stage;
import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.person.Person;
import seedu.address.ui.ConfirmDeleteWindow;

/**
 * Deletes a person identified using it's displayed index from the address book.
 */
public class DeleteCommand extends Command {

    public static final String COMMAND_WORD = "delete";

    public static final String MESSAGE_USAGE = COMMAND_WORD
            + ": Deletes the person identified by the index number used in the displayed person list.\n"
            + "Parameters: INDEX (must be a positive integer)\n"
            + "Example: " + COMMAND_WORD + " 1";

    public static final String MESSAGE_DELETE_PERSON_SUCCESS = "Deleted Person: %1$s";
    public static final String CONFIRMATION_MESSAGE = "Are you sure you want to delete this person?";
    public static final String CONFIRM_DELETE = "Confirm Delete";
    public static final String FEEDBACK_TO_USER_SUCCESSFUL_DELETE = "Deletion canceled.";
    public static final String FEEDBACK_TO_USER_UNKNOWN_ERROR = "Unexpected error occured. Please try again";

    private final Index targetIndex;

    // This flag is used to mock a situation where users enter "confirm" when deleting a person
    // True for JUnit testing, but otherwise, false for default boolean values
    private boolean isConfirmedForTesting;

    /**
     * Default constructor for creating objects of DeleteCommand.
     *
     * @param targetIndex The index of the person to be deleted.
     */
    public DeleteCommand(Index targetIndex) {
        this.targetIndex = targetIndex;
    }

    /**
     * Constructor that is only used for JUnit Testing in {@code DeleteCommandTest}, where we are required
     * to mock a situation where users enter "confirm" when deleting a person.
     *
     * @param targetIndex The index to be deleted.
     * @param isConfirmedForTesting Value passed in is always {@code true} for JUnit testing only.
     */
    public DeleteCommand(Index targetIndex, boolean isConfirmedForTesting) {
        this.targetIndex = targetIndex;
        this.isConfirmedForTesting = isConfirmedForTesting;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Person> lastShownList = model.getFilteredPersonList();

        if (targetIndex.getZeroBased() >= lastShownList.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_PERSON_DISPLAYED_INDEX);
        }

        Person personToDelete = lastShownList.get(targetIndex.getZeroBased());

        if (isConfirmedForTesting) {
            model.deletePerson(personToDelete);
            return new CommandResult(String.format(MESSAGE_DELETE_PERSON_SUCCESS, Messages.format(personToDelete)));
        } else {
            try {
                FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/ConfirmDeleteWindow.fxml"));
                Region dialogRoot = loader.load();
                ConfirmDeleteWindow deleteController = loader.getController();

                deleteController.setConfirmationMessage(CONFIRMATION_MESSAGE);

                // Show the confirmation dialog box in a new window
                Stage dialogStage = new Stage();
                dialogStage.setTitle(CONFIRM_DELETE);
                dialogStage.setScene(new Scene(dialogRoot));

                dialogStage.showAndWait(); // Wait for user's response

                // Based on the user's inputs to the confirmation dialog box, handle the deletion logic
                if (deleteController.isConfirmed()) {
                    model.deletePerson(personToDelete);
                    return new CommandResult(String.format(MESSAGE_DELETE_PERSON_SUCCESS,
                            Messages.format(personToDelete)));
                } else {
                    return new CommandResult(FEEDBACK_TO_USER_SUCCESSFUL_DELETE);
                }
            } catch (Exception e) {
                e.printStackTrace();
                return new CommandResult(FEEDBACK_TO_USER_UNKNOWN_ERROR);
            }
        }
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof DeleteCommand)) {
            return false;
        }

        DeleteCommand otherDeleteCommand = (DeleteCommand) other;
        return targetIndex.equals(otherDeleteCommand.targetIndex);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("targetIndex", targetIndex)
                .toString();
    }
}
