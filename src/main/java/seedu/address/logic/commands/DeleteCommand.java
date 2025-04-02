package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import java.util.List;
import java.util.Optional;
import java.util.Set;

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
import seedu.address.model.tag.Tag;
import seedu.address.ui.ConfirmDeleteWindow;

/**
 * Deletes a person identified using its displayed index from the address book.
 */
public class DeleteCommand extends Command {

    public static final String COMMAND_WORD = "delete";

    public static final String MESSAGE_USAGE = COMMAND_WORD
            + ": Deletes the person(s) identified by either index number or tags.\n"
            + "Parameters:\n"
            + "1. " + COMMAND_WORD + " INDEX (must be a positive integer)\n"
            + "    Example: " + COMMAND_WORD + " 1\n"
            + "2. " + COMMAND_WORD + " t/TAG [MORE_TAGS] (deletes persons with matching tags)\n"
            + "    Example: " + COMMAND_WORD + " t/CS2101 t/teammates";

    public static final String MESSAGE_DELETE_PERSON_SUCCESS = "Deleted Person: %1$s";
    public static final String MESSAGE_DELETE_PERSONS_SUCCESS = "Deleted Persons:\n";
    public static final String CONFIRM_DELETE = "Are you sure you want to delete this person(s)?";
    public static final String TITLE = "CollabSync - Confirm Delete";
    public static final String FEEDBACK_TO_USER_CANCELLED_DELETE = "Deletion canceled.";
    public static final String FEEDBACK_TO_USER_UNKNOWN_ERROR = "Unexpected error occured. Please try again";

    private final Optional<Index> targetIndex;
    private final Optional<Set<Tag>> targetTags;

    // This flag is used to mock a situation where users enter "confirm" when deleting a person
    // True for JUnit testing, but otherwise, false for default boolean values
    private boolean isConfirmedForTesting;

    /**
     * Constructor for creating objects of DeleteCommand with {@code Index}.
     *
     * @param targetIndex The index of the person to be deleted.
     */
    public DeleteCommand(Index targetIndex) {
        this.targetIndex = Optional.of(targetIndex);
        this.targetTags = Optional.empty();
    }
    /**
     * Constructor for creating objects of DeleteCommand with {@code Tag}.
     *
     * @param targetTags The tags of the person to be deleted.
     */
    public DeleteCommand(Set<Tag> targetTags) {
        this.targetTags = Optional.of(targetTags);
        this.targetIndex = Optional.empty();
    }

    /**
     * Constructor that is only used for JUnit Testing in {@code DeleteCommandTest}, where we are required
     * to mock a situation where users enter "confirm" when deleting a person.
     *
     * @param targetIndex The index to be deleted.
     * @param isConfirmedForTesting Value passed in is always {@code true} for JUnit testing only.
     */
    public DeleteCommand(Index targetIndex, boolean isConfirmedForTesting) {
        this.targetIndex = Optional.of(targetIndex);
        this.targetTags = Optional.empty();
        this.isConfirmedForTesting = isConfirmedForTesting;
    }
    /**
     * Constructor that is only used for JUnit Testing in {@code DeleteCommandTest}, where we are required
     * to mock a situation where users enter "confirm" when deleting a person.
     *
     * @param targetTags The tags to be matched.
     * @param isConfirmedForTesting Value passed in is always {@code true} for JUnit testing only.
     */
    public DeleteCommand(Set<Tag> targetTags, boolean isConfirmedForTesting) {
        this.targetIndex = Optional.empty();
        this.targetTags = Optional.of(targetTags);
        this.isConfirmedForTesting = isConfirmedForTesting;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Person> lastShownList = model.getFilteredPersonList();

        // canExecuteCommand only if
        //      index is valid or use tags
        //      and user confirm
        boolean canExecuteCommand = this.targetTags.isPresent() || this.targetIndex
            .filter(i -> i.getZeroBased() < lastShownList.size())
            .isPresent();

        if (!canExecuteCommand) {
            throw new CommandException(Messages.MESSAGE_INVALID_PERSON_DISPLAYED_INDEX);
        }

        if (!isConfirmedForTesting && canExecuteCommand) {
            try {
                // Load the FXML file and get the controller
                FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/ConfirmDeleteWindow.fxml"));
                Region dialogRoot = loader.load();
                ConfirmDeleteWindow deleteController = loader.getController();

                // Set the confirmation message on the controller
                deleteController.setConfirmationMessage(CONFIRM_DELETE);

                // Show the confirmation dialog box in a new window
                Stage dialogStage = new Stage();
                dialogStage.setTitle(TITLE);
                dialogStage.setScene(new Scene(dialogRoot));

                dialogStage.showAndWait(); // Wait for user's response

                canExecuteCommand = deleteController.isConfirmed();
            } catch (Exception e) {
                e.printStackTrace();
                return new CommandResult(FEEDBACK_TO_USER_UNKNOWN_ERROR);
            }
        }

        if (canExecuteCommand) {
            if (this.targetIndex.isPresent()) {
                return deleteWithIndex(model, lastShownList);
            }
            return deleteWithTags(model, lastShownList);
        }
        return new CommandResult(FEEDBACK_TO_USER_CANCELLED_DELETE);
    }

    private CommandResult deleteWithIndex(Model model, List<Person> persons) throws CommandException {
        assert this.targetIndex.isPresent() : "Index is empty";

        if (this.targetIndex.get().getZeroBased() >= persons.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_PERSON_DISPLAYED_INDEX);
        }

        Person personToDelete = persons.get(targetIndex.get().getZeroBased());
        model.deletePerson(personToDelete);
        return new CommandResult(String.format(MESSAGE_DELETE_PERSON_SUCCESS,
                Messages.format(personToDelete)));
    }

    private CommandResult deleteWithTags(Model model, List<Person> persons) {
        assert this.targetTags.isPresent() : "Optional of Tag list is empty";

        List<Person> personsToDelete = persons.stream()
            .parallel()
            .filter(p -> p.hasTags(this.targetTags.get()))
            .toList();

        String resMsg = personsToDelete.stream()
            .parallel()
            .map(p -> Messages.format(p))
            .reduce((x, y) -> x + "\n" + y)
            .orElse("")
            .trim();

        personsToDelete.forEach(p -> model.deletePerson(p));

        return new CommandResult(MESSAGE_DELETE_PERSONS_SUCCESS + resMsg);
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
        return targetIndex.equals(otherDeleteCommand.targetIndex)
            && targetTags.equals(otherDeleteCommand.targetTags);
    }

    @Override
    public String toString() {
        return this.targetIndex
            .map(i -> new ToStringBuilder(this).add("targetIndex", i))
            .orElseGet(() -> this.targetTags
                .map(ts -> new ToStringBuilder(this).add("targetTags", ts))
                .orElseThrow(() -> new IllegalStateException("All optionals are empty.")))
            .toString();
    }
}
