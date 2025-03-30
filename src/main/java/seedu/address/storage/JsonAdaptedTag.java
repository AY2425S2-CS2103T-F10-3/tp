package seedu.address.storage;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.tag.Priority;
import seedu.address.model.tag.Tag;

/**
 * Jackson-friendly version of {@link Tag}.
 */
class JsonAdaptedTag {

    private final String tagName;
    private final String priority;

    /**
     * Constructs a {@code JsonAdaptedTag} with the given {@code tagName} and {@code priority}.
     */
    @JsonCreator
    public JsonAdaptedTag(
            @JsonProperty("tagName") String tagName,
            @JsonProperty("priority") String priority) {
        this.tagName = tagName;
        this.priority = (priority == null || priority.isEmpty()) ? "" : priority;
    }

    /**
     * Converts a given {@code Tag} into this class for Jackson use.
     */
    public JsonAdaptedTag(Tag source) {
        tagName = source.tagName;
        priority = source.priority.toString();
    }

    public String getTagName() {
        return tagName;
    }

    public String getPriority() {
        return priority;
    }

    /**
     * Converts this Jackson-friendly adapted tag object into the model's {@code Tag} object.
     *
     * @throws IllegalValueException if there were any data constraints violated in the adapted tag.
     */
    public Tag toModelType() throws IllegalValueException {
        if (!Tag.isValidTagName(tagName)) {
            throw new IllegalValueException(Tag.MESSAGE_CONSTRAINTS);
        }
        return new Tag(tagName, Priority.fromString(priority));
    }
}
