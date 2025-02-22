package seedu.address.model.person;

import static java.util.Objects.requireNonNull;

/**
 * Represents a Person's remark in the address book.
 * Guarantees: immutable; is valid.
 */
public class Remark {

    public final String remarkDescription;

    /**
     * Constructs an {@code Address}.
     *
     * @param remarkDescription A valid remark.
     */
    public Remark(String remarkDescription) {
        requireNonNull(remarkDescription);
        this.remarkDescription = remarkDescription;
    }

    @Override
    public String toString() {
        return this.remarkDescription;
    }

    @Override
    public boolean equals(Object other) {
        return other == this // short circuit if same object
                || (other instanceof Remark // instanceof handles nulls
                && remarkDescription.equals(((Remark) other).remarkDescription)); // state check
    }

    @Override
    public int hashCode() {
        return remarkDescription.hashCode();
    }

}
