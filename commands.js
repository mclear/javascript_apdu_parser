((commands) => {
    if (typeof exports !== 'undefined') {
        module.exports = commands;
    } else {
        window.parseAPDU = window.parseAPDU || {};
        window.parseAPDU.commands = commands;
    }
})([
    {
        "code": "44",
        "name": "ACTIVATE FILE",
        "description": "Changes the state of a file to OPERATIONAL (ACTIVATED)."
    },
    {
        "code": "8",
        "name": "ACTIVATE RECORD",
        "description": "No Description Available"
    },
    {
        "code": "E2",
        "name": "APPEND RECORD",
        "description": "Insert a new record in a file with a linear fixed structure."
    },
    {
        "code": "1E",
        "name": "APPLICATION BLOCK",
        "description": "Reversibly block an application. "
    },
    {
        "code": "40",
        "name": "APPLICATION MANAGEMENT REQUEST",
        "description": "No Description Available"
    },
    {
        "code": "41",
        "name": "APPLICATION MANAGEMENT REQUEST",
        "description": "No Description Available"
    },
    {
        "code": "18",
        "name": "APPLICATION UNBLOCK",
        "description": "Unblock an application. "
    },
    {
        "code": "84",
        "name": "ASK RANDOM",
        "description": "Request a random number from the smart card."
    },
    {
        "code": "24",
        "name": "CHANGE CHV",
        "description": "Change the PIN."
    },
    {
        "code": "24",
        "name": "CHANGE REFERENCE DATA",
        "description": "Change the data used for user identification (e.g., a PIN)."
    },
    {
        "code": "25",
        "name": "CHANGE REFERENCE DATA",
        "description": "Change the data used for user identification (e.g., a PIN)."
    },
    {
        "code": "A6",
        "name": "CHECK RESET AND APPLET SELECTION",
        "description": "No Description Available"
    },
    {
        "code": "AC",
        "name": "CLOSE APPLICATION",
        "description": "Reset all attained access condition levels."
    },
    {
        "code": "33",
        "name": "COMPARE",
        "description": "No Description Available"
    },
    {
        "code": "56",
        "name": "CONVERT IEP CURRENCY",
        "description": "Convert currency."
    },
    {
        "code": "E0",
        "name": "CREATE FILE",
        "description": "Creates an EF under the root or the currently selected DF or creates a DF under the root."
    },
    {
        "code": "E2",
        "name": "CREATE RECORD",
        "description": "Create a new record in a record-oriented file."
    },
    {
        "code": "52",
        "name": "CREDIT IEP",
        "description": "Load the purse (IEP)."
    },
    {
        "code": "72",
        "name": "CREDIT PSAM",
        "description": "Pay from IEP to the PSAM."
    },
    {
        "code": "4",
        "name": "DECommand",
        "description": "Changes the state of a file to OPERATIONAL (DEACTIVATED)."
    },
    {
        "code": "6",
        "name": "DEACTIVATE RECORD",
        "description": "No Description Available"
    },
    {
        "code": "54",
        "name": "DEBIT IEP",
        "description": "Pay from the purse"
    },
    {
        "code": "34",
        "name": "DECREASE STAMPED",
        "description": "Reduce the value of a counter in a file that is protected using a cryptographic checksum."
    },
    {
        "code": "30",
        "name": "DECREASE",
        "description": "Reduce the value of a counter in a file."
    },
    {
        "code": "EE",
        "name": "DELETE DATA",
        "description": "No Description Available"
    },
    {
        "code": "E4",
        "name": "DELETE FILE",
        "description": "Deletes the current DF or EF."
    },
    {
        "code": "E4",
        "name": "DELETE",
        "description": "Delete a uniquely identifiable object (such as a load file, application or key)."
    },
    {
        "code": "26",
        "name": "DISABLE VERIFICATION REQUIREMENT",
        "description": "Disable user identification (e.g., PIN queries)."
    },
    {
        "code": "28",
        "name": "ENABLE CHV",
        "description": "Enable PIN queries."
    },
    {
        "code": "28",
        "name": "ENABLE VERIFICATION REQUIREMENT",
        "description": "Enable user identification (e.g., PIN queries)."
    },
    {
        "code": "x",
        "name": "END PERSONALIZATION",
        "description": "No Description Available"
    },
    {
        "code": "C2",
        "name": "ENVELOPE",
        "description": "Embed a command in a smart card command."
    },
    {
        "code": "C3",
        "name": "ENVELOPE",
        "description": "No Description Available"
    },
    {
        "code": "0E",
        "name": "ERASE BINARY",
        "description": "Erases part of a binary file."
    },
    {
        "code": "0F",
        "name": "ERASE BINARY",
        "description": "Erases part of a binary file."
    },
    {
        "code": "0C",
        "name": "ERASE RECORD",
        "description": "No Description Available"
    },
    {
        "code": "AE",
        "name": "EXECUTE",
        "description": "Execute a file."
    },
    {
        "code": "D4",
        "name": "EXTEND",
        "description": "Extend a file."
    },
    {
        "code": "82",
        "name": "EXTERNAL AUTHENTICATE",
        "description": "Authenticates the external terminal to the card. Sets the secure channel mode."
    },
    {
        "code": "86",
        "name": "GENERAL AUTHENTICATE",
        "description": "The General Authenticate command is used to generate secure messaging session keys between both entities (IFD and ICC) as part of elliptic curve asymmetric key mutual authentication."
    },
    {
        "code": "87",
        "name": "GENERAL AUTHENTICATE",
        "description": "The General Authenticate command is used to generate secure messaging session keys between both entities (IFD and ICC) as part of elliptic curve asymmetric key mutual authentication."
    },
    {
        "code": "46",
        "name": "GENERATE ASYMMETRIC KEY PAIR",
        "description": "No Description Available"
    },
    {
        "code": "47",
        "name": "GENERATE ASYMMETRIC KEY PAIR",
        "description": "No Description Available"
    },
    {
        "code": "AE",
        "name": "GENERATE AUTHORISATION CRYPTOGRAM",
        "description": "Generate a signature for a payment transaction."
    },
    {
        "code": "46",
        "name": "GENERATE PUBLIC KEY PAIR",
        "description": "Generate a key pair for an asymmetric cryptographic algorithm."
    },
    {
        "code": "34",
        "name": "GET ATTRIBUTE",
        "description": "No Description Available"
    },
    {
        "code": "35",
        "name": "GET ATTRIBUTE",
        "description": "No Description Available"
    },
    {
        "code": "84",
        "name": "GET CHALLENGE",
        "description": "Request a random number from the smart card."
    },
    {
        "code": "CB",
        "name": "GET DATA (CA)",
        "description": "No Description Available"
    },
    {
        "code": "CA",
        "name": "GET DATA",
        "description": "Read TLV-coded data objects."
    },
    {
        "code": "CB",
        "name": "GET DATA",
        "description": "No Description Available"
    },
    {
        "code": "CC",
        "name": "GET NEXT DATA",
        "description": "No Description Available"
    },
    {
        "code": "CD",
        "name": "GET NEXT DATA",
        "description": "No Description Available"
    },
    {
        "code": "5A",
        "name": "GET PREVIOUS IEP SIGNATURE",
        "description": "Repeat the computation and output of the last signature received IEP."
    },
    {
        "code": "86",
        "name": "GET PREVIOUS PSAM SIGNATURE",
        "description": "Repeat the computation and output of the last signature received from the PSAM."
    },
    {
        "code": "C0",
        "name": "GET RESPONSE",
        "description": "Retrieves the response from a previous command."
    },
    {
        "code": "F2",
        "name": "GET STATUS",
        "description": "Read the life-cycle state information of the card manager, application and load file."
    },
    {
        "code": "86",
        "name": "GIVE RANDOM",
        "description": "Send a random number to the smart card."
    },
    {
        "code": "36",
        "name": "INCREASE STAMPED",
        "description": "Increase the value of a counter in a file that is protected using a cryptographic checksum."
    },
    {
        "code": "32",
        "name": "INCREASE",
        "description": "Increase the value of a counter in a file."
    },
    {
        "code": "50",
        "name": "INITIALIZE IEP",
        "description": "Initialize IEP for a subsequent purse command."
    },
    {
        "code": "7C",
        "name": "INITIALIZE PSAM for Offline Collection",
        "description": "Initialize PSAM for offline booking of the amount."
    },
    {
        "code": "76",
        "name": "INITIALIZE PSAM for Online Collection",
        "description": "Initialize PSAM for online booking of the amount."
    },
    {
        "code": "70",
        "name": "INITIALIZE PSAM",
        "description": "Initialize PSAM for a subsequent purse command."
    },
    {
        "code": "X ",
        "name": "INITILIZE UPDATE",
        "description": "First step to open a secure channel. The personalization device authenticates the card."
    },
    {
        "code": "88",
        "name": "INTERNAL AUTHENTICATE",
        "description": "No Description Available"
    },
    {
        "code": "4",
        "name": "INVALIDATE",
        "description": "Reversibly block a file."
    },
    {
        "code": "82",
        "name": "ISSUER AUTHENTICATE",
        "description": "Verify a signature of the card issuer."
    },
    {
        "code": "EA",
        "name": "LOAD APPLICATION",
        "description": "No Description Available"
    },
    {
        "code": "EB",
        "name": "LOAD APPLICATION",
        "description": "Load an application by transferring the load file."
    },
    {
        "code": "E8",
        "name": "LOAD",
        "description": "No Description Available"
    },
    {
        "code": "70",
        "name": "MANAGE CHANNEL",
        "description": "No Description Available"
    },
    {
        "code": "CF",
        "name": "MANAGE DATA",
        "description": "No Description Available"
    },
    {
        "code": "x",
        "name": "MANAGE PROTOCOL",
        "description": "Allows or disallows use of applet commands in contactless mode."
    },
    {
        "code": "22",
        "name": "MANAGE SECURITY ENVIRONMENT",
        "description": "Sets or replaces one component of the current SE."
    },
    {
        "code": "82",
        "name": "MUTUAL AUTHENTICATE",
        "description": "Mutually authenticate the smart card and the terminal."
    },
    {
        "code": "2E",
        "name": "PERFORM BIOMETRIC OPERATION",
        "description": "No Description Available"
    },
    {
        "code": "2F",
        "name": "PERFORM BIOMETRIC OPERATION",
        "description": "No Description Available"
    },
    {
        "code": "10",
        "name": "PERFORM SCQL OPERATION",
        "description": "Execute an SCQL instruction."
    },
    {
        "code": "2A",
        "name": "PERFORM SECURITY OPERATION",
        "description": "Execute a cryptographic algorithm in the smart card."
    },
    {
        "code": "2B",
        "name": "PERFORM SECURITY OPERATION",
        "description": "No Description Available"
    },
    {
        "code": "12",
        "name": "PERFORM TRANSACTION OPERATION",
        "description": "Execute an SCQL transaction instruction."
    },
    {
        "code": "14",
        "name": "PERFORM USER OPERATION",
        "description": "Manage users in the context of SCQL."
    },
    {
        "code": "7A",
        "name": "PSAM COLLECT",
        "description": "End PSAM online booking of an amount."
    },
    {
        "code": "78",
        "name": "PSAM COLLECT",
        "description": "Execute PSAM online booking of an amount."
    },
    {
        "code": "74",
        "name": "PSAM COMPLETE",
        "description": "End paying the IEP against the PSAM."
    },
    {
        "code": "7E",
        "name": "PSAM VERIFY COLLECTION",
        "description": "End PSAM offline booking of an amount."
    },
    {
        "code": "DA",
        "name": "PUT DATA",
        "description": "Write TLV-coded data objects."
    },
    {
        "code": "DB",
        "name": "PUT DATA",
        "description": "No Description Available"
    },
    {
        "code": "D8",
        "name": "PUT KEY",
        "description": "Write one or more new keys or replace existing keys."
    },
    {
        "code": "D8",
        "name": "PUT NEXT DATA",
        "description": "No Description Available"
    },
    {
        "code": "D9",
        "name": "PUT NEXT DATA",
        "description": "No Description Available"
    },
    {
        "code": "44",
        "name": "REACTIVATE FILE",
        "description": "Unblock a file."
    },
    {
        "code": "B4",
        "name": "READ BINARY STAMPED",
        "description": "Read data from a file with a transparent structure that is secured with a cryptographic checksum."
    },
    {
        "code": "B0",
        "name": "READ BINARY",
        "description": "Reads part of a binary file."
    },
    {
        "code": "B1",
        "name": "READ BINARY",
        "description": "Reads part of a binary file."
    },
    {
        "code": "B6",
        "name": "READ RECORD STAMPED",
        "description": "Read data from a file with a record-oriented structure that is secured with a cryptographic checksum."
    },
    {
        "code": "B2",
        "name": "READ RECORD(S)",
        "description": "Read data from a file with a record-oriented structure."
    },
    {
        "code": "B2",
        "name": "READ RECORD",
        "description": "Read data from a file with a record-oriented structure."
    },
    {
        "code": "B3",
        "name": "READ RECORD",
        "description": "No Description Available"
    },
    {
        "code": "44",
        "name": "REHABILITATE",
        "description": "Unblock a file."
    },
    {
        "code": "EC",
        "name": "REMOVE APPLICATION",
        "description": "No Description Available"
    },
    {
        "code": "ED",
        "name": "REMOVE APPLICATION",
        "description": "No Description Available"
    },
    {
        "code": "2C",
        "name": "RESET RETRY COUNTER",
        "description": "Reset an error counter."
    },
    {
        "code": "2D",
        "name": "RESET RETRY COUNTER",
        "description": "No Description Available"
    },
    {
        "code": "88",
        "name": "RUN GSM ALGORITHM",
        "description": "Execute a GSM-specific cryptographic algorithm."
    },
    {
        "code": "A0",
        "name": "SEARCH BINARY",
        "description": "Search for a text string in a file with a transparent structure."
    },
    {
        "code": "A1",
        "name": "SEARCH BINARY",
        "description": "No Description Available"
    },
    {
        "code": "A2",
        "name": "SEARCH RECORD",
        "description": "Search for a text string in a file with a record-oriented structure."
    },
    {
        "code": "A2",
        "name": "SEEK",
        "description": "Search for a text string in a file with a record-oriented structure."
    },
    {
        "code": "A4",
        "name": "SELECT (FILE)",
        "description": "Selects a DF or an EF by its file ID, path or name (in the case of DFs)."
    },
    {
        "code": "A5",
        "name": "SELECT DATA",
        "description": "No Description Available"
    },
    {
        "code": "A4",
        "name": "SELECT",
        "description": "Select a file."
    },
    {
        "code": "F0",
        "name": "SET STATUS",
        "description": "Write life-cycle state data for the card manager, application and load file."
    },
    {
        "code": "FA",
        "name": "SLEEP",
        "description": "Obsolete command for setting the smart card in a power-saving state."
    },
    {
        "code": "F2",
        "name": "STATUS",
        "description": "Read various data from the currently selected file."
    },
    {
        "code": "FE",
        "name": "TERMINATE CARD USAGE",
        "description": "Irreversibly block a smart card."
    },
    {
        "code": "EF",
        "name": "TERMINATE CARD USAGE",
        "description": "Irreversibly block a smart card."
    },
    {
        "code": "E6",
        "name": "TERMINATE DF",
        "description": "Irreversibly block an DF."
    },
    {
        "code": "E8",
        "name": "TERMINATE EF",
        "description": "Irreversibly block an EF."
    },
    {
        "code": "2C",
        "name": "UNBLOCK CHV",
        "description": "Reset a PIN retry counter that has reached its maximum value."
    },
    {
        "code": "D6",
        "name": "UPDATE BINARY",
        "description": "Updates part of a binary file."
    },
    {
        "code": "D7",
        "name": "UPDATE BINARY",
        "description": "Updates part of a binary file."
    },
    {
        "code": "DE",
        "name": "UPDATE DATA",
        "description": "No Description Available"
    },
    {
        "code": "DF",
        "name": "UPDATE DATA",
        "description": "No Description Available"
    },
    {
        "code": "58",
        "name": "UPDATE IEP PARAMETER",
        "description": "Change the general parameters of a purse."
    },
    {
        "code": "84",
        "name": "UPDATE PSAM Parameter (offline)",
        "description": "Modify the parameters in the PSAM (offline)."
    },
    {
        "code": "82",
        "name": "UPDATE PSAM Parameter (online)",
        "description": "Modify the parameters in the PSAM (online)."
    },
    {
        "code": "DC",
        "name": "UPDATE RECORD",
        "description": "Write to a file with a linear fixed, linear variable or cyclic structure."
    },
    {
        "code": "DD",
        "name": "UPDATE RECORD",
        "description": "Write to a file with a linear fixed, linear variable or cyclic structure."
    },
    {
        "code": "20",
        "name": "VERIFY CHV",
        "description": "Verify the PIN."
    },
    {
        "code": "20",
        "name": "VERIFY",
        "description": "Verify the transferred data (such as a PIN)."
    },
    {
        "code": "21",
        "name": "VERIFY",
        "description": "No Description Available"
    },
    {
        "code": "D0",
        "name": "WRITE BINARY",
        "description": "Write to a file with a transparent structure using a logical AND/OR process."
    },
    {
        "code": "D1",
        "name": "WRITE BINARY",
        "description": "Write to a file with a transparent structure using a logical AND/OR process."
    },
    {
        "code": "D2",
        "name": "WRITE RECORD",
        "description": "Write to a file with a record-oriented structure using a logical AND/OR process."
    },
    {
        "code":"26",
        "name":"DISABLE CHV",
        "description": "Disable PIN queries."
    }
]);