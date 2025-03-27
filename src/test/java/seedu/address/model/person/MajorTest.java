package seedu.address.model.person;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class MajorTest {

    @Test
    public void constructor_invalidMajor_throwsIllegalArgumentException() {
        String invalidMajor = "Computer Science2";
        Exception exception = assertThrows(IllegalArgumentException.class, () -> new Major(invalidMajor));
        assertEquals(Major.MESSAGE_CONSTRAINTS, exception.getMessage());
    }

    @Test
    public void isValidMajor_returnsTrueForValidMajors() {
        assertTrue(Major.isValidMajor("Computer Science"));
        assertTrue(Major.isValidMajor("Dance"));
        assertTrue(Major.isValidMajor("Chinese Music"));
    }

    @Test
    public void isValidMajor_returnsFalseForInvalidMajors() {
        assertFalse(Major.isValidMajor("Linguistics1"));
        assertFalse(Major.isValidMajor("@@@"));
        assertFalse(Major.isValidMajor("Chemi$try"));
    }

    @Test
    public void equals_sameMajor_returnsTrue() {
        Major major1 = new Major("DSA");
        Major major2 = new Major("DSA");
        assertEquals(major1, major2);
    }

    @Test
    public void equals_differentMajor_returnsFalse() {
        Major major1 = new Major("DSA");
        Major major2 = new Major("CS");
        assertNotEquals(major1, major2);
    }

    @Test
    public void equals_nonMajor_returnsFalse() {
        Major major = new Major("Maths");
        // We are comparing it with the string representation of "Maths", which should be false
        assertFalse(major.equals("Maths"));
    }

    @Test
    public void hashCode_sameForEqualMajors() {
        Major major1 = new Major("Chemistry");
        Major major2 = new Major("Chemistry");
        assertEquals(major1.hashCode(), major2.hashCode());
    }
}

