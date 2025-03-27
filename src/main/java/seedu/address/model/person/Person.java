package seedu.address.model.person;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.Collections;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.tag.Tag;

/**
 * Represents a Person in the address book.
 * Guarantees: details are present and not null, field values are validated, immutable.
 */
public class Person {

    // Identity fields
    private final Name name;
    private final Phone phone;
    private final Email email;
    private final Major major;


    // Data fields
    private final Address address;
    private final Set<Tag> tags = new HashSet<>();

    // Flag to store visibility status
    private final BooleanProperty areDetailsVisible = new SimpleBooleanProperty(true);

    /**
     * Every field must be present and not null.
     */
    public Person(Name name, Phone phone, Email email, Address address, Set<Tag> tags, Major major) {
        requireAllNonNull(name, phone, email, address, tags);
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.tags.addAll(tags);
        this.major = major;
        areDetailsVisible.set(true);
    }

    public Name getName() {
        return name;
    }

    public Phone getPhone() {
        return phone;
    }

    public Email getEmail() {
        return email;
    }

    public Address getAddress() {
        return address;
    }

    public Major getMajor() {
        return major;
    }

    /**
     * Returns an immutable tag set, which throws {@code UnsupportedOperationException}
     * if modification is attempted.
     */
    public Set<Tag> getTags() {
        return Collections.unmodifiableSet(tags);
    }

    /**
     * Returns true if person has a tag also in {@code targetTags}/
     *
     * @param targetTags Set of tags to be matched against.
     */
    public boolean hasTags(Set<Tag> targetTags) {
        return !Collections.disjoint(this.tags, targetTags);
    }

    /**
     * Returns true if both persons have the same name.
     * This defines a weaker notion of equality between two persons.
     */
    public boolean isSamePerson(Person otherPerson) {
        if (otherPerson == this) {
            return true;
        }

        return otherPerson != null
                && otherPerson.getName().equals(getName());
    }

    /**
     * Returns true if both persons have the same identity and data fields.
     * This defines a stronger notion of equality between two persons.
     */
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Person)) {
            return false;
        }

        Person otherPerson = (Person) other;
        return name.equals(otherPerson.name)
                && phone.equals(otherPerson.phone)
                && email.equals(otherPerson.email)
                && address.equals(otherPerson.address)
                && major.equals(otherPerson.major)
                && tags.equals(otherPerson.tags);
    }

    @Override
    public int hashCode() {
        // use this method for custom fields hashing instead of implementing your own
        return Objects.hash(name, phone, email, address, major, tags);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("name", name)
                .add("phone", phone)
                .add("email", email)
                .add("address", address)
                .add("major", major)
                .add("tags", tags)
                .toString();
    }

    /**
     * Returns the BooleanProperty representing the visibility state of the person's details.
     *
     * @return the detailsVisible property.
     */
    public BooleanProperty detailsVisibleProperty() {
        return areDetailsVisible;
    }

    /**
     * Returns true if the details are visible.
     *
     * @return true if details are visible, false otherwise.
     */
    public boolean areDetailsVisible() {
        return areDetailsVisible.get();
    }

    /**
     * Hides the details of the person.
     * Sets the property to false.
     */
    public void hideDetails() {
        areDetailsVisible.set(false);
    }

    /**
     * Shows the details of the person.
     * Sets the property to true.
     */
    public void showDetails() {
        areDetailsVisible.set(true);
    }
}
