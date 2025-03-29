package seedu.address.model.tag;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;

/**
 * Represents a Tag in the address book.
 * Guarantees: immutable; name is valid as declared in {@link #isValidTagName(String)}
 */
public class Tag {

    public static final String MESSAGE_CONSTRAINTS =
            "Tag names should contain only letters, digits, hyphens (-), or underscores (_), and no spaces.";
    public static final String VALIDATION_REGEX = "[\\p{Alnum}_-]+";

    public final String tagName;
    public final Priority priority;

    /**
     * Constructs a {@code Tag}.
     *
     * @param tagName  A valid tag name.
     * @param priority
     */
    public Tag(String tagName, Priority priority) {
        requireNonNull(tagName);
        requireNonNull(priority);
        checkArgument(isValidTagName(tagName), MESSAGE_CONSTRAINTS);
        this.tagName = tagName;
        this.priority = priority;
    }

    /**
     * Constructs a {@code Tag} with no priority (default).
     */
    public Tag(String tagName) {
        this(tagName, Priority.NONE);
    }

    /**
     * Returns true if a given string is a valid tag name.
     */
    public static boolean isValidTagName(String test) {
        return test.matches(VALIDATION_REGEX);
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Tag)) {
            return false;
        }

        Tag otherTag = (Tag) other;
        return tagName.equals(otherTag.tagName)
                && priority.equals(otherTag.priority);
    }

    @Override
    public int hashCode() {
        return tagName.hashCode() + priority.hashCode();
    }

    /**
     * Format state as text for viewing, as well as now displaying the priority.
     */
    public String toString() {
        return priority != Priority.NONE
                ? '[' + tagName + ": " + priority + ']'
                : '[' + tagName + ']';
    }
}
