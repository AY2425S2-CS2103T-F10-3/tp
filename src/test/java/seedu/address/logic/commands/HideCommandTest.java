package seedu.address.logic.commands;

import static seedu.address.logic.commands.CommandTestUtil.assertCommandSuccess;

import org.junit.jupiter.api.Test;

import seedu.address.model.Model;
import seedu.address.model.ModelManager;

/**
 * Contains integration tests (interaction with the Model) and unit tests for HideCommand.
 */
public class HideCommandTest {
    private Model model = new ModelManager();
    private Model expectedModel = new ModelManager();

    @Test
    public void execute_hide_success() {
        CommandResult expectedCommandResult = new CommandResult("Contact details hidden.",
                false, false);
        assertCommandSuccess(new HideCommand(), model, expectedCommandResult, expectedModel);
    }
}
