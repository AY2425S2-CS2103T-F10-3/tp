package seedu.address.ui;

import java.util.logging.Logger;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.input.Clipboard;
import javafx.scene.input.ClipboardContent;
import javafx.stage.Stage;
import seedu.address.commons.core.LogsCenter;

/**
 * Controller for a help page
 */
public class HelpWindow extends UiPart<Stage> {

    public static final String USERGUIDE_URL = "https://se-education.org/addressbook-level3/UserGuide.html";
    public static final String HELP_MESSAGE = "Available Commands:\n"
            + "1. add format: add n/NAME p/PHONE e/EMAIL a/ADDRESS m/MAJOR [t/TAG]...\n"
            + "2. delete format: delete INDEX\n"
            + "3. list format: list\n"
            + "4. find format: find KEYWORD\n"
            + "5. edit format: edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [m/MAJOR] [t/TAG]...\u200B\n"
            + "6. clear: clear\n"
            + "7. exit: exit\n"
            + "8. help: help\n";

    private static final Logger logger = LogsCenter.getLogger(HelpWindow.class);
    private static final String FXML = "HelpWindow.fxml";

    @FXML
    private Button copyButton;

    @FXML
    private Label helpMessage;

    @FXML
    private Label userGuideUrl;

    /**
     * Creates a new HelpWindow.
     *
     * @param root Stage to use as the root of the HelpWindow.
     */
    public HelpWindow(Stage root) {
        super(FXML, root);
        helpMessage.setText(HELP_MESSAGE);
        userGuideUrl.setText(USERGUIDE_URL);

        assert helpMessage.getText() != null
                && !helpMessage.getText().isEmpty() : "Help message should not be empty";
        assert userGuideUrl.getText() != null
                && !userGuideUrl.getText().isEmpty() : "User guide URL should not be empty";
    }

    /**
     * Creates a new HelpWindow.
     */
    public HelpWindow() {
        this(new Stage());
    }

    /**
     * Shows the help window.
     */
    public void show() {
        logger.fine("Showing help page about the application.");
        getRoot().show();
        getRoot().centerOnScreen();

        assert getRoot().isShowing() : "HelpWindow should be visible after show()";
    }

    /**
     * Returns true if the help window is currently being shown.
     */
    public boolean isShowing() {
        assert helpMessage.getText() != null
                && !helpMessage.getText().isEmpty() : "Help message should not be empty";
        assert userGuideUrl.getText() != null
                && !userGuideUrl.getText().isEmpty() : "User guide URL should not be empty";
        return getRoot().isShowing();
    }

    /**
     * Hides the help window.
     */
    public void hide() {
        assert helpMessage.getText() != null
                && !helpMessage.getText().isEmpty() : "Help message should not be empty";
        assert userGuideUrl.getText() != null
                && !userGuideUrl.getText().isEmpty() : "User guide URL should not be empty";
        getRoot().hide();
    }

    /**
     * Focuses on the help window.
     */
    public void focus() {
        getRoot().requestFocus();
    }

    /**
     * Copies the URL to the user guide to the clipboard.
     */
    @FXML
    private void copyUrl() {
        final Clipboard clipboard = Clipboard.getSystemClipboard();
        final ClipboardContent url = new ClipboardContent();
        url.putString(USERGUIDE_URL);
        clipboard.setContent(url);
    }
}
