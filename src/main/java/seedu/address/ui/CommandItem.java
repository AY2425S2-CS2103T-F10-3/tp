package seedu.address.ui;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

/**
 * Represents a command item with a title and its corresponding format.
 * This class is used as a model for displaying commands in the UI.
 * It encapsulates the command's title (e.g., "Add") and the command's format
 * (e.g., "add n/NAME p/PHONE ...").
 */
public class CommandItem {
    private final SimpleStringProperty title;
    private final SimpleStringProperty format;

    /**
     * Constructs a {@code CommandItem} with the specified title and format.
     *
     * @param title  the title of the command (e.g., "Add")
     * @param format the format or syntax for the command (e.g., "add n/NAME p/PHONE ...")
     */
    public CommandItem(String title, String format) {
        this.title = new SimpleStringProperty(title);
        this.format = new SimpleStringProperty(format);
    }

    /**
     * Returns the title of the command.
     *
     * @return the command title as a {@code String}
     */
    public String getTitle() {
        return title.get();
    }

    /**
     * Returns the title property of the command.
     * This is useful for binding the value in JavaFX UI controls.
     *
     * @return the {@code StringProperty} representing the command title
     */
    public StringProperty getTitleProperty() {
        return title;
    }

    /**
     * Returns the format of the command.
     *
     * @return the command format as a {@code String}
     */
    public String getFormat() {
        return format.get();
    }

    /**
     * Returns the format property of the command.
     * This is useful for binding the value in JavaFX UI controls.
     *
     * @return the {@code StringProperty} representing the command format
     */
    public StringProperty getFormatProperty() {
        return format;
    }
}
