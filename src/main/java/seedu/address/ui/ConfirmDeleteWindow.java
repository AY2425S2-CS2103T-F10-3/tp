package seedu.address.ui;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.stage.Stage;

/**
 * This class acts as the controller for confirm delete dialog box.
 */
public class ConfirmDeleteWindow {

    @FXML
    private Label confirmationMessage;

    @FXML
    private Button confirmButton;

    @FXML
    private Button cancelButton;

    private boolean confirmed = false;

    /**
     * Set confirmation message.
     *
     * @param message To set the confirmation message displayed to users.
     */
    public void setConfirmationMessage(String message) {
        confirmationMessage.setText(message);
    }

    /**
     * Method called when the "confirm" button is clicked.
     */
    @FXML
    private void onConfirm() {
        confirmed = true;
        closeWindow();
    }

    /**
     * Method called when the "cancel" button is clicked.
     */
    @FXML
    private void onCancel() {
        confirmed = false;
        closeWindow();
    }

    /**
     * Close the dialog box once delete is done successfully.
     */
    private void closeWindow() {
        Stage stage = (Stage) confirmButton.getScene().getWindow();
        stage.close();
    }

    /**
     * This method acquires the status for deletion of a person.
     *
     * @return The confirmation status for deletion.
     */
    public boolean isConfirmed() {
        return confirmed;
    }
}



