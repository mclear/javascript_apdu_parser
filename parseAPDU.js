(() => {
    const
        commands = {
            "10": [
                {
                    "name": "PERFORM SCQL OPERATION",
                    "description": "Execute an SCQL instruction.",
                    "code": "10"
                }
            ],
            "12": [
                {
                    "name": "PERFORM TRANSACTION OPERATION",
                    "description": "Execute an SCQL transaction instruction.",
                    "code": "12"
                }
            ],
            "14": [
                {
                    "name": "PERFORM USER OPERATION",
                    "description": "Manage users in the context of SCQL.",
                    "code": "14"
                }
            ],
            "18": [
                {
                    "name": "APPLICATION UNBLOCK",
                    "description": "Unblock an application. ",
                    "code": "18"
                }
            ],
            "20": [
                {
                    "name": "VERIFY CHV",
                    "description": "Verify the PIN.",
                    "code": "20"
                },
                {
                    "name": "VERIFY",
                    "description": "Verify the transferred data (such as a PIN).",
                    "code": "20"
                }
            ],
            "21": [
                {
                    "name": "VERIFY",
                    "description": "x",
                    "code": "21"
                }
            ],
            "22": [
                {
                    "name": "MANAGE SECURITY ENVIRONMENT",
                    "description": "Sets or replaces one component of the current SE.",
                    "code": "22"
                }
            ],
            "24": [
                {
                    "name": "CHANGE CHV",
                    "description": "Change the PIN.",
                    "code": "24"
                },
                {
                    "name": "CHANGE REFERENCE DATA",
                    "description": "Change the data used for user identification (e.g., a PIN).",
                    "code": "24"
                }
            ],
            "25": [
                {
                    "name": "CHANGE REFERENCE DATA",
                    "description": "Change the data used for user identification (e.g., a PIN).",
                    "code": "25"
                }
            ],
            "26": [
                {
                    "name": "DISABLE VERIFICATION REQUIREMENT",
                    "description": "Disable user identification (e.g., PIN queries).",
                    "code": "26"
                }
            ],
            "28": [
                {
                    "name": "ENABLE CHV",
                    "description": "Enable PIN queries.",
                    "code": "28"
                },
                {
                    "name": "ENABLE VERIFICATION REQUIREMENT",
                    "description": "Enable user identification (e.g., PIN queries).",
                    "code": "28"
                }
            ],
            "30": [
                {
                    "name": "DECREASE",
                    "description": "Reduce the value of a counter in a file.",
                    "code": "30"
                }
            ],
            "32": [
                {
                    "name": "INCREASE",
                    "description": "Increase the value of a counter in a file.",
                    "code": "32"
                }
            ],
            "33": [
                {
                    "name": "COMPARE",
                    "description": "x",
                    "code": "33"
                }
            ],
            "34": [
                {
                    "name": "DECREASE STAMPED",
                    "description": "Reduce the value of a counter in a file that is protected using a cryptographic checksum.",
                    "code": "34"
                },
                {
                    "name": "GET ATTRIBUTE",
                    "description": "x",
                    "code": "34"
                }
            ],
            "35": [
                {
                    "name": "GET ATTRIBUTE",
                    "description": "x",
                    "code": "35"
                }
            ],
            "36": [
                {
                    "name": "INCREASE STAMPED",
                    "description": "Increase the value of a counter in a file that is protected using a cryptographic checksum.",
                    "code": "36"
                }
            ],
            "40": [
                {
                    "name": "APPLICATION MANAGEMENT REQUEST",
                    "description": "x",
                    "code": "40"
                }
            ],
            "41": [
                {
                    "name": "APPLICATION MANAGEMENT REQUEST",
                    "description": "x",
                    "code": "41"
                }
            ],
            "44": [
                {
                    "name": "ACTIVATE FILE",
                    "description": "Changes the state of a file to OPERATIONAL (ACTIVATED).",
                    "code": "44"
                },
                {
                    "name": "REACTIVATE FILE",
                    "description": "Unblock a file.",
                    "code": "44"
                },
                {
                    "name": "REHABILITATE",
                    "description": "Unblock a file.",
                    "code": "44"
                }
            ],
            "46": [
                {
                    "name": "GENERATE ASYMMETRIC KEY PAIR",
                    "description": "x",
                    "code": "46"
                },
                {
                    "name": "GENERATE PUBLIC KEY PAIR",
                    "description": "Generate a key pair for an asymmetric cryptographic algorithm.",
                    "code": "46"
                }
            ],
            "47": [
                {
                    "name": "GENERATE ASYMMETRIC KEY PAIR",
                    "description": "x",
                    "code": "47"
                }
            ],
            "50": [
                {
                    "name": "INITIALIZE IEP",
                    "description": "Initialize IEP for a subsequent purse command.",
                    "code": "50"
                }
            ],
            "52": [
                {
                    "name": "CREDIT IEP",
                    "description": "Load the purse (IEP).",
                    "code": "52"
                }
            ],
            "54": [
                {
                    "name": "DEBIT IEP",
                    "description": "Pay from the purse",
                    "code": "54"
                }
            ],
            "56": [
                {
                    "name": "CONVERT IEP CURRENCY",
                    "description": "Convert currency.",
                    "code": "56"
                }
            ],
            "58": [
                {
                    "name": "UPDATE IEP PARAMETER",
                    "description": "Change the general parameters of a purse.",
                    "code": "58"
                }
            ],
            "70": [
                {
                    "name": "INITIALIZE PSAM",
                    "description": "Initialize PSAM for a subsequent purse command.",
                    "code": "70"
                },
                {
                    "name": "MANAGE CHANNEL",
                    "description": "x",
                    "code": "70"
                }
            ],
            "72": [
                {
                    "name": "CREDIT PSAM",
                    "description": "Pay from IEP to the PSAM.",
                    "code": "72"
                }
            ],
            "74": [
                {
                    "name": "PSAM COMPLETE",
                    "description": "End paying the IEP against the PSAM.",
                    "code": "74"
                }
            ],
            "76": [
                {
                    "name": "INITIALIZE PSAM for Online Collection",
                    "description": "Initialize PSAM for online booking of the amount.",
                    "code": "76"
                }
            ],
            "78": [
                {
                    "name": "PSAM COLLECT",
                    "description": "Execute PSAM online booking of an amount.",
                    "code": "78"
                }
            ],
            "82": [
                {
                    "name": "EXTERNAL AUTHENTICATE",
                    "description": "Authenticates the external terminal to the card. Sets the secure channel mode.",
                    "code": "82"
                },
                {
                    "name": "ISSUER AUTHENTICATE",
                    "description": "Verify a signature of the card issuer.",
                    "code": "82"
                },
                {
                    "name": "MUTUAL AUTHENTICATE",
                    "description": "Mutually authenticate the smart card and the terminal.",
                    "code": "82"
                },
                {
                    "name": "UPDATE PSAM Parameter (online)",
                    "description": "Modify the parameters in the PSAM (online).",
                    "code": "82"
                }
            ],
            "84": [
                {
                    "name": "ASK RANDOM",
                    "description": "Request a random number from the smart card.",
                    "code": "84"
                },
                {
                    "name": "GET CHALLENGE",
                    "description": "Request a random number from the smart card.",
                    "code": "84"
                },
                {
                    "name": "UPDATE PSAM Parameter (offline)",
                    "description": "Modify the parameters in the PSAM (offline).",
                    "code": "84"
                }
            ],
            "86": [
                {
                    "name": "GENERAL AUTHENTICATE",
                    "description": "The General Authenticate command is used to generate secure messaging session keys between both entities (IFD and ICC) as part of elliptic curve asymmetric key mutual authentication.",
                    "code": "86"
                },
                {
                    "name": "GET PREVIOUS PSAM SIGNATURE",
                    "description": "Repeat the computation and output of the last signature received from the PSAM.",
                    "code": "86"
                },
                {
                    "name": "GIVE RANDOM",
                    "description": "Send a random number to the smart card.",
                    "code": "86"
                }
            ],
            "87": [
                {
                    "name": "GENERAL AUTHENTICATE",
                    "description": "The General Authenticate command is used to generate secure messaging session keys between both entities (IFD and ICC) as part of elliptic curve asymmetric key mutual authentication.",
                    "code": "87"
                }
            ],
            "88": [
                {
                    "name": "INTERNAL AUTHENTICATE",
                    "description": "x",
                    "code": "88"
                },
                {
                    "name": "RUN GSM ALGORITHM",
                    "description": "Execute a GSM-specific cryptographic algorithm.",
                    "code": "88"
                }
            ],
            "08": [
                {
                    "name": "ACTIVATE RECORD",
                    "description": "x",
                    "code": "08"
                }
            ],
            "E2": [
                {
                    "name": "APPEND RECORD",
                    "description": "Insert a new record in a file with a linear fixed structure.",
                    "code": "E2"
                },
                {
                    "name": "CREATE RECORD",
                    "description": "Create a new record in a record-oriented file.",
                    "code": "E2"
                }
            ],
            "1E": [
                {
                    "name": "APPLICATION BLOCK",
                    "description": "Reversibly block an application. ",
                    "code": "1E"
                }
            ],
            "A6": [
                {
                    "name": "CHECK RESET AND APPLET SELECTION",
                    "description": "x",
                    "code": "A6"
                }
            ],
            "AC": [
                {
                    "name": "CLOSE APPLICATION",
                    "description": "Reset all attained access condition levels.",
                    "code": "AC"
                }
            ],
            "E0": [
                {
                    "name": "CREATE FILE",
                    "description": "Creates an EF under the root or the currently selected DF or creates a DF under the root.",
                    "code": "E0"
                }
            ],
            "04": [
                {
                    "name": "DEACTIVATE FILE",
                    "description": "Changes the state of a file to OPERATIONAL (DEACTIVATED).",
                    "code": "04"
                },
                {
                    "name": "INVALIDATE",
                    "description": "Reversibly block a file.",
                    "code": "04"
                }
            ],
            "06": [
                {
                    "name": "DEACTIVATE RECORD",
                    "description": "x",
                    "code": "06"
                }
            ],
            "EE": [
                {
                    "name": "DELETE DATA",
                    "description": "x",
                    "code": "EE"
                }
            ],
            "E4": [
                {
                    "name": "DELETE FILE",
                    "description": "Deletes the current DF or EF.",
                    "code": "E4"
                },
                {
                    "name": "DELETE",
                    "description": "Delete a uniquely identifiable object (such as a load file, application or key).",
                    "code": "E4"
                }
            ],
            "Disable PIN queries.": [
                {
                    "name": "DISABLE CHV",
                    "description": " ",
                    "code": "Disable PIN queries."
                }
            ],
            "x": [
                {
                    "name": "END PERSONALIZATION",
                    "description": "x",
                    "code": "x"
                },
                {
                    "name": "MANAGE PROTOCOL",
                    "description": "Allows or disallows use of applet commands in contactless mode.",
                    "code": "x"
                }
            ],
            "C2": [
                {
                    "name": "ENVELOPE",
                    "description": "Embed a command in a smart card command.",
                    "code": "C2"
                }
            ],
            "C3": [
                {
                    "name": "ENVELOPE",
                    "description": "x",
                    "code": "C3"
                }
            ],
            "0E": [
                {
                    "name": "ERASE BINARY",
                    "description": "Erases part of a binary file.",
                    "code": "0E"
                }
            ],
            "0F": [
                {
                    "name": "ERASE BINARY",
                    "description": "Erases part of a binary file.",
                    "code": "0F"
                }
            ],
            "0C": [
                {
                    "name": "ERASE RECORD",
                    "description": "x",
                    "code": "0C"
                }
            ],
            "AE": [
                {
                    "name": "EXECUTE",
                    "description": "Execute a file.",
                    "code": "AE"
                },
                {
                    "name": "GENERATE AUTHORISATION CRYPTOGRAM",
                    "description": "Generate a signature for a payment transaction.",
                    "code": "AE"
                }
            ],
            "D4": [
                {
                    "name": "EXTEND",
                    "description": "Extend a file.",
                    "code": "D4"
                }
            ],
            "CB": [
                {
                    "name": "GET DATA (CA)",
                    "description": "x",
                    "code": "CB"
                },
                {
                    "name": "GET DATA",
                    "description": "x",
                    "code": "CB"
                }
            ],
            "CA": [
                {
                    "name": "GET DATA",
                    "description": "Read TLV-coded data objects.",
                    "code": "CA"
                }
            ],
            "CC": [
                {
                    "name": "GET NEXT DATA",
                    "description": "x",
                    "code": "CC"
                }
            ],
            "CD": [
                {
                    "name": "GET NEXT DATA",
                    "description": "x",
                    "code": "CD"
                }
            ],
            "5A": [
                {
                    "name": "GET PREVIOUS IEP SIGNATURE",
                    "description": "Repeat the computation and output of the last signature received IEP.",
                    "code": "5A"
                }
            ],
            "C0": [
                {
                    "name": "GET RESPONSE",
                    "description": "Retrieves the response from a previous command.",
                    "code": "C0"
                }
            ],
            "F2": [
                {
                    "name": "GET STATUS",
                    "description": "Read the life-cycle state information of the card manager, application and load file.",
                    "code": "F2"
                },
                {
                    "name": "STATUS",
                    "description": "Read various data from the currently selected file.",
                    "code": "F2"
                }
            ],
            "7C": [
                {
                    "name": "INITIALIZE PSAM for Offline Collection",
                    "description": "Initialize PSAM for offline booking of the amount.",
                    "code": "7C"
                }
            ],
            "X": [
                {
                    "name": "INITILIZE UPDATE",
                    "description": "First step to open a secure channel. The personalization device authenticates the card.",
                    "code": "X"
                }
            ],
            "EA": [
                {
                    "name": "LOAD APPLICATION",
                    "description": "x",
                    "code": "EA"
                }
            ],
            "EB": [
                {
                    "name": "LOAD APPLICATION",
                    "description": "Load an application by transferring the load file.",
                    "code": "EB"
                }
            ],
            "E8": [
                {
                    "name": "LOAD",
                    "description": "x",
                    "code": "E8"
                },
                {
                    "name": "TERMINATE EF",
                    "description": "Irreversibly block an EF.",
                    "code": "E8"
                }
            ],
            "CF": [
                {
                    "name": "MANAGE DATA",
                    "description": "x",
                    "code": "CF"
                }
            ],
            "2E": [
                {
                    "name": "PERFORM BIOMETRIC OPERATION",
                    "description": "x",
                    "code": "2E"
                }
            ],
            "2F": [
                {
                    "name": "PERFORM BIOMETRIC OPERATION",
                    "description": "x",
                    "code": "2F"
                }
            ],
            "2A": [
                {
                    "name": "PERFORM SECURITY OPERATION",
                    "description": "Execute a cryptographic algorithm in the smart card.",
                    "code": "2A"
                }
            ],
            "2B": [
                {
                    "name": "PERFORM SECURITY OPERATION",
                    "description": "x",
                    "code": "2B"
                }
            ],
            "7A": [
                {
                    "name": "PSAM COLLECT",
                    "description": "End PSAM online booking of an amount.",
                    "code": "7A"
                }
            ],
            "7E": [
                {
                    "name": "PSAM VERIFY COLLECTION",
                    "description": "End PSAM offline booking of an amount.",
                    "code": "7E"
                }
            ],
            "DA": [
                {
                    "name": "PUT DATA",
                    "description": "Write TLV-coded data objects.",
                    "code": "DA"
                }
            ],
            "DB": [
                {
                    "name": "PUT DATA",
                    "description": "x",
                    "code": "DB"
                }
            ],
            "D8": [
                {
                    "name": "PUT KEY",
                    "description": "Write one or more new keys or replace existing keys.",
                    "code": "D8"
                },
                {
                    "name": "PUT NEXT DATA",
                    "description": "x",
                    "code": "D8"
                }
            ],
            "D9": [
                {
                    "name": "PUT NEXT DATA",
                    "description": "x",
                    "code": "D9"
                }
            ],
            "B4": [
                {
                    "name": "READ BINARY STAMPED",
                    "description": "Read data from a file with a transparent structure that is secured with a cryptographic checksum.",
                    "code": "B4"
                }
            ],
            "B0": [
                {
                    "name": "READ BINARY",
                    "description": "Reads part of a binary file.",
                    "code": "B0"
                }
            ],
            "B1": [
                {
                    "name": "READ BINARY",
                    "description": "Reads part of a binary file.",
                    "code": "B1"
                }
            ],
            "B6": [
                {
                    "name": "READ RECORD STAMPED",
                    "description": "Read data from a file with a record-oriented structure that is secured with a cryptographic checksum.",
                    "code": "B6"
                }
            ],
            "B2": [
                {
                    "name": "READ RECORD(S)",
                    "description": "Read data from a file with a record-oriented structure.",
                    "code": "B2"
                },
                {
                    "name": "READ RECORD",
                    "description": "Read data from a file with a record-oriented structure.",
                    "code": "B2"
                }
            ],
            "B3": [
                {
                    "name": "READ RECORD",
                    "description": "x",
                    "code": "B3"
                }
            ],
            "EC": [
                {
                    "name": "REMOVE APPLICATION",
                    "description": "x",
                    "code": "EC"
                }
            ],
            "ED": [
                {
                    "name": "REMOVE APPLICATION",
                    "description": "x",
                    "code": "ED"
                }
            ],
            "2C": [
                {
                    "name": "RESET RETRY COUNTER",
                    "description": "Reset an error counter.",
                    "code": "2C"
                },
                {
                    "name": "UNBLOCK CHV",
                    "description": "Reset a PIN retry counter that has reached its maximum value.",
                    "code": "2C"
                }
            ],
            "2D": [
                {
                    "name": "RESET RETRY COUNTER",
                    "description": "x",
                    "code": "2D"
                }
            ],
            "A0": [
                {
                    "name": "SEARCH BINARY",
                    "description": "Search for a text string in a file with a transparent structure.",
                    "code": "A0"
                }
            ],
            "A1": [
                {
                    "name": "SEARCH BINARY",
                    "description": "x",
                    "code": "A1"
                }
            ],
            "A2": [
                {
                    "name": "SEARCH RECORD",
                    "description": "Search for a text string in a file with a record-oriented structure.",
                    "code": "A2"
                },
                {
                    "name": "SEEK",
                    "description": "Search for a text string in a file with a record-oriented structure.",
                    "code": "A2"
                }
            ],
            "A4": [
                {
                    "name": "SELECT (FILE)",
                    "description": "Selects a DF or an EF by its file ID, path or name (in the case of DFs).",
                    "code": "A4"
                },
                {
                    "name": "SELECT",
                    "description": "Select a file.",
                    "code": "A4"
                }
            ],
            "A5": [
                {
                    "name": "SELECT DATA",
                    "description": "x",
                    "code": "A5"
                }
            ],
            "F0": [
                {
                    "name": "SET STATUS",
                    "description": "Write life-cycle state data for the card manager, application and load file.",
                    "code": "F0"
                }
            ],
            "FA": [
                {
                    "name": "SLEEP",
                    "description": "Obsolete command for setting the smart card in a power-saving state.",
                    "code": "FA"
                }
            ],
            "FE": [
                {
                    "name": "TERMINATE CARD USAGE",
                    "description": "Irreversibly block a smart card.",
                    "code": "FE"
                }
            ],
            "EF": [
                {
                    "name": "TERMINATE CARD USAGE",
                    "description": "Irreversibly block a smart card.",
                    "code": "EF"
                }
            ],
            "E6": [
                {
                    "name": "TERMINATE DF",
                    "description": "Irreversibly block an DF.",
                    "code": "E6"
                }
            ],
            "D6": [
                {
                    "name": "UPDATE BINARY",
                    "description": "Updates part of a binary file.",
                    "code": "D6"
                }
            ],
            "D7": [
                {
                    "name": "UPDATE BINARY",
                    "description": "Updates part of a binary file.",
                    "code": "D7"
                }
            ],
            "DE": [
                {
                    "name": "UPDATE DATA",
                    "description": "x",
                    "code": "DE"
                }
            ],
            "DF": [
                {
                    "name": "UPDATE DATA",
                    "description": "x",
                    "code": "DF"
                }
            ],
            "DC": [
                {
                    "name": "UPDATE RECORD",
                    "description": "Write to a file with a linear fixed, linear variable or cyclic structure.",
                    "code": "DC"
                }
            ],
            "DD": [
                {
                    "name": "UPDATE RECORD",
                    "description": "Write to a file with a linear fixed, linear variable or cyclic structure.",
                    "code": "DD"
                }
            ],
            "D0": [
                {
                    "name": "WRITE BINARY",
                    "description": "Write to a file with a transparent structure using a logical AND/OR process.",
                    "code": "D0"
                }
            ],
            "D1": [
                {
                    "name": "WRITE BINARY",
                    "description": "Write to a file with a transparent structure using a logical AND/OR process.",
                    "code": "D1"
                }
            ],
            "D2": [
                {
                    "name": "WRITE RECORD",
                    "description": "Write to a file with a record-oriented structure using a logical AND/OR process.",
                    "code": "D2"
                }
            ]
        },
        responses = {
            "6200": [
                {
                    "sw1": "62",
                    "sw2": "00",
                    "category": "W",
                    "description": "No information given (NV-Ram not changed)"
                }
            ],
            "6201": [
                {
                    "sw1": "62",
                    "sw2": "01",
                    "category": "W",
                    "description": "NV-Ram not changed 1."
                }
            ],
            "6281": [
                {
                    "sw1": "62",
                    "sw2": "81",
                    "category": "W",
                    "description": "Part of returned data may be corrupted"
                }
            ],
            "6282": [
                {
                    "sw1": "62",
                    "sw2": "82",
                    "category": "W",
                    "description": "End of file/record reached before reading Le bytes"
                }
            ],
            "6283": [
                {
                    "sw1": "62",
                    "sw2": "83",
                    "category": "W",
                    "description": "Selected file invalidated"
                }
            ],
            "6284": [
                {
                    "sw1": "62",
                    "sw2": "84",
                    "category": "W",
                    "description": "Selected file is not valid. FCI not formated according to ISO"
                }
            ],
            "6285": [
                {
                    "sw1": "62",
                    "sw2": "85",
                    "category": "W",
                    "description": "No input data available from a sensor on the card. No Purse Engine enslaved for R3bc"
                }
            ],
            "6300": [
                {
                    "sw1": "63",
                    "sw2": "00",
                    "category": "W",
                    "description": "No information given (NV-Ram changed)"
                }
            ],
            "6381": [
                {
                    "sw1": "63",
                    "sw2": "81",
                    "category": "W",
                    "description": "File filled up by the last write. Loading/updating is not allowed."
                }
            ],
            "6382": [
                {
                    "sw1": "63",
                    "sw2": "82",
                    "category": "W",
                    "description": "Card key not supported."
                }
            ],
            "6383": [
                {
                    "sw1": "63",
                    "sw2": "83",
                    "category": "W",
                    "description": "Reader key not supported."
                }
            ],
            "6384": [
                {
                    "sw1": "63",
                    "sw2": "84",
                    "category": "W",
                    "description": "Plaintext transmission not supported."
                }
            ],
            "6385": [
                {
                    "sw1": "63",
                    "sw2": "85",
                    "category": "W",
                    "description": "Secured transmission not supported."
                }
            ],
            "6386": [
                {
                    "sw1": "63",
                    "sw2": "86",
                    "category": "W",
                    "description": "Volatile memory is not available."
                }
            ],
            "6387": [
                {
                    "sw1": "63",
                    "sw2": "87",
                    "category": "W",
                    "description": "Non-volatile memory is not available."
                }
            ],
            "6388": [
                {
                    "sw1": "63",
                    "sw2": "88",
                    "category": "W",
                    "description": "Key number not valid."
                }
            ],
            "6389": [
                {
                    "sw1": "63",
                    "sw2": "89",
                    "category": "W",
                    "description": "Key length is not correct."
                }
            ],
            "6400": [
                {
                    "sw1": "64",
                    "sw2": "00",
                    "category": "E",
                    "description": "No information given (NV-Ram not changed)"
                }
            ],
            "6401": [
                {
                    "sw1": "64",
                    "sw2": "01",
                    "category": "E",
                    "description": "Command timeout. Immediate response required by the card."
                }
            ],
            "6500": [
                {
                    "sw1": "65",
                    "sw2": "00",
                    "category": "E",
                    "description": "No information given"
                }
            ],
            "6501": [
                {
                    "sw1": "65",
                    "sw2": "01",
                    "category": "E",
                    "description": "Write error. Memory failure. There have been problems in writing or reading the EEPROM. Other hardware problems may also bring this error."
                }
            ],
            "6581": [
                {
                    "sw1": "65",
                    "sw2": "81",
                    "category": "E",
                    "description": "Memory failure"
                }
            ],
            "6600": [
                {
                    "sw1": "66",
                    "sw2": "00",
                    "category": "S",
                    "description": "Error while receiving (timeout)"
                }
            ],
            "6601": [
                {
                    "sw1": "66",
                    "sw2": "01",
                    "category": "S",
                    "description": "Error while receiving (character parity error)"
                }
            ],
            "6602": [
                {
                    "sw1": "66",
                    "sw2": "02",
                    "category": "S",
                    "description": "Wrong checksum"
                }
            ],
            "6603": [
                {
                    "sw1": "66",
                    "sw2": "03",
                    "category": "S",
                    "description": "The current DF file without FCI"
                }
            ],
            "6604": [
                {
                    "sw1": "66",
                    "sw2": "04",
                    "category": "S",
                    "description": "No SF or KF under the current DF"
                }
            ],
            "6669": [
                {
                    "sw1": "66",
                    "sw2": "69",
                    "category": "S",
                    "description": "Incorrect Encryption/Decryption Padding"
                }
            ],
            "6700": [
                {
                    "sw1": "67",
                    "sw2": "00",
                    "category": "E",
                    "description": "Wrong length"
                }
            ],
            "6800": [
                {
                    "sw1": "68",
                    "sw2": "00",
                    "category": "E",
                    "description": "No information given (The request function is not supported by the card)"
                }
            ],
            "6881": [
                {
                    "sw1": "68",
                    "sw2": "81",
                    "category": "E",
                    "description": "Logical channel not supported"
                }
            ],
            "6882": [
                {
                    "sw1": "68",
                    "sw2": "82",
                    "category": "E",
                    "description": "Secure messaging not supported"
                }
            ],
            "6883": [
                {
                    "sw1": "68",
                    "sw2": "83",
                    "category": "E",
                    "description": "Last command of the chain expected"
                }
            ],
            "6884": [
                {
                    "sw1": "68",
                    "sw2": "84",
                    "category": "E",
                    "description": "Command chaining not supported"
                }
            ],
            "6900": [
                {
                    "sw1": "69",
                    "sw2": "00",
                    "category": "E",
                    "description": "No information given (Command not allowed)"
                }
            ],
            "6901": [
                {
                    "sw1": "69",
                    "sw2": "01",
                    "category": "E",
                    "description": "Command not accepted (inactive state)"
                }
            ],
            "6981": [
                {
                    "sw1": "69",
                    "sw2": "81",
                    "category": "E",
                    "description": "Command incompatible with file structure"
                }
            ],
            "6982": [
                {
                    "sw1": "69",
                    "sw2": "82",
                    "category": "E",
                    "description": "Security condition not satisfied."
                }
            ],
            "6983": [
                {
                    "sw1": "69",
                    "sw2": "83",
                    "category": "E",
                    "description": "Authentication method blocked"
                }
            ],
            "6984": [
                {
                    "sw1": "69",
                    "sw2": "84",
                    "category": "E",
                    "description": "Referenced data reversibly blocked (invalidated)"
                }
            ],
            "6985": [
                {
                    "sw1": "69",
                    "sw2": "85",
                    "category": "E",
                    "description": "Conditions of use not satisfied."
                }
            ],
            "6986": [
                {
                    "sw1": "69",
                    "sw2": "86",
                    "category": "E",
                    "description": "Command not allowed (no current EF)"
                }
            ],
            "6987": [
                {
                    "sw1": "69",
                    "sw2": "87",
                    "category": "E",
                    "description": "Expected secure messaging (SM) object missing"
                }
            ],
            "6988": [
                {
                    "sw1": "69",
                    "sw2": "88",
                    "category": "E",
                    "description": "Incorrect secure messaging (SM) data object"
                }
            ],
            "6996": [
                {
                    "sw1": "69",
                    "sw2": "96",
                    "category": "E",
                    "description": "Data must be updated again"
                }
            ],
            "9000": [
                {
                    "sw1": "90",
                    "sw2": "00",
                    "category": "I",
                    "description": "Command successfully executed (OK)."
                }
            ],
            "9004": [
                {
                    "sw1": "90",
                    "sw2": "04",
                    "category": "W",
                    "description": "PIN not succesfully verified, 3 or more PIN tries left"
                }
            ],
            "9008": [
                {
                    "sw1": "90",
                    "sw2": "08",
                    "category": " ",
                    "description": "Key/file not found"
                }
            ],
            "9080": [
                {
                    "sw1": "90",
                    "sw2": "80",
                    "category": "W",
                    "description": "Unblock Try Counter has reached zero"
                }
            ],
            "9100": [
                {
                    "sw1": "91",
                    "sw2": "00",
                    "category": " ",
                    "description": "OK"
                }
            ],
            "9101": [
                {
                    "sw1": "91",
                    "sw2": "01",
                    "category": " ",
                    "description": "States.activity, States.lock Status or States.lockable has wrong value"
                }
            ],
            "9102": [
                {
                    "sw1": "91",
                    "sw2": "02",
                    "category": " ",
                    "description": "Transaction number reached its limit"
                }
            ],
            "9140": [
                {
                    "sw1": "91",
                    "sw2": "40",
                    "category": " ",
                    "description": "Invalid key number specified"
                }
            ],
            "9210": [
                {
                    "sw1": "92",
                    "sw2": "10",
                    "category": "E",
                    "description": "Insufficient memory. No more storage available."
                }
            ],
            "9240": [
                {
                    "sw1": "92",
                    "sw2": "40",
                    "category": "E",
                    "description": "Writing to EEPROM not successful."
                }
            ],
            "9301": [
                {
                    "sw1": "93",
                    "sw2": "01",
                    "category": " ",
                    "description": "Integrity error"
                }
            ],
            "9302": [
                {
                    "sw1": "93",
                    "sw2": "02",
                    "category": " ",
                    "description": "Candidate S2 invalid"
                }
            ],
            "9303": [
                {
                    "sw1": "93",
                    "sw2": "03",
                    "category": "E",
                    "description": "Application is permanently locked"
                }
            ],
            "9400": [
                {
                    "sw1": "94",
                    "sw2": "00",
                    "category": "E",
                    "description": "No EF selected."
                }
            ],
            "9401": [
                {
                    "sw1": "94",
                    "sw2": "01",
                    "category": " ",
                    "description": "Candidate currency code does not match purse currency"
                }
            ],
            "9402": [
                {
                    "sw1": "94",
                    "sw2": "02",
                    "category": " ",
                    "description": "Candidate amount too high"
                },
                {
                    "sw1": "94",
                    "sw2": "02",
                    "category": "E",
                    "description": "Address range exceeded."
                }
            ],
            "9403": [
                {
                    "sw1": "94",
                    "sw2": "03",
                    "category": " ",
                    "description": "Candidate amount too low"
                }
            ],
            "9404": [
                {
                    "sw1": "94",
                    "sw2": "04",
                    "category": "E",
                    "description": "FID not found, record not found or comparison pattern not found."
                }
            ],
            "9405": [
                {
                    "sw1": "94",
                    "sw2": "05",
                    "category": " ",
                    "description": "Problems in the data field"
                }
            ],
            "9406": [
                {
                    "sw1": "94",
                    "sw2": "06",
                    "category": "E",
                    "description": "Required MAC unavailable"
                }
            ],
            "9407": [
                {
                    "sw1": "94",
                    "sw2": "07",
                    "category": " ",
                    "description": "Bad currency : purse engine has no slot with R3bc currency"
                }
            ],
            "9408": [
                {
                    "sw1": "94",
                    "sw2": "08",
                    "category": " ",
                    "description": "R3bc currency not supported in purse engine"
                },
                {
                    "sw1": "94",
                    "sw2": "08",
                    "category": "E",
                    "description": "Selected file type does not match command."
                }
            ],
            "9580": [
                {
                    "sw1": "95",
                    "sw2": "80",
                    "category": " ",
                    "description": "Bad sequence"
                }
            ],
            "9681": [
                {
                    "sw1": "96",
                    "sw2": "81",
                    "category": " ",
                    "description": "Slave not found"
                }
            ],
            "9700": [
                {
                    "sw1": "97",
                    "sw2": "00",
                    "category": " ",
                    "description": "PIN blocked and Unblock Try Counter is 1 or 2"
                }
            ],
            "9702": [
                {
                    "sw1": "97",
                    "sw2": "02",
                    "category": " ",
                    "description": "Main keys are blocked"
                }
            ],
            "9704": [
                {
                    "sw1": "97",
                    "sw2": "04",
                    "category": " ",
                    "description": "PIN not succesfully verified, 3 or more PIN tries left"
                }
            ],
            "9784": [
                {
                    "sw1": "97",
                    "sw2": "84",
                    "category": " ",
                    "description": "Base key"
                }
            ],
            "9785": [
                {
                    "sw1": "97",
                    "sw2": "85",
                    "category": " ",
                    "description": "Limit exceeded - C-MAC key"
                }
            ],
            "9786": [
                {
                    "sw1": "97",
                    "sw2": "86",
                    "category": " ",
                    "description": "SM error - Limit exceeded - R-MAC key"
                }
            ],
            "9787": [
                {
                    "sw1": "97",
                    "sw2": "87",
                    "category": " ",
                    "description": "Limit exceeded - sequence counter"
                }
            ],
            "9788": [
                {
                    "sw1": "97",
                    "sw2": "88",
                    "category": " ",
                    "description": "Limit exceeded - R-MAC length"
                }
            ],
            "9789": [
                {
                    "sw1": "97",
                    "sw2": "89",
                    "category": " ",
                    "description": "Service not available"
                }
            ],
            "9802": [
                {
                    "sw1": "98",
                    "sw2": "02",
                    "category": "E",
                    "description": "No PIN defined."
                }
            ],
            "9804": [
                {
                    "sw1": "98",
                    "sw2": "04",
                    "category": "E",
                    "description": "Access conditions not satisfied, authentication failed."
                }
            ],
            "9835": [
                {
                    "sw1": "98",
                    "sw2": "35",
                    "category": "E",
                    "description": "ASK RANDOM or GIVE RANDOM not executed."
                }
            ],
            "9840": [
                {
                    "sw1": "98",
                    "sw2": "40",
                    "category": "E",
                    "description": "PIN verification not successful."
                }
            ],
            "9850": [
                {
                    "sw1": "98",
                    "sw2": "50",
                    "category": "E",
                    "description": "INCREASE or DECREASE could not be executed because a limit has been reached."
                }
            ],
            "9862": [
                {
                    "sw1": "98",
                    "sw2": "62",
                    "category": "E",
                    "description": "Authentication Error, application specific (incorrect MAC)"
                }
            ],
            "9900": [
                {
                    "sw1": "99",
                    "sw2": "00",
                    "category": " ",
                    "description": "1 PIN try left"
                }
            ],
            "9904": [
                {
                    "sw1": "99",
                    "sw2": "04",
                    "category": " ",
                    "description": "PIN not succesfully verified, 1 PIN try left"
                }
            ],
            "9985": [
                {
                    "sw1": "99",
                    "sw2": "85",
                    "category": " ",
                    "description": "Wrong status - Cardholder lock"
                }
            ],
            "9986": [
                {
                    "sw1": "99",
                    "sw2": "86",
                    "category": "E",
                    "description": "Missing privilege"
                }
            ],
            "9987": [
                {
                    "sw1": "99",
                    "sw2": "87",
                    "category": " ",
                    "description": "PIN is not installed"
                }
            ],
            "9988": [
                {
                    "sw1": "99",
                    "sw2": "88",
                    "category": " ",
                    "description": "Wrong status - R-MAC state"
                }
            ],
            "06": [
                {
                    "sw1": "06",
                    "sw2": " ",
                    "category": "E",
                    "description": "Class not supported."
                }
            ],
            "61XX": [
                {
                    "sw1": "61",
                    "sw2": "XX",
                    "category": "I",
                    "description": "Command successfully executed; \\XX\\ bytes of data are available and can be requested using GET RESPONSE."
                }
            ],
            "62A2": [
                {
                    "sw1": "62",
                    "sw2": "A2",
                    "category": "W",
                    "description": "Wrong R-MAC"
                }
            ],
            "62A4": [
                {
                    "sw1": "62",
                    "sw2": "A4",
                    "category": "W",
                    "description": "Card locked (during reset( ))"
                }
            ],
            "62CX": [
                {
                    "sw1": "62",
                    "sw2": "CX",
                    "category": "W",
                    "description": "Counter with value x (command dependent)"
                }
            ],
            "62F1": [
                {
                    "sw1": "62",
                    "sw2": "F1",
                    "category": "W",
                    "description": "Wrong C-MAC"
                }
            ],
            "62F3": [
                {
                    "sw1": "62",
                    "sw2": "F3",
                    "category": "W",
                    "description": "Internal reset"
                }
            ],
            "62F5": [
                {
                    "sw1": "62",
                    "sw2": "F5",
                    "category": "W",
                    "description": "Default agent locked"
                }
            ],
            "62F7": [
                {
                    "sw1": "62",
                    "sw2": "F7",
                    "category": "W",
                    "description": "Cardholder locked"
                }
            ],
            "62F8": [
                {
                    "sw1": "62",
                    "sw2": "F8",
                    "category": "W",
                    "description": "Basement is current agent"
                }
            ],
            "62F9": [
                {
                    "sw1": "62",
                    "sw2": "F9",
                    "category": "W",
                    "description": "CALC Key Set not unblocked"
                }
            ],
            "62XX": [
                {
                    "sw1": "62",
                    "sw2": "XX",
                    "category": "W",
                    "description": "State of non-volatile memory unchanged"
                }
            ],
            "63C0": [
                {
                    "sw1": "63",
                    "sw2": "C0",
                    "category": "W",
                    "description": "Verify fail, no try left."
                }
            ],
            "63C1": [
                {
                    "sw1": "63",
                    "sw2": "C1",
                    "category": "W",
                    "description": "Verify fail, 1 try left."
                }
            ],
            "63C2": [
                {
                    "sw1": "63",
                    "sw2": "C2",
                    "category": "W",
                    "description": "Verify fail, 2 tries left."
                }
            ],
            "63C3": [
                {
                    "sw1": "63",
                    "sw2": "C3",
                    "category": "W",
                    "description": "Verify fail, 3 tries left."
                }
            ],
            "63CX": [
                {
                    "sw1": "63",
                    "sw2": "CX",
                    "category": "W",
                    "description": "The counter has reached the value \\x\\ (0 = x = 15) (command dependent)."
                }
            ],
            "63F1": [
                {
                    "sw1": "63",
                    "sw2": "F1",
                    "category": "W",
                    "description": "More data expected."
                }
            ],
            "63F2": [
                {
                    "sw1": "63",
                    "sw2": "F2",
                    "category": "W",
                    "description": "More data expected and proactive command pending."
                }
            ],
            "63XX": [
                {
                    "sw1": "63",
                    "sw2": "XX",
                    "category": "W",
                    "description": "State of non-volatile memory changed"
                }
            ],
            "64XX": [
                {
                    "sw1": "64",
                    "sw2": "XX",
                    "category": "E",
                    "description": "State of non-volatile memory unchanged"
                }
            ],
            "65XX": [
                {
                    "sw1": "65",
                    "sw2": "XX",
                    "category": "E",
                    "description": "State of non-volatile memory changed"
                }
            ],
            "67XX": [
                {
                    "sw1": "67",
                    "sw2": "XX",
                    "category": "E",
                    "description": "length incorrect (procedure)(ISO 7816-3)"
                }
            ],
            "68XX": [
                {
                    "sw1": "68",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Functions in CLA not supported"
                }
            ],
            "698D": [
                {
                    "sw1": "69",
                    "sw2": "8D",
                    "category": " ",
                    "description": "Reserved"
                }
            ],
            "69E1": [
                {
                    "sw1": "69",
                    "sw2": "E1",
                    "category": "E",
                    "description": "POL1 of the currently Enabled Profile prevents this action."
                }
            ],
            "69F0": [
                {
                    "sw1": "69",
                    "sw2": "F0",
                    "category": "E",
                    "description": "Permission Denied"
                }
            ],
            "69F1": [
                {
                    "sw1": "69",
                    "sw2": "F1",
                    "category": "E",
                    "description": "Permission Denied - Missing Privilege"
                }
            ],
            "69XX": [
                {
                    "sw1": "69",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Command not allowed"
                }
            ],
            "6A00": [
                {
                    "sw1": "6A",
                    "sw2": "00",
                    "category": "E",
                    "description": "No information given (Bytes P1 and/or P2 are incorrect)"
                }
            ],
            "6A80": [
                {
                    "sw1": "6A",
                    "sw2": "80",
                    "category": "E",
                    "description": "The parameters in the data field are incorrect."
                }
            ],
            "6A81": [
                {
                    "sw1": "6A",
                    "sw2": "81",
                    "category": "E",
                    "description": "Function not supported"
                }
            ],
            "6A82": [
                {
                    "sw1": "6A",
                    "sw2": "82",
                    "category": "E",
                    "description": "File not found"
                }
            ],
            "6A83": [
                {
                    "sw1": "6A",
                    "sw2": "83",
                    "category": "E",
                    "description": "Record not found"
                }
            ],
            "6A84": [
                {
                    "sw1": "6A",
                    "sw2": "84",
                    "category": "E",
                    "description": "There is insufficient memory space in record or file"
                }
            ],
            "6A85": [
                {
                    "sw1": "6A",
                    "sw2": "85",
                    "category": "E",
                    "description": "Lc inconsistent with TLV structure"
                }
            ],
            "6A86": [
                {
                    "sw1": "6A",
                    "sw2": "86",
                    "category": "E",
                    "description": "Incorrect P1 or P2 parameter."
                }
            ],
            "6A87": [
                {
                    "sw1": "6A",
                    "sw2": "87",
                    "category": "E",
                    "description": "Lc inconsistent with P1-P2"
                }
            ],
            "6A88": [
                {
                    "sw1": "6A",
                    "sw2": "88",
                    "category": "E",
                    "description": "Referenced data not found"
                }
            ],
            "6A89": [
                {
                    "sw1": "6A",
                    "sw2": "89",
                    "category": "E",
                    "description": "File already exists"
                }
            ],
            "6A8A": [
                {
                    "sw1": "6A",
                    "sw2": "8A",
                    "category": "E",
                    "description": "DF name already exists."
                }
            ],
            "6AF0": [
                {
                    "sw1": "6A",
                    "sw2": "F0",
                    "category": "E",
                    "description": "Wrong parameter value"
                }
            ],
            "6AXX": [
                {
                    "sw1": "6A",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Wrong parameter(s) P1-P2"
                }
            ],
            "6B00": [
                {
                    "sw1": "6B",
                    "sw2": "00",
                    "category": "E",
                    "description": "Wrong parameter(s) P1-P2"
                }
            ],
            "6BXX": [
                {
                    "sw1": "6B",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Reference incorrect (procedure byte), (ISO 7816-3)"
                }
            ],
            "6C00": [
                {
                    "sw1": "6C",
                    "sw2": "00",
                    "category": "E",
                    "description": "Incorrect P3 length."
                }
            ],
            "6CXX": [
                {
                    "sw1": "6C",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Bad length value in Le; \\xx\\ is the correct exact Le"
                }
            ],
            "6D00": [
                {
                    "sw1": "6D",
                    "sw2": "00",
                    "category": "E",
                    "description": "Instruction code not supported or invalid"
                }
            ],
            "6DXX": [
                {
                    "sw1": "6D",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Instruction code not programmed or invalid (procedure byte), (ISO 7816-3)"
                }
            ],
            "6E00": [
                {
                    "sw1": "6E",
                    "sw2": "00",
                    "category": "E",
                    "description": "Class not supported"
                }
            ],
            "6EXX": [
                {
                    "sw1": "6E",
                    "sw2": "XX",
                    "category": "E",
                    "description": "Instruction class not supported (procedure byte), (ISO 7816-3)"
                }
            ],
            "6F00": [
                {
                    "sw1": "6F",
                    "sw2": "00",
                    "category": "E",
                    "description": "Command aborted - more exact diagnosis not possible (e.g., operating system error)."
                }
            ],
            "6FFF": [
                {
                    "sw1": "6F",
                    "sw2": "FF",
                    "category": "E",
                    "description": "Card dead (overuse, ...)"
                }
            ],
            "6FXX": [
                {
                    "sw1": "6F",
                    "sw2": "XX",
                    "category": "E",
                    "description": "No precise diagnosis (procedure byte), (ISO 7816-3)"
                }
            ],
            "910C": [
                {
                    "sw1": "91",
                    "sw2": "0C",
                    "category": " ",
                    "description": "No changes"
                }
            ],
            "910E": [
                {
                    "sw1": "91",
                    "sw2": "0E",
                    "category": " ",
                    "description": "Insufficient NV-Memory to complete command"
                }
            ],
            "911C": [
                {
                    "sw1": "91",
                    "sw2": "1C",
                    "category": " ",
                    "description": "Command code not supported"
                }
            ],
            "911E": [
                {
                    "sw1": "91",
                    "sw2": "1E",
                    "category": " ",
                    "description": "CRC or MAC does not match data"
                }
            ],
            "917E": [
                {
                    "sw1": "91",
                    "sw2": "7E",
                    "category": " ",
                    "description": "Length of command string invalid"
                }
            ],
            "919D": [
                {
                    "sw1": "91",
                    "sw2": "9D",
                    "category": " ",
                    "description": "Not allow the requested command"
                }
            ],
            "919E": [
                {
                    "sw1": "91",
                    "sw2": "9E",
                    "category": " ",
                    "description": "Value of the parameter invalid"
                }
            ],
            "91A0": [
                {
                    "sw1": "91",
                    "sw2": "A0",
                    "category": " ",
                    "description": "Requested AID not present on PICC"
                }
            ],
            "91A1": [
                {
                    "sw1": "91",
                    "sw2": "A1",
                    "category": " ",
                    "description": "Unrecoverable error within application"
                }
            ],
            "91AE": [
                {
                    "sw1": "91",
                    "sw2": "AE",
                    "category": " ",
                    "description": "Authentication status does not allow the requested command"
                }
            ],
            "91AF": [
                {
                    "sw1": "91",
                    "sw2": "AF",
                    "category": " ",
                    "description": "Additional data frame is expected to be sent"
                }
            ],
            "91BE": [
                {
                    "sw1": "91",
                    "sw2": "BE",
                    "category": " ",
                    "description": "Out of boundary"
                }
            ],
            "91C1": [
                {
                    "sw1": "91",
                    "sw2": "C1",
                    "category": " ",
                    "description": "Unrecoverable error within PICC"
                }
            ],
            "91CA": [
                {
                    "sw1": "91",
                    "sw2": "CA",
                    "category": " ",
                    "description": "Previous Command was not fully completed"
                }
            ],
            "91CD": [
                {
                    "sw1": "91",
                    "sw2": "CD",
                    "category": " ",
                    "description": "PICC was disabled by an unrecoverable error"
                }
            ],
            "91CE": [
                {
                    "sw1": "91",
                    "sw2": "CE",
                    "category": " ",
                    "description": "Number of Applications limited to 28"
                }
            ],
            "91DE": [
                {
                    "sw1": "91",
                    "sw2": "DE",
                    "category": " ",
                    "description": "File or application already exists"
                }
            ],
            "91EE": [
                {
                    "sw1": "91",
                    "sw2": "EE",
                    "category": " ",
                    "description": "Could not complete NV-write operation due to loss of power"
                }
            ],
            "91F0": [
                {
                    "sw1": "91",
                    "sw2": "F0",
                    "category": " ",
                    "description": "Specified file number does not exist"
                }
            ],
            "91F1": [
                {
                    "sw1": "91",
                    "sw2": "F1",
                    "category": " ",
                    "description": "Unrecoverable error within file"
                }
            ],
            "920x": [
                {
                    "sw1": "92",
                    "sw2": "0x",
                    "category": "I",
                    "description": "Writing to EEPROM successful after \\x\\ attempts."
                }
            ],
            "9A00": [
                {
                    "sw1": "9A",
                    "sw2": "00",
                    "category": " ",
                    "description": "2 PIN try left"
                }
            ],
            "9A04": [
                {
                    "sw1": "9A",
                    "sw2": "04",
                    "category": " ",
                    "description": "PIN not succesfully verified, 2 PIN try left"
                }
            ],
            "9A71": [
                {
                    "sw1": "9A",
                    "sw2": "71",
                    "category": " ",
                    "description": "Wrong parameter value - Double agent AID"
                }
            ],
            "9A72": [
                {
                    "sw1": "9A",
                    "sw2": "72",
                    "category": " ",
                    "description": "Wrong parameter value - Double agent Type"
                }
            ],
            "9D05": [
                {
                    "sw1": "9D",
                    "sw2": "05",
                    "category": "E",
                    "description": "Incorrect certificate type"
                }
            ],
            "9D07": [
                {
                    "sw1": "9D",
                    "sw2": "07",
                    "category": "E",
                    "description": "Incorrect session data size"
                }
            ],
            "9D08": [
                {
                    "sw1": "9D",
                    "sw2": "08",
                    "category": "E",
                    "description": "Incorrect DIR file record size"
                }
            ],
            "9D09": [
                {
                    "sw1": "9D",
                    "sw2": "09",
                    "category": "E",
                    "description": "Incorrect FCI record size"
                }
            ],
            "9D0A": [
                {
                    "sw1": "9D",
                    "sw2": "0A",
                    "category": "E",
                    "description": "Incorrect code size"
                }
            ],
            "9D10": [
                {
                    "sw1": "9D",
                    "sw2": "10",
                    "category": "E",
                    "description": "Insufficient memory to load application"
                }
            ],
            "9D11": [
                {
                    "sw1": "9D",
                    "sw2": "11",
                    "category": "E",
                    "description": "Invalid AID"
                }
            ],
            "9D12": [
                {
                    "sw1": "9D",
                    "sw2": "12",
                    "category": "E",
                    "description": "Duplicate AID"
                }
            ],
            "9D13": [
                {
                    "sw1": "9D",
                    "sw2": "13",
                    "category": "E",
                    "description": "Application previously loaded"
                }
            ],
            "9D14": [
                {
                    "sw1": "9D",
                    "sw2": "14",
                    "category": "E",
                    "description": "Application history list full"
                }
            ],
            "9D15": [
                {
                    "sw1": "9D",
                    "sw2": "15",
                    "category": "E",
                    "description": "Application not open"
                }
            ],
            "9D17": [
                {
                    "sw1": "9D",
                    "sw2": "17",
                    "category": "E",
                    "description": "Invalid offset"
                }
            ],
            "9D18": [
                {
                    "sw1": "9D",
                    "sw2": "18",
                    "category": "E",
                    "description": "Application already loaded"
                }
            ],
            "9D19": [
                {
                    "sw1": "9D",
                    "sw2": "19",
                    "category": "E",
                    "description": "Invalid certificate"
                }
            ],
            "9D1A": [
                {
                    "sw1": "9D",
                    "sw2": "1A",
                    "category": "E",
                    "description": "Invalid signature"
                }
            ],
            "9D1B": [
                {
                    "sw1": "9D",
                    "sw2": "1B",
                    "category": "E",
                    "description": "Invalid KTU"
                }
            ],
            "9D1D": [
                {
                    "sw1": "9D",
                    "sw2": "1D",
                    "category": "E",
                    "description": "MSM controls not set"
                }
            ],
            "9D1E": [
                {
                    "sw1": "9D",
                    "sw2": "1E",
                    "category": "E",
                    "description": "Application signature does not exist"
                }
            ],
            "9D1F": [
                {
                    "sw1": "9D",
                    "sw2": "1F",
                    "category": "E",
                    "description": "KTU does not exist"
                }
            ],
            "9D20": [
                {
                    "sw1": "9D",
                    "sw2": "20",
                    "category": "E",
                    "description": "Application not loaded"
                }
            ],
            "9D21": [
                {
                    "sw1": "9D",
                    "sw2": "21",
                    "category": "E",
                    "description": "Invalid Open command data length"
                }
            ],
            "9D30": [
                {
                    "sw1": "9D",
                    "sw2": "30",
                    "category": "E",
                    "description": "Check data parameter is incorrect (invalid start address)"
                }
            ],
            "9D31": [
                {
                    "sw1": "9D",
                    "sw2": "31",
                    "category": "E",
                    "description": "Check data parameter is incorrect (invalid length)"
                }
            ],
            "9D32": [
                {
                    "sw1": "9D",
                    "sw2": "32",
                    "category": "E",
                    "description": "Check data parameter is incorrect (illegal memory check area)"
                }
            ],
            "9D40": [
                {
                    "sw1": "9D",
                    "sw2": "40",
                    "category": "E",
                    "description": "Invalid MSM Controls ciphertext"
                }
            ],
            "9D41": [
                {
                    "sw1": "9D",
                    "sw2": "41",
                    "category": "E",
                    "description": "MSM controls already set"
                }
            ],
            "9D42": [
                {
                    "sw1": "9D",
                    "sw2": "42",
                    "category": "E",
                    "description": "Set MSM Controls data length less than 2 bytes"
                }
            ],
            "9D43": [
                {
                    "sw1": "9D",
                    "sw2": "43",
                    "category": "E",
                    "description": "Invalid MSM Controls data length"
                }
            ],
            "9D44": [
                {
                    "sw1": "9D",
                    "sw2": "44",
                    "category": "E",
                    "description": "Excess MSM Controls ciphertext"
                }
            ],
            "9D45": [
                {
                    "sw1": "9D",
                    "sw2": "45",
                    "category": "E",
                    "description": "Verification of MSM Controls data failed"
                }
            ],
            "9D50": [
                {
                    "sw1": "9D",
                    "sw2": "50",
                    "category": "E",
                    "description": "Invalid MCD Issuer production ID"
                }
            ],
            "9D51": [
                {
                    "sw1": "9D",
                    "sw2": "51",
                    "category": "E",
                    "description": "Invalid MCD Issuer ID"
                }
            ],
            "9D52": [
                {
                    "sw1": "9D",
                    "sw2": "52",
                    "category": "E",
                    "description": "Invalid set MSM controls data date"
                }
            ],
            "9D53": [
                {
                    "sw1": "9D",
                    "sw2": "53",
                    "category": "E",
                    "description": "Invalid MCD number"
                }
            ],
            "9D54": [
                {
                    "sw1": "9D",
                    "sw2": "54",
                    "category": "E",
                    "description": "Reserved field error"
                }
            ],
            "9D55": [
                {
                    "sw1": "9D",
                    "sw2": "55",
                    "category": "E",
                    "description": "Reserved field error"
                }
            ],
            "9D56": [
                {
                    "sw1": "9D",
                    "sw2": "56",
                    "category": "E",
                    "description": "Reserved field error"
                }
            ],
            "9D57": [
                {
                    "sw1": "9D",
                    "sw2": "57",
                    "category": "E",
                    "description": "Reserved field error"
                }
            ],
            "9D60": [
                {
                    "sw1": "9D",
                    "sw2": "60",
                    "category": "E",
                    "description": "MAC verification failed"
                }
            ],
            "9D61": [
                {
                    "sw1": "9D",
                    "sw2": "61",
                    "category": "E",
                    "description": "Maximum number of unblocks reached"
                }
            ],
            "9D62": [
                {
                    "sw1": "9D",
                    "sw2": "62",
                    "category": "E",
                    "description": "Card was not blocked"
                }
            ],
            "9D63": [
                {
                    "sw1": "9D",
                    "sw2": "63",
                    "category": "E",
                    "description": "Crypto functions not available"
                }
            ],
            "9D64": [
                {
                    "sw1": "9D",
                    "sw2": "64",
                    "category": "E",
                    "description": "No application loaded"
                }
            ],
            "9E00": [
                {
                    "sw1": "9E",
                    "sw2": "00",
                    "category": " ",
                    "description": "PIN not installed"
                }
            ],
            "9E04": [
                {
                    "sw1": "9E",
                    "sw2": "04",
                    "category": " ",
                    "description": "PIN not succesfully verified, PIN not installed"
                }
            ],
            "9F00": [
                {
                    "sw1": "9F",
                    "sw2": "00",
                    "category": " ",
                    "description": "PIN blocked and Unblock Try Counter is 3"
                }
            ],
            "9F04": [
                {
                    "sw1": "9F",
                    "sw2": "04",
                    "category": " ",
                    "description": "PIN not succesfully verified, PIN blocked and Unblock Try Counter is 3"
                }
            ],
            "9FXX": [
                {
                    "sw1": "9F",
                    "sw2": "XX",
                    "category": " ",
                    "description": "Command successfully executed; \\xx\\ bytes of data are available and can be requested using GET RESPONSE."
                }
            ],
            "9XXX": [
                {
                    "sw1": "9X",
                    "sw2": "XX",
                    "category": " ",
                    "description": "Application related status, (ISO 7816-3)"
                }
            ]
        },
        formatRgx = /^(?:0x[a-f\d]{2} )*(?:0x[a-f\d]{2})$|^(?:[a-f\d]{2} )*(?:[a-f\d]{2})$|^(?:[a-f\d]{2})+$/gi;

    class ApduParser
    {
        static parseAPDU (apdu) {
	        let parsed = {apdu};

            if (!formatRgx.test(apdu)) {
                throw new SyntaxError('Unsupported APDU format or invalid APDU');
            }

            apdu = apdu.replace(/0x| /gi, '').replace(/([a-f\d]{2})/gi, '$1 ').trimRight();
            parsed.sanitizedAPDU = apdu;

            const
                notFound = obj => obj.details.length === 1 && obj.details[0].description === 'NOT FOUND',
                commands = ApduParser._parse_cmd(apdu);

            if (notFound(commands)) {
                const responses = ApduParser._parse_rsp(apdu);

                return Object.assign(parsed, notFound(responses) ? {type: 'UNKNOWN'} : {type: 'RESPONSE', responses});
            }

            return Object.assign(parsed, {type: 'COMMAND', commands});
        }

        static _parse_cmd (apdu) {
            const
                def = {name: '', description: 'NOT FOUND'},
                [cla, ins, p1, p2, ...bytes] = apdu.split(' '),
                cmd = {cla, ins, p1, p2, le: undefined, lc: undefined, data: undefined},
                len = bytes.length + 4;

            if (len === 5) {
                cmd.le = bytes[0];
            } else if (len > 5) {
                cmd.lc = bytes[0];
                const lcInt = parseInt(cmd.lc, 16);

                if (len > 5 + lcInt) {
                    cmd.le = bytes[1 + lcInt];
                    cmd.data = bytes.slice(1, -1);
                } else {
                    cmd.data = bytes.slice(1);
                }
            }

            cmd.details = commands[cmd.ins] || [def];

            return cmd;
        }

        static _parse_rsp (apdu) {
            const
                def = {category: '', description: 'NOT FOUND'},
                [sw1, sw2] = apdu.split(' '),
                code = sw1 + sw2,
                rsp = Object.keys(responses).reduce((p, c) => {
                    const rgx = new RegExp(c.replace(/X/gi, '[a-f\\d]'), 'i');

                    if (rgx.test(code)) {
                        p.details = p.details.concat(responses[c]);
                    }

                    return p;
                }, {sw1, sw2, details: []});

            return rsp.details.length ? rsp : Object.assign(rsp, {details: [def]});
        }
    }

    typeof exports !== 'undefined' ? module.exports = ApduParser.parseAPDU : window.parseAPDU = ApduParser.parseAPDU;
})();