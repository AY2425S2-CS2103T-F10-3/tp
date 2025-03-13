package seedu.address;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import seedu.address.model.UserPrefs;
import seedu.address.storage.JsonAddressBookStorage;
import seedu.address.storage.JsonUserPrefsStorage;
import seedu.address.storage.StorageManager;

public class MainAppTest {

    @TempDir
    public Path testFolder;

    private MainApp mainApp = new MainApp();

    @Test
    public void initModelManager_default() {
        JsonAddressBookStorage addressBookStorage = new JsonAddressBookStorage(getTempFilePath("ab"));
        JsonUserPrefsStorage userPrefsStorage = new JsonUserPrefsStorage(getTempFilePath("prefs"));
        StorageManager storageManager = new StorageManager(addressBookStorage, userPrefsStorage);
        assertFalse(mainApp.initModelManager(storageManager, new UserPrefs()).isInitialDataFileLoadingError());
    }

    @Test
    public void initModelManager_corruptedDataFile() throws Exception {
        JsonAddressBookStorage addressBookStorage = new JsonAddressBookStorage(getCorruptedTempFilePath());
        JsonUserPrefsStorage userPrefsStorage = new JsonUserPrefsStorage(getTempFilePath("prefs"));
        StorageManager storageManager = new StorageManager(addressBookStorage, userPrefsStorage);
        assertTrue(mainApp.initModelManager(storageManager, new UserPrefs()).isInitialDataFileLoadingError());
    }

    private Path getTempFilePath(String fileName) {
        return testFolder.resolve(fileName);
    }

    private Path getCorruptedTempFilePath() throws IOException {
        Path testWrongFormatFile = getTempFilePath("testContains123.txt");
        Files.writeString(testWrongFormatFile, "123");
        return testWrongFormatFile;
    }
}
