package seedu.address.logic.commands;

import seedu.address.model.Model;

/**
 * Unhides the details of a contact.
 */
public class UnhideCommand extends Command {

    public static final String COMMAND_WORD = "unhide";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Unhides the details of the selected contact.\n"
            + "Example: " + COMMAND_WORD;

    @Override
    public CommandResult execute(Model model) {
        model.getFilteredPersonList().forEach(person -> person.showDetails());
        return new CommandResult("Contact details are now visible.", false, false);
    }
}
