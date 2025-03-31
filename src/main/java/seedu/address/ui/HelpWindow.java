package seedu.address.ui;

import java.util.logging.Logger;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextArea;
import javafx.scene.input.Clipboard;
import javafx.scene.input.ClipboardContent;
import javafx.stage.Stage;
import seedu.address.commons.core.LogsCenter;

/**
 * Controller for a help window that displays:
 *  - A user guide URL with a "Copy URL" button.
 *  - A table of commands (with fixed, unmovable columns) where each command's format is
 *    displayed in a non-editable, wrapping TextArea.
 */
public class HelpWindow extends UiPart<Stage> {

    private static final String USERGUIDE_URL = "https://se-education.org/addressbook-level3/UserGuide.html";

    private static final String FXML = "HelpWindow.fxml";
    private static final Logger logger = LogsCenter.getLogger(HelpWindow.class);

    @FXML
    private Button copyButton;
    @FXML
    private Label userGuideUrl;
    @FXML
    private TableView<CommandItem> commandTable;
    @FXML
    private TableColumn<CommandItem, String> commandTitleColumn;
    @FXML
    private TableColumn<CommandItem, String> commandFormatColumn;

    /**
     * Creates a new HelpWindow with the given Stage.
     *
     * @param root Stage to use as the root of the HelpWindow.
     */
    public HelpWindow(Stage root) {
        super(FXML, root);
        userGuideUrl.setText(USERGUIDE_URL);
        populateTable();
        disableColumnDraggingResizing();
    }

    /**
     * Creates a new HelpWindow using a fresh Stage.
     */
    public HelpWindow() {
        this(new Stage());
    }

    /**
     * Populates the TableView with command data.
     */
    private void populateTable() {
        ObservableList<CommandItem> commands = FXCollections.observableArrayList(
                new CommandItem("Add", "add n/NAME p/PHONE e/EMAIL a/ADDRESS m/MAJOR [t/TAG]..."),
                new CommandItem("Delete", "delete INDEX"),
                new CommandItem("List", "list"),
                new CommandItem("Find", "find KEYWORD"),
                new CommandItem("Edit", "edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [m/MAJOR] [t/TAG]..."),
                new CommandItem("Clear", "clear"),
                new CommandItem("Exit", "exit"),
                new CommandItem("Help", "help"),
                new CommandItem("Sort", "sort"),
                new CommandItem("Hide", "hide"),
                new CommandItem("Unhide", "unhide")
        );
        commandTable.setItems(commands);

        commandTitleColumn.setCellValueFactory(cellData -> cellData
                .getValue().getTitleProperty());
        commandFormatColumn.setCellValueFactory(cellData -> cellData
                .getValue().getFormatProperty());

        commandFormatColumn.setCellFactory(col -> new TableCell<CommandItem, String>() {
            private final TextArea textArea = createTextArea();

            @Override
            protected void updateItem(String item, boolean empty) {
                super.updateItem(item, empty);
                setGraphic(empty || item == null ? null : textAreaWithText(item));
            }
        });
    }

    /**
     * Creates a new TextArea for a table cell with desired settings.
     */
    private TextArea createTextArea() {
        TextArea textArea = new TextArea();
        textArea.setWrapText(true);
        textArea.setEditable(false);
        textArea.getStyleClass().add("text-area");
        textArea.setFocusTraversable(false);
        textArea.setPrefRowCount(2);
        textArea.setMaxHeight(40);
        return textArea;
    }

    /**
     * Updates the given TextArea with text and returns it.
     */
    private TextArea textAreaWithText(String text) {
        TextArea textArea = createTextArea();
        textArea.setText(text);
        return textArea;
    }

    /**
     * Disables column dragging and resizing, and uses a constrained resize policy to ensure only 2 columns.
     */
    private void disableColumnDraggingResizing() {
        commandTitleColumn.setReorderable(false);
        commandFormatColumn.setReorderable(false);
        commandTitleColumn.setResizable(false);
        commandFormatColumn.setResizable(false);
        commandTable.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);
    }

    /**
     * Copies the user guide URL to the system clipboard.
     */
    @FXML
    private void copyUrl() {
        final Clipboard clipboard = Clipboard.getSystemClipboard();
        final ClipboardContent content = new ClipboardContent();
        content.putString(USERGUIDE_URL);
        clipboard.setContent(content);
    }

    /**
     * Shows the help window.
     */
    public void show() {
        logger.fine("Showing help page.");
        getRoot().show();
        getRoot().centerOnScreen();
    }

    /**
     * Returns true if the help window is currently being shown.
     */
    public boolean isShowing() {
        return getRoot().isShowing();
    }

    /**
     * Hides the help window.
     */
    public void hide() {
        getRoot().hide();
    }

    /**
     * Focuses on the help window.
     */
    public void focus() {
        getRoot().requestFocus();
    }
}
