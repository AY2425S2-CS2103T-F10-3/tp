package seedu.address.model.person;

import static java.util.Objects.requireNonNull;

/**
 * Represents a Person's degree/major in CollabSync
 */
public class Major {
    public static final String MESSAGE_CONSTRAINTS = "Degree/Major field must not be empty"
            + " and must only contain alphabetical characters.";
    private static final String VALIDATION_REGEX = "^[A-Za-z ]+$";

    public final String value;

    /**
     * Constructs a {@Major}
     *
     * @param major A valid major/degree the person is in.
     */
    public Major(String major) {
        requireNonNull(major);
        if (!major.matches(VALIDATION_REGEX)) {
            throw new IllegalArgumentException(MESSAGE_CONSTRAINTS);
        }
        this.value = major;
    }

    public static boolean isValidMajor(String major) {
        return major.matches(VALIDATION_REGEX);
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
        if (!(other instanceof Major)) {
            return false;
        }
        Major otherMajor = (Major) other;
        return value.equals(otherMajor.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }
}


