
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("CollabSync")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2425S2-CS2103T-F10-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('hr'),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}}),_v(" "),_m(9),_v(" "),_c('p',[_v("Given below is a quick overview of main components and how they interact with each other.")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("The bulk of the app's work is done by the following four components:")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}}),_v(" "),_c('p',[_v("Each of the four main components (also shown in the diagram above),")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}}),_v(" "),_c('p',[_v("The sections below give more details of each component.")]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}}),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}}),_v(" "),_m(28),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram.png","alt":"Interactions Inside the Logic Component for the `delete 1` Command"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.")])]),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}}),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png","width":"450"}}),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" An alternative (arguably, a more OOP) model is given below. It has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(", which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" references. This allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" to only require one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" object per unique tag, instead of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" needing their own "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" objects."),_c('br')]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"450"}})],1),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png","width":"550"}}),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_c('hr'),_v(" "),_m(46),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BackupOnCorruptSequenceDiagram.png","alt":"Backup On Corrupt Sequence Diagram"}}),_v(" "),_c('p',[_v("Here's the workflow:")]),_v(" "),_m(50),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The prompt and the backup process are invoked concurrently.")])]),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/HideCommand.png","alt":"Hide Command Sequence Diagram"}}),_v(" "),_c('p',[_v("Here's the workflow:")]),_v(" "),_m(54),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UnhideCommand")]),_v(" also follows something similar, but instead of calling "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hideDetails()")]),_v(", the method invoked is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("showDetails()")])])]),_v(" "),_c('hr'),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_c('hr'),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_m(64),_m(65),_v(" "),_m(66),_v(" "),_c('hr'),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('hr'),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_c('hr'),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_c('hr'),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_c('hr'),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_c('hr'),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_c('hr'),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_c('hr'),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_m(106),_v(" "),_c('hr'),_v(" "),_m(107),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_c('hr'),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_m(115),_v(" "),_m(116),_v(" "),_c('hr'),_v(" "),_m(117),_v(" "),_m(118),_v(" "),_m(119),_v(" "),_m(120),_v(" "),_m(121),_v(" "),_c('hr'),_v(" "),_m(122),_v(" "),_m(123),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_c('hr'),_v(" "),_m(126),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on; testers are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])]),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_m(133),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_m(143),_v(" "),_m(144)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(145)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"ab-3-developer-guide"}},[_v("AB-3 Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ab-3-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#acknowledgements"}},[_v("Acknowledgements")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#setting-up-getting-started"}},[_v("Setting up, getting started")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#design"}},[_v("Design")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#architecture"}},[_v("Architecture")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_v("UI component")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_v("Logic component")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_v("Model component")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_v("Storage component")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#setup-component"}},[_v("Setup component")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#common-classes"}},[_v("Common classes")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#implementation"}},[_v("Implementation")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#backup-on-corrupt-feature"}},[_v("Backup on corrupt feature")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#hidecommand-workflow"}},[_v("HideCommand workflow")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#appendix-requirements"}},[_v("Appendix: Requirements")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#product-scope"}},[_v("Product scope")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#user-stories"}},[_v("User stories")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-cases"}},[_v("Use cases")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#use-case-add-a-person"}},[_v("Use case: Add a person")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-delete-a-person-based-on-index"}},[_v("Use case: Delete a person based on index")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-delete-persons-based-on-tags"}},[_v("Use case: Delete person(s) based on tags")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-edit-a-person"}},[_v("Use case: Edit a person")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-list-all-students"}},[_v("Use case: List all students")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-sort-contacts"}},[_v("Use case: Sort contacts")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-hide-information"}},[_v("Use case: Hide Information")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-unhide-information"}},[_v("Use case: Unhide Information")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-find-a-person"}},[_v("Use case: Find a person")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-save-data"}},[_v("Use case: Save Data")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#use-case-clear-all-contacts"}},[_v("Use case: Clear All Contacts")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#non-functional-requirements"}},[_v("Non-Functional Requirements")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#glossary"}},[_v("Glossary")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CollabSync is built upon "),_c('a',{attrs:{"href":"https://se-education.org/addressbook-level3/"}},[_v("AddressBook-Level3")]),_v(", a project developed by the "),_c('a',{attrs:{"href":"https://se-education.org/"}},[_v("SE-EDU initiative")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("We also acknowledge the use of the following third-party libraries: "),_c('a',{attrs:{"href":"https://openjfx.io/"}},[_v("JavaFX")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/junit-team/junit5"}},[_v("JUnit5")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_c('em',[_v("Setting up and getting started")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_c('strong',[_v("Architecture Diagram")])]),_v(" given above explains the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Main components of the architecture")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#setup-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Setup")])])]),_v(": Responsible for the initial configuration and launching of the AddressBook application")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How the architecture components interact with each other")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a person)."),_c('br'),_v("\nNote that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(") to achieve.")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"setup-component"}},[_v("Setup component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setup-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Setup")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("based on the original implementations of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main.java")]),_v(" , "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp.java")]),_v(" & "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AppParameters.java")]),_v(" in AB3.")]),_v(" "),_c('li',[_v("now these 3 classes are in a package called "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setup")]),_v(" for better coding standards.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"backup-on-corrupt-feature"}},[_v("Backup on corrupt feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backup-on-corrupt-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions between different components when corrupted data is detected and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("backupAndDeleteFile(filePath)")]),_v(" is called.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("During "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")]),_v("'s initialization, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")]),_v(" will set the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component to contain information about whether there is an initial error.")]),_v(" "),_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp.start()")]),_v(" is called, it will invoke "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI.start()")]),_v(" and pass the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component to it.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" will then check with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" whether an initial error exists.")]),_v(" "),_c('li',[_v("If there is an initial error, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" will display a prompt to the user and wait for user interaction.")]),_v(" "),_c('li',[_v("Simultaneously, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" will call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("backupAndDeleteFile()")]),_v(" method from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FileUtil")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("backupAndDeleteFile()")]),_v(" will gather and prepare all necessary information for the backup and delete.")]),_v(" "),_c('li',[_v("It will then call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("copy()")]),_v(" method from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Files")]),_v(" to complete the backup process.")]),_v(" "),_c('li',[_v("Finally, the corrupted data file will be deleted after the backup process is done.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"hidecommand-workflow"}},[_v("HideCommand workflow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hidecommand-workflow","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand")]),_v(" is part of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" layer in the application and handles the action of hiding the details of a contact. "),_c('br'),_v("\nThis operation is executed when the user triggers the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(" command in the system.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand")]),_v(" is invoked when the user types the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(". This is handled in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(Model model)")]),_v(" method of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand")]),_v(" class. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" object, which represents the application's data layer, is passed into the method.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand")]),_v(" requests the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" to retrieve the filtered list of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects via the method call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("model.getFilteredPersonList()")]),_v(". This call is made to fetch all the persons that the user has in the current view (filtered according to certain criteria).")]),_v(" "),_c('li',[_v("Once the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filteredPersonList")]),_v(" is retrieved, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand")]),_v(" iterates over each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object in the list and calls the method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("person.hideDetails()")]),_v(". This hides the details of each person in the list. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hideDetails()")]),_v(" method, which is part of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" class, modifies the internal state of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object, essentially \"hiding\" the contact's details from the user interface.")]),_v(" "),_c('li',[_v("After the details are hidden, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand")]),_v(" returns a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" indicating the success of the operation. The message "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"Contact details hidden.\"")]),_v(" is passed to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" constructor, along with additional flags that help the UI decide how to update (whether to show a success message or not).")]),_v(" "),_c('li',[_v("The UI layer will use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object to display feedback to the user. If successful, the system will notify the user that the contact's details have been hidden.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("is a National University of Singapore student")]),_v(" "),_c('li',[_v("need to manage project team contacts")]),_v(" "),_c('li',[_v("track relationships between classmates across multiple courses")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("can type fast")]),_v(" "),_c('li',[_v("prefers typing to mouse interactions")]),_v(" "),_c('li',[_v("is reasonably comfortable using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(": manage contacts for NUS students faster than a typical mouse/GUI driven app")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Priorities: High (must have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")]),_v(", Medium (nice to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")]),_v(", Low (unlikely to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("add a new student")]),_v(" "),_c('td',[_v("store and retrieve essential information easily")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("delete a student")]),_v(" "),_c('td',[_v("remove outdated  or irrelevant entries")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("find a student by name")]),_v(" "),_c('td',[_v("quickly locate specific student")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("data save automatically")]),_v(" "),_c('td',[_v("so that I never lose my contacts even if the app crashes")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("find students by course")]),_v(" "),_c('td',[_v("quickly locate students with a specific course")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("clear all contacts at once")]),_v(" "),_c('td',[_v("reset the app for a new semester")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("delete students by course")]),_v(" "),_c('td',[_v("remove related entries after a course ended")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("edit student details")]),_v(" "),_c('td',[_v("keep their details up-to-date")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("sort student details")]),_v(" "),_c('td',[_v("keep their details in an orderly manner")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("list all students")]),_v(" "),_c('td',[_v("see all my saved contacts at once")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("view a help menu")]),_v(" "),_c('td',[_v("quickly learn how to use the application")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("remember my last search")]),_v(" "),_c('td',[_v("don't need to type it again")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("privacy-conscious user")]),_v(" "),_c('td',[_v("hide students' information")]),_v(" "),_c('td',[_v("hide sensitive details when others view my screen")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("privacy-conscious user")]),_v(" "),_c('td',[_v("unhide students' information")]),_v(" "),_c('td',[_v("access full contact details when needed")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("user with many persons in the address book")]),_v(" "),_c('td',[_v("search for contacts fuzzily")]),_v(" "),_c('td',[_v("find a student even if I do not correctly know their names")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("user with many persons in the address book")]),_v(" "),_c('td',[_v("the application to load quickly")]),_v(" "),_c('td',[_v("access my information without delay")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CollabSync")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-add-a-person"}},[_v("Use case: Add a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to add a new person by specifying "),_c('strong',[_v("Name, Phone, Email, Address, Major and Tags(if any)")]),_v("\n(e.g., using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE e/EMAIL a/ADDRESS m/MAJOR t/[TAGS]")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync validates the details (e.g., checks phone format, email format, etc.).")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync saves the new person to the address book.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. User provides incomplete or invalid details. (e.g., phone number format is invalid)")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CollabSync shows an error message.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])]),_v(" "),_c('li',[_c('p',[_v("2b. User tries to add a contact that already exists (e.g., same "),_c('strong',[_v("Name and Phone")]),_v(").")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2b1. CollabSync rejects the duplicate entry and shows an error message.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-delete-a-person-based-on-index"}},[_v("Use case: Delete a person based on index"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-delete-a-person-based-on-index","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to list persons (e.g., using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command).")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync shows a list of persons with their "),_c('strong',[_v("Name, Phone, Email, Address, Major and Tags(if any)")]),_v(" in an indexed format.")])]),_v(" "),_c('li',[_c('p',[_v("User requests to delete a specific person in the list by index (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync prompts a popup box to request user to confirm their deletion.")])]),_v(" "),_c('li',[_c('p',[_v("User enters the confirm button.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync deletes the person with the given index.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. The list is empty.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CollabSync informs the user that there are no contacts to delete.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])]),_v(" "),_c('li',[_c('p',[_v("3a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3a1. CollabSync shows an error message.")]),_v(" "),_c('p',[_c('strong',[_v("Use case")]),_v(" resumes at step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("4a. Cancel button or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("x")]),_v(" was pressed.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("4a1. Contact is not deleted. Deletion canceled.")]),_v(" "),_c('p',[_c('strong',[_v("Use case")]),_v(" resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-delete-person-s-based-on-tags"}},[_v("Use case: Delete person(s) based on tags"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-delete-person-s-based-on-tags","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to list persons (e.g., using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command).")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync shows a list of persons with their "),_c('strong',[_v("Name, Phone, Email, Address, Major and Tags(if any)")]),_v(" in an indexed format.")])]),_v(" "),_c('li',[_c('p',[_v("User requests to delete a specific person in the list by the tags (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete t/HSA1000")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync prompts a popup box to request user to confirm their deletion.")])]),_v(" "),_c('li',[_c('p',[_v("User enters the confirm button.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync deletes the person with the given index.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. The list is empty.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CollabSync informs the user that there are no contacts to delete.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])]),_v(" "),_c('li',[_c('p',[_v("3a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3a1. CollabSync shows an error message.")]),_v(" "),_c('p',[_c('strong',[_v("Use case")]),_v(" resumes at step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("4a. Cancel button or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("x")]),_v(" was pressed.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("4a1. Contact is not deleted. Deletion canceled.")]),_v(" "),_c('p',[_c('strong',[_v("Use case")]),_v(" resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-edit-a-person"}},[_v("Use case: Edit a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-edit-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to list persons (e.g., using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command).")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync shows a list of persons.")])]),_v(" "),_c('li',[_c('p',[_v("User requests to edit a specific person.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync updates the details of the person.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. The list is empty.\n"),_c('strong',[_v("Use case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("3a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_v("3a1. CollabSync shows an error message.\nUse case resumes at step 2.")])])]),_v(" "),_c('li',[_c('p',[_v("3b. The new tags entered by user are of invalid format.")]),_v(" "),_c('ul',[_c('li',[_v("3b1. CollabSync shows an error message.\nUse case resumes at step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-list-all-students"}},[_v("Use case: List all students"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-list-all-students","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User enters the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync displays a list of all students with their "),_c('strong',[_v("Name, Phone, Email, Address, Major, and Tags (if any)")]),_v(" in an indexed format.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("2a. No students in the address book")]),_v(":\n"),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("2a1.")]),_v(" CollabSync informs the user that the list is empty.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-sort-contacts"}},[_v("Use case: Sort contacts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-sort-contacts","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User enters a "),_c('strong',[_v("sort command")]),_v(" with a specified order (e.g., using 'sort asc' or 'sort desc').")])]),_v(" "),_c('li',[_c('p',[_v("Sorts the contact list in the specified order based on "),_c('strong',[_v("Name")]),_v(", followed by "),_c('strong',[_v("Phone Number")]),_v(" if names are identical.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync displays the sorted contact list.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. No contacts found in the list.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CollabSync informs the user that there are no contacts to sort.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])]),_v(" "),_c('li',[_c('p',[_v("2b. User enters an invalid sorting order.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2b1. CollabSync informs the user of the invalid input and provides the correct format.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-hide-information"}},[_v("Use case: Hide Information"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-hide-information","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User enters the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(" command.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync automatically hides the contact details of all persons currently shown in the application, except for "),_c('strong',[_v("Name and Tags")]),_v(" (if they were displayed previously).")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("2a. Information is already hidden")]),_v(":\n"),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("2a1.")]),_v(" The information of the contacts in the current window currently will remain hidden.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-unhide-information"}},[_v("Use case: Unhide Information"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-unhide-information","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User enters the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unhide")]),_v(" command.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync automatically reveals all the hidden information of the persons currently in the application.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("1a. No information was hidden")]),_v(":\n"),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("1a1.")]),_v(" The information of the contacts in the current window will remain revealed.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-find-a-person"}},[_v("Use case: Find a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-find-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User enters a "),_c('strong',[_v("search term")]),_v(". (e.g., using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync searches for any "),_c('strong',[_v("matching persons")]),_v(" based on the search term in their\n"),_c('strong',[_v("Name, Phone, Email, Major")]),_v(" and "),_c('strong',[_v("Tags")]),_v(".")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. No matching persons found\n"),_c('ul',[_c('li',[_c('p',[_v("2a1. CollabSync informs the user that no results match the search.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-save-data"}},[_v("Use case: Save Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-save-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User performs an action that modifies the data (e.g., adding, editing, or deleting a contact).")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync automatically saves the updated data to a local file (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/addressbook.json")]),_v(").")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. Saving data fails (e.g., permission issues or disk is full).")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2a1. CollabSync shows an error message indicating that the save failed.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])]),_v(" "),_c('li',[_c('p',[_v("2b. Data file is corrupted or unreadable.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("2b1. CollabSync shows an error message about the corrupted file.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"use-case-clear-all-contacts"}},[_v("Use case: Clear All Contacts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-clear-all-contacts","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User enters the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command.")])]),_v(" "),_c('li',[_c('p',[_v("CollabSync clears all entries from the address book.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("2a. User clears an empty contact list")]),_v(":\n"),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("2a1.")]),_v(" CollabSync still clears the contact.")]),_v(" "),_c('p',[_c('strong',[_v("Use case ends.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("The product should be for a single user.")]),_v(" "),_c('li',[_v("Response to any use action should become visible within 5 seconds.")]),_v(" "),_c('li',[_v("The system should be useable by non-technical users.")]),_v(" "),_c('li',[_v("Command error messages should be clear and informative enough that even non-technical users can understand the issues.")]),_v(" "),_c('li',[_v("The data should be stored locally and should be in a human editable text file.")]),_v(" "),_c('li',[_v("The software should not depend on your own remote server.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, Unix, MacOS")]),_v(" "),_c('li',[_c('strong',[_v("CLI (Command-Line Interface)")]),_v(": A text-based interface for interacting with the application through typed commands.")]),_v(" "),_c('li',[_c('strong',[_v("GUI (Graphical User Interface)")]),_v(": The visual interface of the application, including windows, buttons, and forms.")]),_v(" "),_c('li',[_c('strong',[_v("Contact")]),_v(": An entry in the address book containing details such as name, phone number, email, and address.")]),_v(" "),_c('li',[_c('strong',[_v("Students")]),_v(": NUS Students")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the jar file and copy into an empty folder")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the jar file "),_c('br'),_v("\nExpected: Shows the GUI with a set of sample contacts (the window size may not be optimum).")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size")])]),_v(" "),_c('li',[_c('p',[_v("Move the window to a different location")])]),_v(" "),_c('li',[_c('p',[_v("Close the window")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app by double-clicking the jar file "),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"displaying-help-window"}},[_v("Displaying help window"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#displaying-help-window","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Displaying help window")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" "),_c('br'),_v("\nExpected: A help window popped out. List of commands and their format in the help window.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help aaaaaaa")]),_v(" "),_c('br'),_v("\nExpected: A help window popped out. List of commands and their format in the help window.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-student"}},[_v("Adding a student"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-student","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Adding a student")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Li Shi Rei p/98765432 e/shireiHG@u.nes.edu a/21 Lower Kent Ridge Road m/Prompt Engineering t/genius:trivial")]),_v(" "),_c('br'),_v("\nExpected: Student is successfully added to the list. All details are displayed correctly. The contact list updates to show the new student.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Saitama p/23456789 e/atama@u.nos.edu a/21 Lower Kent Ridge Road m/Sport Science t/friends:trivial t/HDM1000:module")]),_v(" (different tags) "),_c('br'),_v("\nExpected: Student is successfully added to the list. All details are displayed correctly. The contact list updates to show the new student.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Saitama p/23456789 e/atama@u.nos.edu a/21 Lower Kent Ridge Road m/Sport Science t/friends:trivial t/HDM1000:module")]),_v(" (same as previous test case) "),_c('br'),_v("\nExpected: Student not added to the list. UI displays \"This person already exists in the address book\".")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add John Doe")]),_v(" "),_c('br'),_v("\nExpected: Student not added to the list. Error details shown in the status message.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/ t/ p/")]),_v(" "),_c('br'),_v("\nExpected: Student not added to the list. Error details shown in the status message.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-students"}},[_v("Listing all students"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-students","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Listing all students")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" "),_c('br'),_v("\nExpected: All students are display correctly.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list abcdefg")]),_v(" "),_c('br'),_v("\nExpected: All students are display correctly.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"hiding-and-unhiding-information"}},[_v("Hiding and Unhiding information"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hiding-and-unhiding-information","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Hiding information")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(" "),_c('br'),_v("\nExpected: All students' details is hidden, with only their names and tags shown.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(" (same as previous test case) "),_c('br'),_v("\nExpected: All students' details remain hidden, with only their names and tags shown.")])])])]),_v(" "),_c('li',[_c('p',[_v("Unhiding information")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unhide")]),_v(" "),_c('br'),_v("\nExpected: All students' hidden details are displayed.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unhide")]),_v(" (same as previous test case) "),_c('br'),_v("\nExpected: All students' details remain displayed.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"sorting-students"}},[_v("Sorting students"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sorting-students","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Sorting students in ascending order (A → Z)")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sort asc")]),_v(" "),_c('br'),_v("\nExpected: Students are sorted by their name in ascending order. Ties in names are broken by phone numbers.")])])]),_v(" "),_c('li',[_c('p',[_v("Sorting students in descending order (Z → A)")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sort desc")]),_v(" "),_c('br'),_v("\nExpected: Students are sorted by their name in descending order. Ties in names are broken by phone numbers.")])])]),_v(" "),_c('li',[_c('p',[_v("Sorting students in other order")]),_v(" "),_c('ol',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sort xyz")]),_v(" "),_c('br'),_v("\nExpected: The student list remains the same. Error details shown in the status message.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-student"}},[_v("Editing a Student"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-student","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Editing a student while all students are being shown")]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Prerequisites:")])]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("Ensure there are multiple students in the list.")])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/John Doe p/91234567 e/johndoe@example.com a/123 Main Street m/Computer Science t/friend")]),_v(" "),_c('br'),_v("\nExpected:")]),_v(" "),_c('ul',[_c('li',[_v("The student at index 1 is updated with the following details:\n"),_c('ul',[_c('li',[_c('strong',[_v("Name:")]),_v(" John Doe")]),_v(" "),_c('li',[_c('strong',[_v("Phone:")]),_v(" 91234567")]),_v(" "),_c('li',[_c('strong',[_v("Email:")]),_v(" "),_c('a',{attrs:{"href":"mailto:johndoe@example.com"}},[_v("johndoe@example.com")])]),_v(" "),_c('li',[_c('strong',[_v("Address:")]),_v(" 123 Main Street")]),_v(" "),_c('li',[_c('strong',[_v("Major:")]),_v(" Computer Science")]),_v(" "),_c('li',[_c('strong',[_v("Tag:")]),_v(" friend")])])]),_v(" "),_c('li',[_v("A success message is shown, and the UI reflects the updated information.")])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 p/98765432 a/456 New Road")]),_v(" "),_c('br'),_v("\nExpected:")]),_v(" "),_c('ul',[_c('li',[_v("The student at index 2 is updated with the new phone number and address only.")]),_v(" "),_c('li',[_v("All other fields (name, email, major, tags) remain unchanged.")]),_v(" "),_c('li',[_v("A confirmation message is displayed.")])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/ p/")]),_v(" "),_c('br'),_v("\nExpected:")]),_v(" "),_c('ul',[_c('li',[_v("The command fails because required fields (e.g., name) are empty or missing.")]),_v(" "),_c('li',[_v("An error message is displayed in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 100 n/Jane Doe")]),_v(" "),_c('br'),_v("\nExpected:")]),_v(" "),_c('ul',[_c('li',[_v("If there is no student at index 100, the command fails.")]),_v(" "),_c('li',[_v("An error message is displayed in the status message.")])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 e/invalidEmailFormat p/abcde")]),_v(" "),_c('br'),_v("\nExpected:")]),_v(" "),_c('ul',[_c('li',[_v("The command fails due to invalid email and phone number formats.")]),_v(" "),_c('li',[_v("An error message is displayed in the status message.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-student"}},[_v("Deleting a student"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-student","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Deleting a student while all students are being shown\n"),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Prerequisites:")])]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("Ensure there are multiple students in the list.")])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(" "),_c('br'),_v("\nExpected: First student entry is deleted from the list. Details of the deleted students shown in the status message.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete t/friends:trivial")]),_v(" "),_c('br'),_v("\nExpected: Students with same tag and priority are deleted. Details of the deleted students shown in the status message.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 0")]),_c('br'),_v("\nExpected: No student is deleted. Error details shown in the status message. Status bar remains the same.")])]),_v(" "),_c('li',[_c('p',[_v("Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than the list size) "),_c('br'),_v("\nExpected: Similar to previous.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Dealing with missing data files")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Close the app")])]),_v(" "),_c('li',[_c('p',[_v("Delete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressbook.json")]),_v(" in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(" folder")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app "),_c('br'),_v("\nExpected: Shows the GUI with a set of sample contacts.")])])])]),_v(" "),_c('li',[_c('p',[_v("Dealing with corrupted data files")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Close the app")])]),_v(" "),_c('li',[_c('p',[_v("Modify addressbook.json in the data folder by inserting random data at either the start or end of the file")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app "),_c('br'),_v("\nExpected: A pop-up appears showing a warning message. The corrupted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressbook.json")]),_v(" is backed up to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressbook_old.json")]),_v(". The app will continue with an empty list after pressing the 'OK' button.")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v(", generated on Mon, 7 Apr 2025, 14:18:48 GMT+8]")])])])}
}];
  