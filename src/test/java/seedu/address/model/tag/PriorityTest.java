package seedu.address.model.tag;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class PriorityTest {

    @Test
    public void fromString_validInputsLowerCase_returnsCorrectPriority() {
        assertEquals(Priority.URGENT, Priority.fromString("urgent"));
        assertEquals(Priority.TRIVIAL, Priority.fromString("trivial"));
        assertEquals(Priority.MODULE, Priority.fromString("module"));
    }

    @Test
    public void fromString_validInputsUpperCase_returnsCorrectPriority() {
        assertEquals(Priority.URGENT, Priority.fromString("URGENT"));
        assertEquals(Priority.TRIVIAL, Priority.fromString("TRIVIAL"));
        assertEquals(Priority.MODULE, Priority.fromString("MODULE"));
    }

    @Test
    public void fromString_validInputsMixedCase_returnsCorrectPriority() {
        assertEquals(Priority.URGENT, Priority.fromString("Urgent"));
        assertEquals(Priority.TRIVIAL, Priority.fromString("Trivial"));
        assertEquals(Priority.MODULE, Priority.fromString("Module"));
    }

    @Test
    public void fromString_emptyString_returnsNonePriority() {
        assertEquals(Priority.NONE, Priority.fromString(""));
    }

    @Test
    public void fromString_invalidInput_throwsIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> Priority.fromString("invalid"));
        assertThrows(IllegalArgumentException.class, () -> Priority.fromString("high"));
        assertThrows(IllegalArgumentException.class, () -> Priority.fromString("none"));
        assertThrows(IllegalArgumentException.class, () -> Priority.fromString("module@"));
        assertThrows(IllegalArgumentException.class, () -> Priority.fromString("urgent!"));
    }

    @Test
    public void exceptionMessage_containsCorrectInformation() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> Priority.fromString("invalid"));
        String expectedMessage = Priority.OOPS + "invalid" + Priority.INVALID_PROPERTY_MESSAGE;
        assertEquals(expectedMessage, exception.getMessage());
    }
}


