package seedu.address.commons.util;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.testutil.Assert.assertThrows;

import java.nio.file.Path;

import org.junit.jupiter.api.Test;

public class FileUtilTest {

    @Test
    public void isValidPath() {
        // valid path
        assertTrue(FileUtil.isValidPath("valid/file/path"));

        // invalid path
        assertFalse(FileUtil.isValidPath("a\0"));

        // null path -> throws NullPointerException
        assertThrows(NullPointerException.class, () -> FileUtil.isValidPath(null));
    }

    @Test
    public void getFileNameWithoutExt() {
        // basic test
        assertEquals(FileUtil.getFileNameWithoutExt(Path.of("test.java")), "test");

        // no extention
        assertEquals(FileUtil.getFileNameWithoutExt(Path.of("test")), "test");

        // empty extention
        assertEquals(FileUtil.getFileNameWithoutExt(Path.of("test.")), "test");

        // empty file name
        assertEquals(FileUtil.getFileNameWithoutExt(Path.of(".java")), "");

        // empty path
        assertEquals(FileUtil.getFileNameWithoutExt(Path.of("")), "");

        // with parent directories
        assertEquals(FileUtil.getFileNameWithoutExt(Path.of("1/2/3/test.java")), "test");
    }

    @Test
    public void getFileExtention() {
        // basic test
        assertEquals(FileUtil.getFileExtension(Path.of("test.java")), "java");

        // no extention
        assertEquals(FileUtil.getFileExtension(Path.of("test")), "");

        // empty extention
        assertEquals(FileUtil.getFileExtension(Path.of("test.")), "");

        // empty file name
        assertEquals(FileUtil.getFileExtension(Path.of(".java")), "java");

        // empty path
        assertEquals(FileUtil.getFileExtension(Path.of("")), "");

        // with parent directories
        assertEquals(FileUtil.getFileExtension(Path.of("1/2/3/test.java")), "java");
    }
}
