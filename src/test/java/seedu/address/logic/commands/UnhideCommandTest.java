package seedu.address.logic.commands;

import static seedu.address.logic.commands.CommandTestUtil.assertCommandSuccess;

import org.junit.jupiter.api.Test;

import seedu.address.model.Model;
import seedu.address.model.ModelManager;

/**
 * Contains integration tests (interaction with the Model) and unit tests for UnhideCommand.
 */
public class UnhideCommandTest {
    private Model model = new ModelManager();
    private Model expectedModel = new ModelManager();

    @Test
    public void execute_unhide_success() {
        CommandResult expectedCommandResult = new CommandResult("Contact details are now visible.",
                false, false);
        assertCommandSuccess(new UnhideCommand(), model, expectedCommandResult, expectedModel);
    }
}
