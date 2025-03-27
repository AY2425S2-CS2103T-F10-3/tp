package seedu.address.logic.commands;

import seedu.address.model.Model;

/**
 * Hides the details of a contact.
 */
public class HideCommand extends Command {

    public static final String COMMAND_WORD = "hide";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Hides the details of the selected contact.\n"
            + "Example: " + COMMAND_WORD;

    @Override
    public CommandResult execute(Model model) {
        model.getFilteredPersonList().forEach(person -> person.hideDetails());
        return new CommandResult("Contact details hidden.", false, false);
    }
}
