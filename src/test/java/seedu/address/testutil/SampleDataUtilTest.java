package seedu.address.testutil;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import seedu.address.model.person.Person;
import seedu.address.model.util.SampleDataUtil;

public class SampleDataUtilTest {

    @Test
    public void getSamplePersons_returnsCorrectMajors() {
        Person[] samplePersons = SampleDataUtil.getSamplePersons();
        assertNotNull(samplePersons);
        assertEquals(6, samplePersons.length);

        assertEquals("Arts", samplePersons[0].getMajor().value); // Alex Yeoh
        assertEquals("Biology", samplePersons[1].getMajor().value); // Bernice Yu
        assertEquals("Chemistry", samplePersons[2].getMajor().value); // Charlotte Oliveiro
        assertEquals("Dentistry", samplePersons[3].getMajor().value); // David Li
        assertEquals("Intelligence", samplePersons[4].getMajor().value); // Irfan Ibrahim
        assertEquals("Real estate", samplePersons[5].getMajor().value); // Roy Balakrishnan
    }
}

