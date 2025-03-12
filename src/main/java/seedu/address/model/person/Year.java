package seedu.address.model.person;

import static java.util.Objects.requireNonNull;

/**
 * Represents a Person's year of enrolment in the address book.
 */
public class Year {
    public static final String MESSAGE_CONSTRAINTS = "Year entered must be a 4-digit number between 1900 and 2100.";
    private static final String VALIDATION_REGEX = "^(19|20)\\d{2}$"; // e.g., 1900–2099

    public final String value;

    /**
     * Constructs a {@year}
     *
     * @param year A valid year of enrolment between 1900 to 2100
     */
    public Year(String year) {
        requireNonNull(year);
        if (!year.matches(VALIDATION_REGEX)) {
            throw new IllegalArgumentException(MESSAGE_CONSTRAINTS);
        }
        this.value = year;
    }

    public static boolean isValidYear(String year) {
        return year.matches(VALIDATION_REGEX);
    }

    @Override
    public String toString() {
        return value;
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (!(other instanceof Year)) {
            return false;
        }
        Year otherYear = (Year) other;
        return value.equals(otherYear.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }
}


