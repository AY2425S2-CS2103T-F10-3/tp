package seedu.address.testutil;

import java.util.Set;

import seedu.address.model.tag.Priority;
import seedu.address.model.tag.Tag;

/**
 * A utility class containing a list of {@code Set} of {@code Tag} objects to be used in tests.
 */
public class TypicalTags {
    public static final Set<Tag> EMPTY_TAG = Set.<Tag>of();
    public static final Set<Tag> SINGLE_TAG = Set.<Tag>of(new Tag("testTag1", Priority.NONE));
    public static final Set<Tag> MULTIPLE_TAGS = Set.<Tag>of(new Tag("testTag1", Priority.NONE),
            new Tag("testTag2", Priority.NONE));
}
