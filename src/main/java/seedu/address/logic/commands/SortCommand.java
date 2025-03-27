package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import java.util.Comparator;

import seedu.address.model.Model;
import seedu.address.model.person.Person;

/**
 * Sorts the contact list in ascending or descending order based on name and phone number.
 */
public class SortCommand extends Command {

    public static final String COMMAND_WORD = "sort";
    public static final String MESSAGE_NO_CONTACTS = "No contacts to sort.";
    public static final String MESSAGE_SUCCESS = "Contacts sorted in %s order.";
    public static final String MESSAGE_INVALID_ORDER = "Invalid sort order!\n + " +
            COMMAND_WORD + ": Sorts the list of persons in either ascending or descending order "
            + "based on their names, followed by phone numbers if names are identical.\n"
            + "Parameters: sort (asc | desc)\n"
            + "Example: " + COMMAND_WORD + " asc";
    private final boolean isAscending;

    /**
     * Constructs a SortCommand with the specified sorting order.
     * @param isAscending true for ascending order, false for descending order.
     */
    public SortCommand(boolean isAscending) {
        this.isAscending = isAscending;
    }

    @Override
    public CommandResult execute(Model model) {
        requireNonNull(model);

        // Check if the contact list is empty
        if (model.getFilteredPersonList().isEmpty()) {
            return new CommandResult(MESSAGE_NO_CONTACTS);
        }

        // Define sorting criteria: primarily by name, then by phone number
        Comparator<Person> comparator = Comparator.comparing(Person::getName)
                .thenComparing(Person::getPhone);

        // Reverse comparator if sorting in descending order
        if (!isAscending) {
            comparator = comparator.reversed();
        }

        // Apply sorting to the filtered contact list
        model.sortFilteredPersonList(comparator);

        return new CommandResult(String.format(MESSAGE_SUCCESS, isAscending ? "ascending" : "descending"));
    }
}
