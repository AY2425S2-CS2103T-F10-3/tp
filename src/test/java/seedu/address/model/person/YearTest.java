package seedu.address.model.person;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class YearTest {

    @Test
    public void constructor_invalidYear_throwsIllegalArgumentException() {
        String invalidYear = "1899"; // below valid range
        Exception exception = assertThrows(IllegalArgumentException.class, () -> new Year(invalidYear));
        assertEquals(Year.MESSAGE_CONSTRAINTS, exception.getMessage());
    }

    @Test
    public void isValidYear_returnsTrueForValidYears() {
        assertTrue(Year.isValidYear("2000"));
        assertTrue(Year.isValidYear("2025"));
        assertTrue(Year.isValidYear("2002"));
    }

    @Test
    public void isValidYear_returnsFalseForInvalidYears() {
        assertFalse(Year.isValidYear("1899"));
        assertFalse(Year.isValidYear("3333333"));
        assertFalse(Year.isValidYear("abcd"));
    }

    @Test
    public void equals_sameYear_returnsTrue() {
        Year year1 = new Year("2002");
        Year year2 = new Year("2002");
        assertEquals(year1, year2);
    }

    @Test
    public void equals_differentYear_returnsFalse() {
        Year year1 = new Year("2002");
        Year year2 = new Year("2003");
        assertNotEquals(year1, year2);
    }

    @Test
    public void equals_nonYear_returnsFalse() {
        Year year = new Year("2002");
        // Comparing to a string, should return false
        assertFalse(year.equals("2002"));
    }

    @Test
    public void hashCode_sameForEqualYears() {
        Year year1 = new Year("2025");
        Year year2 = new Year("2025");
        assertEquals(year1.hashCode(), year2.hashCode());
    }
}

