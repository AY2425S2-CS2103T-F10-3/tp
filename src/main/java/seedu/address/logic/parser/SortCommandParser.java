package seedu.address.logic.parser;

import seedu.address.logic.commands.SortCommand;
import seedu.address.logic.parser.exceptions.ParseException;

/**
 * Parses input arguments and creates a new SortCommand object.
 */
public class SortCommandParser implements Parser<SortCommand> {

    @Override
    public SortCommand parse(String args) throws ParseException {
        String trimmedArgs = args.trim().toLowerCase(); // Normalize input

        switch (trimmedArgs) {
        case "asc":
            return new SortCommand(true); // Ascending order
        case "desc":
            return new SortCommand(false); // Descending order
        default:
            throw new ParseException(SortCommand.MESSAGE_INVALID_ORDER);
        }
    }
}
