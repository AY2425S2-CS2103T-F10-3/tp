package seedu.address.testutil;

import java.util.Set;

import seedu.address.model.tag.Tag;

/**
 * A utility class containing a list of {@code Set} of {@code Tag} objects to be used in tests.
 */
public class TypicalTags {
    public static final Set<Tag> EMPTY_TAG = Set.<Tag>of();
    public static final Set<Tag> SINGLE_TAG = Set.<Tag>of(new Tag("testTag1"));
    public static final Set<Tag> MULTIPLE_TAGS = Set.<Tag>of(new Tag("testTag1"), new Tag("testTag2"));
}
