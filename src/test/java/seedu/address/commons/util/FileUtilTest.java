package seedu.address.commons.util;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.testutil.Assert.assertThrows;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

public class FileUtilTest {
    @TempDir
    Path tempDir;

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

    @Test
    public void backupFileTest_correct_result() throws IOException {
        final String fileName = "testFile.json";
        final String backupFileName = "testFile_old.json";

        Path originalFile = tempDir.resolve(fileName);
        Files.writeString(originalFile, "Hello World.\nSome Data Here!");

        FileUtil.backupFile(originalFile);

        Path backupFile = tempDir.resolve(backupFileName);

        // backup file is created
        assertTrue(Files.exists(backupFile));

        // content of backup file is correct
        assertEquals(Files.readString(originalFile), Files.readString(backupFile));
    }

    @Test
    public void deleteFileTest_correct_result() throws IOException {
        final String fileName = "testFile.json";

        Path originalFile = tempDir.resolve(fileName);

        // need to write some data, otherwise the file will not be created
        Files.writeString(originalFile, "Hello World.\nSome Data Here!");

        FileUtil.deleteFile(originalFile);

        // backup file is created
        assertFalse(Files.exists(originalFile));
    }

    @Test
    public void backupAndDeleteFileTest_correct_result() throws IOException {
        final String fileName = "testFile.json";
        final String backupFileName = "testFile_old.json";
        final String oriData = "Hello World.\nSome Data Here!";

        Path originalFile = tempDir.resolve(fileName);
        Files.writeString(originalFile, oriData);

        FileUtil.backupAndDeleteFile(originalFile);

        Path backupFile = tempDir.resolve(backupFileName);

        // backup file is created
        assertTrue(Files.exists(backupFile));

        // old/corrupted file is deleted
        assertFalse(Files.exists(originalFile));

        // content of backup file is correct
        assertEquals(oriData, Files.readString(backupFile));
    }

}
