package seedu.address.testutil;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import seedu.address.model.person.Person;
import seedu.address.model.util.SampleDataUtil;

public class SampleDataUtilTest {

    @Test
    public void getSamplePersons_returnsCorrectYears() {
        Person[] samplePersons = SampleDataUtil.getSamplePersons();
        assertNotNull(samplePersons);
        assertEquals(6, samplePersons.length);

        assertEquals("2002", samplePersons[0].getYear().value); // Alex Yeoh
        assertEquals("2002", samplePersons[1].getYear().value); // Bernice Yu
        assertEquals("2004", samplePersons[2].getYear().value); // Charlotte Oliveiro
        assertEquals("2009", samplePersons[3].getYear().value); // David Li
        assertEquals("2013", samplePersons[4].getYear().value); // Irfan Ibrahim
        assertEquals("1998", samplePersons[5].getYear().value); // Roy Balakrishnan
    }
}

