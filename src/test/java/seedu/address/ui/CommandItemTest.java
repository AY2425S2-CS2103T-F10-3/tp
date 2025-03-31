package seedu.address.ui;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class CommandItemTest {

    private static final String HELP_TITLE = "Help";
    private static final String HELP_FORMAT = "help";
    private static final String CLEAR_TITLE = "Clear";
    private static final String CLEAR_FORMAT = "clear";

    private static final CommandItem HELPCOMMANDITEM = new CommandItem(HELP_TITLE, HELP_FORMAT);
    private static final CommandItem CLEARCOMMANDITEM = new CommandItem(CLEAR_TITLE, CLEAR_FORMAT);
    private static final CommandItem WRONGCOMMANDITEM = new CommandItem(HELP_TITLE, CLEAR_FORMAT);

    @Test
    public void constructor() {
        CommandItem otherHelpCommandItem = new CommandItem(HELP_TITLE, HELP_FORMAT);

        assertEquals(otherHelpCommandItem, otherHelpCommandItem, "The commands should be equal to itself");
        assertEquals(HELPCOMMANDITEM, otherHelpCommandItem, "The two commands should be equal");
    }

    @Test
    public void propertiesAreNotNull() {
        assertNotNull(HELPCOMMANDITEM.getTitleProperty(), "Title property should not be null");
        assertNotNull(HELPCOMMANDITEM.getFormatProperty(), "Format property should not be null");

        assertNotNull(CLEARCOMMANDITEM.getTitleProperty(), "Title property should not be null");
        assertNotNull(CLEARCOMMANDITEM.getFormatProperty(), "Format property should not be null");
    }

    @Test
    public void testGetters() {
        assertEquals(HELP_TITLE, HELPCOMMANDITEM.getTitle(),
                "Title should match the one given in constructor");
        assertEquals(HELP_FORMAT, HELPCOMMANDITEM.getFormat(),
                "Format should match the one given in constructor");

        assertEquals(CLEAR_TITLE, CLEARCOMMANDITEM.getTitle(),
                "Title should match the one given in constructor");
        assertEquals(CLEAR_FORMAT, CLEARCOMMANDITEM.getFormat(),
                "Format should match the one given in constructor");
    }

    @Test
    public void testPropertyGetters() {
        assertEquals(HELP_TITLE, HELPCOMMANDITEM.getTitleProperty().get(),
                "Title property should return the correct value");
        assertEquals(HELP_FORMAT, HELPCOMMANDITEM.getFormatProperty().get(),
                "Format property should return the correct value");

        assertEquals(CLEAR_TITLE, CLEARCOMMANDITEM.getTitleProperty().get(),
                "Title property should return the correct value");
        assertEquals(CLEAR_FORMAT, CLEARCOMMANDITEM.getFormatProperty().get(),
                "Format property should return the correct value");
    }

    @Test
    public void testEqualsSameObject() {
        assertEquals(HELPCOMMANDITEM, HELPCOMMANDITEM, "An object must be equal to itself");
    }

    @Test
    public void testEqualObjects() {
        CommandItem otherHelpCommandItem = new CommandItem(HELP_TITLE, HELP_FORMAT);
        assertEquals(HELPCOMMANDITEM, otherHelpCommandItem,
                "Commands with identical title and format should be equal");
    }

    @Test
    public void testDifferentFormat() {
        assertNotEquals(HELPCOMMANDITEM, WRONGCOMMANDITEM,
                "Commands with the same title but different format should not be equal");
        assertNotEquals(WRONGCOMMANDITEM, CLEARCOMMANDITEM,
                "Commands with the same title but different format should not be equal");
    }

    @Test
    public void testDifferentTitleAndFormat() {
        assertNotEquals(HELPCOMMANDITEM, CLEARCOMMANDITEM,
                "Commands with different title and format should not be equal");
    }

    @Test
    public void testEqualsNull() {
        assertNotEquals(HELPCOMMANDITEM, null, "A CommandItem must not be equal to null");
        assertNotEquals(CLEARCOMMANDITEM, null, "A CommandItem must not be equal to null");
    }

    @Test
    public void testDifferentType() {
        assertNotEquals(HELPCOMMANDITEM, "Some String",
                "A CommandItem must not be equal to an object of another type");
        assertNotEquals(CLEARCOMMANDITEM, "Some String",
                "A CommandItem must not be equal to an object of another type");
    }
}
