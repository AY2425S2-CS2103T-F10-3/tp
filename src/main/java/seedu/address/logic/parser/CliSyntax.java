package seedu.address.logic.parser;

import java.util.Map;

/**
 * Contains Command Line Interface (CLI) syntax definitions common to multiple commands
 */
public class CliSyntax {

    /* Prefix definitions */
    public static final Prefix PREFIX_NAME = new Prefix("n/");
    public static final Prefix PREFIX_PHONE = new Prefix("p/");
    public static final Prefix PREFIX_EMAIL = new Prefix("e/");
    public static final Prefix PREFIX_ADDRESS = new Prefix("a/");
    public static final Prefix PREFIX_TAG = new Prefix("t/");
    public static final Prefix PREFIX_MAJOR = new Prefix("m/");

    public static final Map<Prefix, String> prefixDescriptions = Map.of(
            PREFIX_NAME, "Name",
            PREFIX_PHONE, "Phone",
            PREFIX_EMAIL, "Email",
            PREFIX_ADDRESS, "Address",
            PREFIX_MAJOR, "Major"
    );
}
