package seedu.address;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import seedu.address.commons.exceptions.DataLoadingException;
import seedu.address.model.ReadOnlyAddressBook;
import seedu.address.model.ReadOnlyUserPrefs;
import seedu.address.model.UserPrefs;
import seedu.address.storage.Storage;

public class MainAppTest {

    @TempDir
    public Path testFolder;

    private MainApp mainApp = new MainApp();

    @Test
    public void initModelManager_default() {
        Storage storageManager = new StorageManagerStub();
        assertFalse(mainApp.initModelManager(storageManager, new UserPrefs()).isInitialDataFileLoadingError());
    }

    @Test
    public void initModelManager_corruptedDataFile() throws Exception {
        Storage storageManager = new StorageManagerErrorStub();
        assertTrue(mainApp.initModelManager(storageManager, new UserPrefs()).isInitialDataFileLoadingError());
    }

    /**
     * A stub StorageManager.
     */
    private static class StorageManagerStub implements Storage {
        @Override
        public Path getUserPrefsFilePath() {
            return Paths.get("testDir");
        }

        @Override
        public Optional<UserPrefs> readUserPrefs() throws DataLoadingException {
            return Optional.empty();
        }

        @Override
        public Path getAddressBookFilePath() { // this one will be called
            return Paths.get("testDir");
        }

        @Override
        public Optional<ReadOnlyAddressBook> readAddressBook() throws DataLoadingException { // this one cannot throw error
            return Optional.empty();
        }

        @Override
        public Optional<ReadOnlyAddressBook> readAddressBook(Path filePath) throws DataLoadingException {
            return Optional.empty();
        }

        @Override
        public void saveAddressBook(ReadOnlyAddressBook addressBook, Path filePath) throws IOException {
            throw new IOException();
        }

        @Override
        public void saveAddressBook(ReadOnlyAddressBook addressBook) throws IOException {
            throw new IOException();
        }

        @Override
        public void saveUserPrefs(ReadOnlyUserPrefs userPrefs) throws IOException {
            throw new IOException();
        }
    }

    /**
     * A stub StorageManager which will throw error.
     */
    private static class StorageManagerErrorStub implements Storage {
        @Override
        public Path getUserPrefsFilePath() {
            return Paths.get("testDir");
        }

        @Override
        public Optional<UserPrefs> readUserPrefs() throws DataLoadingException {
            return Optional.empty();
        }

        @Override
        public Path getAddressBookFilePath() { // this one will be called
            return Paths.get("testDir");
        }

        @Override
        public Optional<ReadOnlyAddressBook> readAddressBook() throws DataLoadingException { // this one need to throw
            throw new DataLoadingException(new Exception("error"));
        }

        @Override
        public Optional<ReadOnlyAddressBook> readAddressBook(Path filePath) throws DataLoadingException {
            throw new DataLoadingException(new Exception("error"));
        }

        @Override
        public void saveAddressBook(ReadOnlyAddressBook addressBook, Path filePath) throws IOException {
            throw new IOException();
        }

        @Override
        public void saveAddressBook(ReadOnlyAddressBook addressBook) throws IOException {
            throw new IOException();
        }

        @Override
        public void saveUserPrefs(ReadOnlyUserPrefs userPrefs) throws IOException {
            throw new IOException();
        }
    }
}
