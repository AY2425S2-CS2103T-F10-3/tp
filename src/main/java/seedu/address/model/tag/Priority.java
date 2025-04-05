package seedu.address.model.tag;

import seedu.address.commons.exceptions.IllegalValueException;

/**
 * Represents the priority or category of a tag.
 */
public enum Priority {
    URGENT("Urgent"),
    TRIVIAL("Trivial"),
    MODULE("Module"),
    NONE(""); // default if no priority is set

    public static final String INVALID_PROPERTY_MESSAGE = "' is not a valid priority.\nDid you mean: trivial, "
            + "urgent, or module?";
    public static final String OOPS = "Oops! '";
    private final String label;

    Priority(String label) {
        this.label = label;
    }

    /**
     * Acquire the corresponding {@code Priority} enum value
     * for a given string input entered by user.
     *
     * @param input The string representation of the priority (e.g., "urgent", "trivial", "module", or "").
     * @return The corresponding {@code Priority} enum.
     */
    public static Priority fromString(String input) throws IllegalValueException {
        switch (input.toLowerCase()) {
        case "urgent":
            return URGENT;
        case "trivial":
            return TRIVIAL;
        case "module":
            return MODULE;
        case "":
            return NONE;
        default:
            throw new IllegalValueException(
                    OOPS + input + INVALID_PROPERTY_MESSAGE);
        }
    }

    @Override
    public String toString() {
        return label;
    }
}

