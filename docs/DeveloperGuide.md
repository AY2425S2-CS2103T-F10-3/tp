---
  layout: default.md
  title: "Developer Guide"
---

# AB-3 Developer Guide

* [**Acknowledgements**](#acknowledgements)
* [**Setting up, getting started**](#setting-up-getting-started)
* [**Design**](#design)
  * [Architecture](#architecture)
  * [UI component](#ui-component)
  * [Logic component](#logic-component)
  * [Model component](#model-component)
  * [Storage component](#storage-component)
  * [Setup component](#setup-component)
  * [Common classes](#common-classes)
* [**Implementation**](#implementation)
  * [Backup on corrupt workflow](#backup-on-corrupt-workflow)
  * [DeleteCommand workflow](#deletecommand-workflow)
  * [HideCommand workflow](#hidecommand-workflow)
  * [FindCommand workflow](#findcommand-workflow)
  * [SortCommand workflow](#sortcommand-workflow)
* [**Documentation, logging, testing, configuration, dev-ops**](#documentation-logging-testing-configuration-dev-ops)
* [**Appendix: Requirements**](#appendix-requirements)
  * [Product scope](#product-scope)
  * [User stories](#user-stories)
  * [Use cases](#use-cases)
    * [Use case: Add a person](#use-case-add-a-person)
    * [Use case: Delete a person based on index](#use-case-delete-a-person-based-on-index)
    * [Use case: Delete person(s) based on tags](#use-case-delete-persons-based-on-tags)
    * [Use case: Edit a person](#use-case-edit-a-person)
    * [Use case: List all students](#use-case-list-all-students)
    * [Use case: Sort contacts](#use-case-sort-contacts)
    * [Use case: Hide Information](#use-case-hide-information)
    * [Use case: Unhide Information](#use-case-unhide-information)
    * [Use case: Find a person](#use-case-find-a-person)
    * [Use case: Save Data](#use-case-save-data)
    * [Use case: Clear All Contacts](#use-case-clear-all-contacts)
  * [Non-Functional Requirements](#non-functional-requirements)
  * [Glossary](#glossary)
* [**Appendix: Instructions for manual testing**](#appendix-instructions-for-manual-testing)
  * [Launch and shutdown](#launch-and-shutdown)
  * [Displaying help window](#displaying-help-window)
  * [Adding a student](#adding-a-student)
  * [Listing all students](#listing-all-students)
  * [Hiding and Unhiding information](#hiding-and-unhiding-information)
  * [Sorting students](#sorting-students)
  * [Editing a Student](#editing-a-student)
  * [Deleting a student](#deleting-a-student)
  * [Saving data](#saving-data)

--------------------------------------------------------------------------------------------------------------------

## **Acknowledgements**

CollabSync is built upon [AddressBook-Level3](https://se-education.org/addressbook-level3/), a project developed by the [SE-EDU initiative](https://se-education.org/).

We also acknowledge the use of the following third-party libraries: [JavaFX](https://openjfx.io/), [JUnit5](https://github.com/junit-team/junit5)

--------------------------------------------------------------------------------------------------------------------

## **Setting up, getting started**

Refer to the guide [_Setting up and getting started_](SettingUp.md).

--------------------------------------------------------------------------------------------------------------------

## **Design**

### Architecture

<puml src="diagrams/ArchitectureDiagram.puml" width="280" />

The ***Architecture Diagram*** given above explains the high-level design of the App.

Given below is a quick overview of main components and how they interact with each other.

**Main components of the architecture**

**`Main`** (consisting of classes [`Main`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java) and [`MainApp`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java)) is in charge of the app launch and shut down.
* At app launch, it initializes the other components in the correct sequence, and connects them up with each other.
* At shut down, it shuts down the other components and invokes cleanup methods where necessary.

The bulk of the app's work is done by the following four components:

* [**`UI`**](#ui-component): The UI of the App.
* [**`Logic`**](#logic-component): The command executor.
* [**`Model`**](#model-component): Holds the data of the App in memory.
* [**`Storage`**](#storage-component): Reads data from, and writes data to, the hard disk.
* [**`Setup`**](#setup-component): Responsible for the initial configuration and launching of the AddressBook application

[**`Commons`**](#common-classes) represents a collection of classes used by multiple other components.

**How the architecture components interact with each other**

The *Sequence Diagram* below shows how the components interact with each other for the scenario where the user issues the command `delete 1`.

<puml src="diagrams/ArchitectureSequenceDiagram.puml" width="574" />

Each of the four main components (also shown in the diagram above),

* defines its *API* in an `interface` with the same name as the Component.
* implements its functionality using a concrete `{Component Name}Manager` class (which follows the corresponding API `interface` mentioned in the previous point.

For example, the `Logic` component defines its API in the `Logic.java` interface and implements its functionality using the `LogicManager.java` class which follows the `Logic` interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.

<puml src="diagrams/ComponentManagers.puml" width="300" />

The sections below give more details of each component.

### UI component

The **API** of this component is specified in [`Ui.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java)

<puml src="diagrams/UiClassDiagram.puml" alt="Structure of the UI Component"/>

The UI consists of a `MainWindow` that is made up of parts e.g.`CommandBox`, `ResultDisplay`, `PersonListPanel`, `StatusBarFooter` etc. All these, including the `MainWindow`, inherit from the abstract `UiPart` class which captures the commonalities between classes that represent parts of the visible GUI.

The `UI` component uses the JavaFx UI framework. The layout of these UI parts are defined in matching `.fxml` files that are in the `src/main/resources/view` folder. For example, the layout of the [`MainWindow`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java) is specified in [`MainWindow.fxml`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml)

The `UI` component,

* executes user commands using the `Logic` component.
* listens for changes to `Model` data so that the UI can be updated with the modified data.
* keeps a reference to the `Logic` component, because the `UI` relies on the `Logic` to execute commands.
* depends on some classes in the `Model` component, as it displays `Person` object residing in the `Model`.

### Logic component

**API** : [`Logic.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java)

Here's a (partial) class diagram of the `Logic` component:

<puml src="diagrams/LogicClassDiagram.puml" width="550"/>

The sequence diagram below illustrates the interactions within the `Logic` component, taking `execute("delete 1")` API call as an example.

<puml src="diagrams/DeleteSequenceDiagram.puml" alt="Interactions Inside the Logic Component for the `delete 1` Command" />

<box type="info" seamless>

**Note:** The lifeline for `DeleteCommandParser` should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.
</box>

How the `Logic` component works:

1. When `Logic` is called upon to execute a command, it is passed to an `AddressBookParser` object which in turn creates a parser that matches the command (e.g., `DeleteCommandParser`) and uses it to parse the command.
1. This results in a `Command` object (more precisely, an object of one of its subclasses e.g., `DeleteCommand`) which is executed by the `LogicManager`.
1. The command can communicate with the `Model` when it is executed (e.g. to delete a person).<br>
   Note that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object and the `Model`) to achieve.
1. The result of the command execution is encapsulated as a `CommandResult` object which is returned back from `Logic`.

Here are the other classes in `Logic` (omitted from the class diagram above) that are used for parsing a user command:

<puml src="diagrams/ParserClasses.puml" width="600"/>

How the parsing works:
* When called upon to parse a user command, the `AddressBookParser` class creates an `XYZCommandParser` (`XYZ` is a placeholder for the specific command name e.g., `AddCommandParser`) which uses the other classes shown above to parse the user command and create a `XYZCommand` object (e.g., `AddCommand`) which the `AddressBookParser` returns back as a `Command` object.
* All `XYZCommandParser` classes (e.g., `AddCommandParser`, `DeleteCommandParser`, ...) inherit from the `Parser` interface so that they can be treated similarly where possible e.g, during testing.

### Model component
**API** : [`Model.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java)

<puml src="diagrams/ModelClassDiagram.puml" width="450" />


The `Model` component,

* stores the address book data i.e., all `Person` objects (which are contained in a `UniquePersonList` object).
* stores the currently 'selected' `Person` objects (e.g., results of a search query) as a separate _filtered_ list which is exposed to outsiders as an unmodifiable `ObservableList<Person>` that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.
* stores a `UserPref` object that represents the user’s preferences. This is exposed to the outside as a `ReadOnlyUserPref` objects.
* does not depend on any of the other three components (as the `Model` represents data entities of the domain, they should make sense on their own without depending on other components)

<box type="info" seamless>

**Note:** An alternative (arguably, a more OOP) model is given below. It has a `Tag` list in the `AddressBook`, which `Person` references. This allows `AddressBook` to only require one `Tag` object per unique tag, instead of each `Person` needing their own `Tag` objects.<br>

<puml src="diagrams/BetterModelClassDiagram.puml" width="450" />

</box>


### Storage component

**API** : [`Storage.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java)

<puml src="diagrams/StorageClassDiagram.puml" width="550" />

The `Storage` component,
* can save both address book data and user preference data in JSON format, and read them back into corresponding objects.
* inherits from both `AddressBookStorage` and `UserPrefStorage`, which means it can be treated as either one (if only the functionality of only one is needed).
* depends on some classes in the `Model` component (because the `Storage` component's job is to save/retrieve objects that belong to the `Model`)

### Setup component

The `Setup` component, 
* based on the original implementations of `Main.java` , `MainApp.java` & `AppParameters.java` in AB3.
* now these 3 classes are in a package called `setup` for better coding standards.

### Common classes

Classes used by multiple components are in the `seedu.address.commons` package.

--------------------------------------------------------------------------------------------------------------------

## **Implementation**

This section describes some noteworthy details on how certain features are implemented.

### Backup on corrupt workflow

#### Implementation

The sequence diagram below illustrates the interactions between different components when corrupted data is detected and `backupAndDeleteFile(filePath)` is called.

<puml src="diagrams/BackupOnCorruptSequenceDiagram.puml" alt="Backup On Corrupt Sequence Diagram" />

Here's the workflow:
1. During `MainApp`'s initialization, `MainApp` will set the `Logic` component to contain information about whether there is an initial error.
2. When `MainApp.start()` is called, it will invoke `UI.start()` and pass the `Logic` component to it.
3. The `UI` will then check with `Logic` whether an initial error exists.
4. If there is an initial error, the `UI` will display a prompt to the user and wait for user interaction.
5. Simultaneously, the `UI` will call the `backupAndDeleteFile()` method from `FileUtil`.
6. `backupAndDeleteFile()` will gather and prepare all necessary information for the backup and delete.
7. It will then call the `copy()` method from `Files` to complete the backup process.
8. Finally, the corrupted data file will be deleted after the backup process is done.

<box type="info" seamless>

**Note:** The prompt and the backup process are invoked concurrently.

</box>

### DeleteCommand workflow

#### Implementation

The `DeleteCommand` is part of the `AddressBookParser` layer in the application and handles the action of deleting the contact(s). <br>

<puml src="diagrams/DeleteCommand.puml" alt="Delete Command Sequence Diagram" />

Here's the workflow:
1. The `DeleteCommand` is invoked when the user types the command `delete`. This is handled in the `execute(Model model)` method of the `DeleteCommand` class. The `Model` object, which represents the application's data layer, is passed into the method.
2. The `DeleteCommand` requests the `Model` to retrieve the filtered list of `Person` objects via the method call `model.getFilteredPersonList()`. This call is made to fetch all the persons that the user has in the current view (filtered according to certain criteria).
3. Before `DeleteCommand` continues it's execution, `DeleteCommand` will first check the format of the parameters to determine user wants to delete with tags or index.
4. Next, `DeleteCommand` will prompt user for confirmation before proceed with deletion.
5. If the command format matches `delete INDEX`, the system invokes `deleteWithIndex()`. This method retrieves the target `Person` object based on the provided index, then calls `deletePerson()` from the `Model` object to remove the person.
6. If the command format matches `delete t/TAG [ ,t/TAGS]`, the system invokes `deleteWithTag()`. This method filters the `List<Person>` to find entries matching any of the specified tags (using `hasTags()`). Deletes all matched persons by calling `deletePerson()` from the Model object.

### HideCommand workflow

#### Implementation

The `HideCommand` is part of the `AddressBookParser` layer in the application and handles the action of hiding the details of a contact. <br>
This operation is executed when the user triggers the `hide` command in the system.

<puml src="diagrams/HideCommand.puml" alt="Hide Command Sequence Diagram" />

Here's the workflow:
1. The `HideCommand` is invoked when the user types the command `hide`. This is handled in the `execute(Model model)` method of the `HideCommand` class. The `Model` object, which represents the application's data layer, is passed into the method.
2. The `HideCommand` requests the `Model` to retrieve the filtered list of `Person` objects via the method call `model.getFilteredPersonList()`. This call is made to fetch all the persons that the user has in the current view (filtered according to certain criteria).
3. Once the `filteredPersonList` is retrieved, the `HideCommand` iterates over each `Person` object in the list and calls the method `person.hideDetails()`. This hides the details of each person in the list. The `hideDetails()` method, which is part of the `Person` class, modifies the internal state of the `Person` object, essentially "hiding" the contact's details from the user interface.
4. After the details are hidden, the `HideCommand` returns a `CommandResult` indicating the success of the operation. The message `"Contact details hidden."` is passed to the `CommandResult` constructor, along with additional flags that help the UI decide how to update (whether to show a success message or not).
5. The UI layer will use the `CommandResult` object to display feedback to the user. If successful, the system will notify the user that the contact's details have been hidden.


<box type="info" seamless>

**Note:** `UnhideCommand` also follows a similar workflow, but instead of calling `hideDetails()`, the method invoked is `showDetails()`

</box>

#### UI Update Behavior

Below is the frontend update process:

1. **Model State Update:**  
   After `hideDetails()` is called on each `Person`, the internal `areDetailsVisible` property is set to `false`.

2. **Automatic UI Refresh via Data Binding:**  
   In the `PersonCard` component, the UI elements (such as phone, email, address, and major) are bound to the person's `detailsVisibleProperty()`. For example:
   ```java
   phone.visibleProperty().bind(person.detailsVisibleProperty());
   phone.managedProperty().bind(person.detailsVisibleProperty());

   address.visibleProperty().bind(person.detailsVisibleProperty());
   address.managedProperty().bind(person.detailsVisibleProperty());

   email.visibleProperty().bind(person.detailsVisibleProperty());
   email.managedProperty().bind(person.detailsVisibleProperty());

   major.visibleProperty().bind(person.detailsVisibleProperty());
   major.managedProperty().bind(person.detailsVisibleProperty());
   ```
   With these bindings in place, when `areDetailsVisible` is set to `false`, these labels automatically become invisible and are excluded from layout calculations.

3. **UI Outcome:**
   As a result, once the `HideCommand` is executed:

    - The UI refreshes automatically.

    - The student’s detailed information (phone, email, address, major) is hidden.

    - Only the basic details (such as the name and tags) remain visible.

    If the user issues an `unhide` command, the `showDetails()` method is invoked, setting `areDetailsVisible` back to `true` and causing the UI to re-render the full details. 

### FindCommand workflow

#### Implementation

The `FindCommand` is part of the `AddressBookParser` layer and handles searching for persons based on keywords.  
This operation is executed when the user triggers the `find` command in the system.

<puml src="diagrams/FindCommand.puml" alt="Find Command Sequence Diagram" />

Here's the workflow:
1. The user types the command `find KEYWORD...`. This is handled in the `execute(Model model)` method of the `FindCommand` class.
2. The `FindCommand` creates a `PersonContainsKeywordsPredicate` object with the specified keywords.
3. The `FindCommand` calls `model.updateFilteredPersonList(Predicate<Person>)` to update the filtered list of `Person` objects. This filters out any persons whose names do not match the given keywords.
4. The `FindCommand` calls `model.getFilteredPersonList()` to get the size of the list displayed.
5. A `CommandResult` is returned, containing a success message that indicates how many persons were found (e.g., `"X persons listed!"`).
6. The UI layer reads the `CommandResult` and refreshes the display to show only those persons who match the keywords.

<box type="info" seamless>

**Note:** 
1. The search is case-insensitive, meaning a keyword "alice" will match both "Alice" and "alice" in the person's name.
2. `ListCommand` works similar to the above, but the `Predicate<Person>` is always set to `true`, which makes it display all the contacts by default.

</box>

### SortCommand Workflow

#### Implementation

The `SortCommand` is part of the `AddressBookParser` layer and handles searching for persons based on keywords.  
This operation is executed when the user triggers the `sort` command in the system. <br>
If identical names are in the contact, the contacts will be sorted using their phone numbers.

<puml src="diagrams/SortCommand.puml" alt="Sort Command Sequence Diagram" />

Here's the workflow:
1. The user enters the command `sort asc` or `sort desc`.
2. In the `execute(Model model)` method of `SortCommand`, the following steps occur:
    - The model is checked to ensure it is not null.
    - The filtered person list is retrieved via `model.getFilteredPersonList()`.
    - **Empty List Check:**  
      If the list is empty, the command immediately returns a `CommandResult` with the message `"No contacts to sort."`
    - **Sorting Comparator:**  
      A comparator is defined that first compares persons by name, and in cases where names are equal, by phone number:
      ```java
      Comparator<Person> comparator = Comparator.comparing(Person::getName)
              .thenComparing(Person::getPhone);
      ```
    - **Order Adjustment:**  
      If the command is to sort in descending order (`isAscending` is false), the comparator is reversed.
    - **Sorting the List:**  
      The comparator is then passed to the model via `model.sortFilteredPersonList(comparator)`, which reorders the filtered list.
    - **Result Generation:**  
      Finally, a new `CommandResult` is created with a message indicating the sort order, e.g., `"Contacts sorted in ascending order."` or `"Contacts sorted in descending order."`

<box type="info" seamless>

**Note:** The sort operation does not modify the underlying data permanently; it only reorders the displayed filtered list in the UI.

</box>

--------------------------------------------------------------------------------------------------------------------

## **Documentation, logging, testing, configuration, dev-ops**

* [Documentation guide](Documentation.md)
* [Testing guide](Testing.md)
* [Logging guide](Logging.md)
* [Configuration guide](Configuration.md)
* [DevOps guide](DevOps.md)

--------------------------------------------------------------------------------------------------------------------

## **Appendix: Requirements**

### Product scope

**Target user profile**:

* is a National University of Singapore student
* need to manage project team contacts
* track relationships between classmates across multiple courses
* prefer desktop apps over other types
* can type fast
* prefers typing to mouse interactions
* is reasonably comfortable using CLI apps

**Value proposition**: manage contacts for NUS students faster than a typical mouse/GUI driven app


### User stories

Priorities: High (must have) - `* * *`, Medium (nice to have) - `* *`, Low (unlikely to have) - `*`

| Priority| As a …​                               | I want to …​                | So that I can…​                                       |
|---------|--------------------------------------------|----------------------------------|------------------------------------------------------------|
| `* * *` | user                                       | add a new student                | store and retrieve essential information easily            |
| `* * *` | user                                       | delete a student                 | remove outdated  or irrelevant entries                     |
| `* * *` | user                                       | find a student by name           | quickly locate specific student                            |
| `* *`   | user                                       | data save automatically          | so that I never lose my contacts even if the app crashes   |
| `* *`   | user                                       | find students by course          | quickly locate students with a specific course             |
| `* *`   | user                                       | clear all contacts at once       | reset the app for a new semester                           |
| `* *`   | user                                       | delete students by course        | remove related entries after a course ended                |
| `* *`   | user                                       | edit student details             | keep their details up-to-date                              |
| `* *`   | user                                       | sort student details             | keep their details in an orderly manner                    |
| `* *`   | user                                       | list all students                | see all my saved contacts at once                          |
| `* *`   | new user                                   | view a help menu                 | quickly learn how to use the application                   |
| `*`     | user                                       | remember my last search          | don't need to type it again                                |
| `*`     | privacy-conscious user                     | hide students' information       | hide sensitive details when others view my screen          |
| `*`     | privacy-conscious user                     | unhide students' information     | access full contact details when needed                    |
| `*`     | user with many persons in the address book | search for contacts fuzzily      | find a student even if I do not correctly know their names |
| `*`     | user with many persons in the address book | the application to load quickly  | access my information without delay                        |

### Use cases

(For all use cases below, the **System** is the `CollabSync` and the **Actor** is the `user`, unless specified otherwise)

---

#### Use case: Add a person

**MSS**

1. User requests to add a new person by specifying **Name, Phone, Email, Address, Major and Tags(if any)**
   (e.g., using `add n/NAME p/PHONE e/EMAIL a/ADDRESS m/MAJOR t/[TAGS]`).

2. CollabSync validates the details (e.g., checks phone format, email format, etc.).

3. CollabSync saves the new person to the address book.

   **Use case ends.**

**Extensions**

* 2a. User provides incomplete or invalid details. (e.g., phone number format is invalid)
    * 2a1. CollabSync shows an error message.

      **Use case ends.**

* 2b. User tries to add a contact that already exists (e.g., same **Name and Phone**).
    * 2b1. CollabSync rejects the duplicate entry and shows an error message.

      **Use case ends.**

---

#### Use case: Delete a person based on index

**MSS**

1.  User requests to list persons (e.g., using the `list` command).

2.  CollabSync shows a list of persons with their **Name, Phone, Email, Address, Major and Tags(if any)** in an indexed format.

3.  User requests to delete a specific person in the list by index (e.g., `delete 3`).

4.  CollabSync prompts a popup box to request user to confirm their deletion.

5. User enters the confirm button.

6. CollabSync deletes the person with the given index.

    **Use case ends.**

**Extensions**

* 2a. The list is empty.
    * 2a1. CollabSync informs the user that there are no contacts to delete.

      **Use case ends.**

* 3a. The given index is invalid.
    * 3a1. CollabSync shows an error message.

      **Use case** resumes at step 2.

* 4a. Cancel button or `x` was pressed.
    * 4a1. Contact is not deleted. Deletion canceled.

      **Use case** resumes at step 2.

---


#### Use case: Delete person(s) based on tags

**MSS**

1.  User requests to list persons (e.g., using the `list` command).

2.  CollabSync shows a list of persons with their **Name, Phone, Email, Address, Major and Tags(if any)** in an indexed format.

3.  User requests to delete a specific person in the list by the tags (e.g., `delete t/HSA1000`).

4.  CollabSync prompts a popup box to request user to confirm their deletion.

5. User enters the confirm button.

6. CollabSync deletes the person with the given index.

   **Use case ends.**

**Extensions**

* 2a. The list is empty.
    * 2a1. CollabSync informs the user that there are no contacts to delete.

      **Use case ends.**

* 3a. The given index is invalid.
    * 3a1. CollabSync shows an error message.

      **Use case** resumes at step 2.

* 4a. Cancel button or `x` was pressed.
    * 4a1. Contact is not deleted. Deletion canceled.

      **Use case** resumes at step 2.

---

#### Use case: Edit a person

**MSS**

1.  User requests to list persons (e.g., using the `list` command).

2. CollabSync shows a list of persons.

3. User requests to edit a specific person.

4. CollabSync updates the details of the person.

   **Use case ends.**

**Extensions**

* 2a. The list is empty.
  **Use case ends.**

* 3a. The given index is invalid.
    * 3a1. CollabSync shows an error message.
      Use case resumes at step 2.

* 3b. The new tags entered by user are of invalid format.
    * 3b1. CollabSync shows an error message.
      Use case resumes at step 3.

---

#### Use case: List all students

**MSS**

1. User enters the `list` command.

2. CollabSync displays a list of all students with their **Name, Phone, Email, Address, Major, and Tags (if any)** in an indexed format.

   **Use case ends.**

**Extensions**

* **2a. No students in the address book**:
    * **2a1.** CollabSync informs the user that the list is empty.

      **Use case ends.**

---

#### Use case: Sort contacts

**MSS**

1. User enters a **sort command** with a specified order (e.g., using 'sort asc' or 'sort desc').

2. Sorts the contact list in the specified order based on **Name**, followed by **Phone Number** if names are identical.

3. CollabSync displays the sorted contact list.

   **Use case ends.**

**Extensions**

* 2a. No contacts found in the list.
    * 2a1. CollabSync informs the user that there are no contacts to sort.

      **Use case ends.**

* 2b. User enters an invalid sorting order.
    * 2b1. CollabSync informs the user of the invalid input and provides the correct format.

      **Use case ends.**

---


#### Use case: Hide Information

**MSS**

1. User enters the `hide` command.

2. CollabSync automatically hides the contact details of all persons currently shown in the application, except for **Name and Tags** (if they were displayed previously).

   **Use case ends.**

**Extensions**

* **2a. Information is already hidden**:
    * **2a1.** The information of the contacts in the current window currently will remain hidden.

      **Use case ends.**

---

#### Use case: Unhide Information

**MSS**

1. User enters the `unhide` command.

2. CollabSync automatically reveals all the hidden information of the persons currently in the application.

   **Use case ends.**

**Extensions**

* **1a. No information was hidden**:
    * **1a1.** The information of the contacts in the current window will remain revealed.

      **Use case ends.**

---

#### Use case: Find a person

**MSS**

1.  User enters a **search term**. (e.g., using `find KEYWORD`).

2.  CollabSync searches for any **matching persons** based on the search term in their
    **Name, Phone, Email, Major** and **Tags**.

    **Use case ends.**

**Extensions**

* 2a. No matching persons found
    * 2a1. CollabSync informs the user that no results match the search.

      **Use case ends.**

---

#### Use case: Save Data

**MSS**

1. User performs an action that modifies the data (e.g., adding, editing, or deleting a contact).

2. CollabSync automatically saves the updated data to a local file (e.g., `data/addressbook.json`).

   **Use case ends.**

**Extensions**

* 2a. Saving data fails (e.g., permission issues or disk is full).
    * 2a1. CollabSync shows an error message indicating that the save failed.

      **Use case ends.**

* 2b. Data file is corrupted or unreadable.
    * 2b1. CollabSync shows an error message about the corrupted file.

      **Use case ends.**


---

#### Use case: Clear All Contacts

**MSS**

1. User enters the `clear` command.

2. CollabSync clears all entries from the address book.

   **Use case ends.**

**Extensions**

* **2a. User clears an empty contact list**:
    * **2a1.** CollabSync still clears the contact.

      **Use case ends.**

---

### Non-Functional Requirements

1.  Should work on any _mainstream OS_ as long as it has Java `17` or above installed.
2.  Should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage.
3.  A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.
4.  The product should be for a single user.
5.  Response to any use action should become visible within 5 seconds.
6.  The system should be useable by non-technical users.
7.  Command error messages should be clear and informative enough that even non-technical users can understand the issues.
8.  The data should be stored locally and should be in a human editable text file.
9.  The software should not depend on your own remote server.

### Glossary

* **Mainstream OS**: Windows, Linux, Unix, MacOS
* **CLI (Command-Line Interface)**: A text-based interface for interacting with the application through typed commands.
* **GUI (Graphical User Interface)**: The visual interface of the application, including windows, buttons, and forms.
* **Contact**: An entry in the address book containing details such as name, phone number, email, and address.
* **Students**: NUS Students

--------------------------------------------------------------------------------------------------------------------

## **Appendix: Instructions for manual testing**

Given below are instructions to test the app manually.

<box type="info" seamless>

**Note:** These instructions only provide a starting point for testers to work on; testers are expected to do more *exploratory* testing.

</box>

### Launch and shutdown

1. Initial launch

   1. Download the jar file and copy into an empty folder

   1. Double-click the jar file <br>
   Expected: Shows the GUI with a set of sample contacts (the window size may not be optimum).

1. Saving window preferences

   1. Resize the window to an optimum size

   1. Move the window to a different location

   1. Close the window

   1. Re-launch the app by double-clicking the jar file <br>
   Expected: The most recent window size and location is retained.

### Displaying help window

1. Displaying help window

   1. Test case: `help` <br>
   Expected: A help window popped out. List of commands and their format in the help window.

   1. Test case: `help aaaaaaa` <br>
   Expected: A help window popped out. List of commands and their format in the help window.

### Adding a student

1. Adding a student

   1. Test case: `add n/Li Shi Rei p/98765432 e/shireiHG@u.nes.edu a/21 Lower Kent Ridge Road m/Prompt Engineering t/genius:trivial` <br>
   Expected: Student is successfully added to the list. All details are displayed correctly. The contact list updates to show the new student.

   1. Test case: `add n/Saitama p/23456789 e/atama@u.nos.edu a/21 Lower Kent Ridge Road m/Sport Science t/friends:trivial t/HDM1000:module` (different tags) <br>
   Expected: Student is successfully added to the list. All details are displayed correctly. The contact list updates to show the new student.

   1. Test case: `add n/Saitama p/23456789 e/atama@u.nos.edu a/21 Lower Kent Ridge Road m/Sport Science t/friends:trivial t/HDM1000:module` (same as previous test case) <br>
   Expected: Student not added to the list. UI displays "This person already exists in the address book".

   1. Test case: `add John Doe` <br>
   Expected: Student not added to the list. Error details shown in the status message.

   1. Test case: `add n/ t/ p/` <br>
   Expected: Student not added to the list. Error details shown in the status message.

### Listing all students

1. Listing all students

   1. Test case: `list` <br>
   Expected: All students are display correctly.

   1. Test case: `list abcdefg` <br>
   Expected: All students are display correctly.

### Hiding and Unhiding information

1. Hiding information

   1. Test case: `hide` <br>
   Expected: All students' details is hidden, with only their names and tags shown.

   1. Test case: `hide` (same as previous test case) <br>
   Expected: All students' details remain hidden, with only their names and tags shown.

1. Unhiding information

   1. Test case: `unhide` <br>
   Expected: All students' hidden details are displayed.

   1. Test case: `unhide` (same as previous test case) <br>
   Expected: All students' details remain displayed.

### Sorting students

1. Sorting students in ascending order (A → Z)

   1. Test case: `sort asc` <br>
   Expected: Students are sorted by their name in ascending order. Ties in names are broken by phone numbers.

1. Sorting students in descending order (Z → A)

   1. Test case: `sort desc` <br>
   Expected: Students are sorted by their name in descending order. Ties in names are broken by phone numbers.

1. Sorting students in other order

   1. Test case: `sort xyz` <br>
   Expected: The student list remains the same. Error details shown in the status message.

### Editing a Student

1. Editing a student while all students are being shown

    1. **Prerequisites:**
        - List all students using the `list` command.
        - Ensure there are multiple students in the list.

    2. Test case: `edit 1 n/John Doe p/91234567 e/johndoe@example.com a/123 Main Street m/Computer Science t/friend` <br>
       Expected:
        - The student at index 1 is updated with the following details:
            - **Name:** John Doe
            - **Phone:** 91234567
            - **Email:** johndoe@example.com
            - **Address:** 123 Main Street
            - **Major:** Computer Science
            - **Tag:** friend
        - A success message is shown, and the UI reflects the updated information.

    3. Test case: `edit 2 p/98765432 a/456 New Road` <br>
       Expected:
        - The student at index 2 is updated with the new phone number and address only.
        - All other fields (name, email, major, tags) remain unchanged.
        - A confirmation message is displayed.

    4. Test case: `edit 1 n/ p/` <br>
       Expected:
        - The command fails because required fields (e.g., name) are empty or missing.
        - An error message is displayed in the status message.

    5. Test case: `edit 100 n/Jane Doe` <br>
       Expected:
        - If there is no student at index 100, the command fails.
        - An error message is displayed in the status message.
    6. Test case: `edit 1 e/invalidEmailFormat p/abcde` <br>
       Expected:
        - The command fails due to invalid email and phone number formats.
        - An error message is displayed in the status message.

### Deleting a student

1. Deleting a student while all students are being shown
   1. **Prerequisites:**
      - List all students using the `list` command.
      - Ensure there are multiple students in the list.

   1. Test case: `delete 1` <br>
   Expected: First student entry is deleted from the list. Details of the deleted students shown in the status message.

   1. Test case: `delete t/friends:trivial` <br>
   Expected: Students with same tag and priority are deleted. Details of the deleted students shown in the status message.

   1. Test case: `delete 0`<br>
   Expected: No student is deleted. Error details shown in the status message. Status bar remains the same.

   1. Other incorrect delete commands to try: `delete`, `delete x`, `...` (where x is larger than the list size) <br>
   Expected: Similar to previous.

### Saving data

1. Dealing with missing data files

   1. Close the app

   1. Delete `addressbook.json` in the `data` folder

   1. Re-launch the app <br>
   Expected: Shows the GUI with a set of sample contacts.

1. Dealing with corrupted data files

   1. Close the app

   1. Modify addressbook.json in the data folder by inserting random data at either the start or end of the file

   1. Re-launch the app <br>
   Expected: A pop-up appears showing a warning message. The corrupted `addressbook.json` is backed up to `addressbook_old.json`. The app will continue with an empty list after pressing the 'OK' button.

