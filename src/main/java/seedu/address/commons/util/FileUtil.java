package seedu.address.commons.util;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.InvalidPathException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

/**
 * Writes and reads files
 */
public class FileUtil {

    private static final String CHARSET = "UTF-8";

    public static boolean isFileExists(Path file) {
        return Files.exists(file) && Files.isRegularFile(file);
    }

    /**
     * Returns true if {@code path} can be converted into a {@code Path} via {@link Paths#get(String)},
     * otherwise returns false.
     * @param path A string representing the file path. Cannot be null.
     */
    public static boolean isValidPath(String path) {
        try {
            Paths.get(path);
        } catch (InvalidPathException ipe) {
            return false;
        }
        return true;
    }

    /**
     * Creates a file if it does not exist along with its missing parent directories.
     * @throws IOException if the file or directory cannot be created.
     */
    public static void createIfMissing(Path file) throws IOException {
        if (!isFileExists(file)) {
            createFile(file);
        }
    }

    /**
     * Creates a file if it does not exist along with its missing parent directories.
     */
    public static void createFile(Path file) throws IOException {
        if (Files.exists(file)) {
            return;
        }

        createParentDirsOfFile(file);

        Files.createFile(file);
    }

    /**
     * Creates parent directories of file if it has a parent directory
     */
    public static void createParentDirsOfFile(Path file) throws IOException {
        Path parentDir = file.getParent();

        if (parentDir != null) {
            Files.createDirectories(parentDir);
        }
    }

    /**
     * Assumes file exists
     */
    public static String readFromFile(Path file) throws IOException {
        return new String(Files.readAllBytes(file), CHARSET);
    }

    /**
     * Writes given string to a file.
     * Will create the file if it does not exist yet.
     */
    public static void writeToFile(Path file, String content) throws IOException {
        Files.write(file, content.getBytes(CHARSET));
    }

    /**
     * Backups the file given
     * Backup file's name will be in the form of
     *      [filename].[ext] -> [filename]_old.[ext]
     */
    public static void backupFile(Path file) throws IOException {
        String oldFileName = getFileNameWithoutExt(file);
        String backupFileName = oldFileName + "_old";
        String fileExt = getFileExtension(file);
        if (!fileExt.isBlank()) {
            backupFileName += "." + fileExt;
        }
        Path backupFilePath = Path.of(file.getParent().toString(), backupFileName);
        createIfMissing(backupFilePath);
        Files.copy(file, backupFilePath, StandardCopyOption.REPLACE_EXISTING);
    }

    /**
     * Returns string of the filename of the given path without extension.
     * @param path A string representing the file path. Cannot be null.
     */
    public static String getFileNameWithoutExt(Path path) {
        String fileName = path.getFileName().toString();
        int index = fileName.lastIndexOf(".");
        if (index == -1) {
            return fileName;
        }
        return fileName.substring(0, index);
    }

    /**
     * Returns string of the extension of the given file.
     * @param file A string representing the file path. Cannot be null.
     */
    public static String getFileExtension(Path file) {
        String fileName = file.getFileName().toString();
        int index = fileName.lastIndexOf(".");
        if (index == -1) {
            return "";
        }
        return fileName.substring(index + 1);
    }
}
