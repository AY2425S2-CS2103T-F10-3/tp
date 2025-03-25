package seedu.address.ui;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.testfx.util.WaitForAsyncUtils.waitForFxEvents;

import org.junit.jupiter.api.Test;
import org.testfx.framework.junit5.ApplicationTest;

import javafx.application.Platform;
import javafx.stage.Stage;

public class HelpWindowTest extends ApplicationTest {

    private HelpWindow helpWindow;

    public void start(Stage stage) {
        helpWindow = new HelpWindow();
        helpWindow.show();
    }

    @Test
    public void testHelpWindowIsShowing() {
        Platform.runLater(() -> {
            helpWindow.show();
            assertTrue(helpWindow.isShowing(), "HelpWindow should be showing.");
        });
        waitForFxEvents(); // Make sure UI updates have occurred
    }

    @Test
    public void testHelpMessageText() {
        assertEquals(HelpWindow.HELP_MESSAGE, helpWindow.getHelpMessage(), "Help message should be correctly set.");
    }

    @Test
    public void testUserGuideUrl() {
        assertEquals(HelpWindow.USERGUIDE_URL, helpWindow.getUserguideUrl(), "User guide URL should be correctly set.");
    }

    @Test
    public void testHideWindow() {
        Platform.runLater(() -> {
            helpWindow.hide();
            assertFalse(helpWindow.isShowing(), "HelpWindow should be hidden.");
        });
        waitForFxEvents();
    }

    @Test
    public void testFocusWindow() {
        Platform.runLater(() -> {
            helpWindow.focus();
            assertTrue(helpWindow.getRoot().isFocused(), "HelpWindow should be focused.");
        });
        waitForFxEvents();
    }
}
