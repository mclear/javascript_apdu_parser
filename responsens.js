((responses) => {
    if ('window' in globalThis) {
        window.parseAPDU = window.parseAPDU || {};
        window.parseAPDU.responses = responses;
    } else {
        module.exports = responses;
    }
})([
    {
        "SW1": "06",
        "SW2": "",
        "type": "E",
        "description": "Class not supported."
    },
    {
        "SW1": "61",
        "SW2": "--",
        "type": "I",
        "description": "Response bytes still available"
    },
    {
        "SW1": "61",
        "SW2": "XX",
        "type": "I",
        "description": "Command successfully executed; \\XX\\ bytes of data are available and can be requested using GET RESPONSE."
    },
    {
        "SW1": "62",
        "SW2": "--",
        "type": "W",
        "description": "State of non-volatile memory unchanged"
    },
    {
        "SW1": "62",
        "SW2": "00",
        "type": "W",
        "description": "No information given (NV-Ram not changed)"
    },
    {
        "SW1": "62",
        "SW2": "01",
        "type": "W",
        "description": "NV-Ram not changed 1."
    },
    {
        "SW1": "62",
        "SW2": "81",
        "type": "W",
        "description": "Part of returned data may be corrupted"
    },
    {
        "SW1": "62",
        "SW2": "82",
        "type": "W",
        "description": "End of file/record reached before reading Le bytes"
    },
    {
        "SW1": "62",
        "SW2": "83",
        "type": "W",
        "description": "Selected file invalidated"
    },
    {
        "SW1": "62",
        "SW2": "84",
        "type": "W",
        "description": "Selected file is not valid. FCI not formated according to ISO"
    },
    {
        "SW1": "62",
        "SW2": "85",
        "type": "W",
        "description": "No input data available from a sensor on the card. No Purse Engine enslaved for R3bc"
    },
    {
        "SW1": "62",
        "SW2": "A2",
        "type": "W",
        "description": "Wrong R-MAC"
    },
    {
        "SW1": "62",
        "SW2": "A4",
        "type": "W",
        "description": "Card locked (during reset( ))"
    },
    {
        "SW1": "62",
        "SW2": "CX",
        "type": "W",
        "description": "Counter with value x (command dependent)"
    },
    {
        "SW1": "62",
        "SW2": "F1",
        "type": "W",
        "description": "Wrong C-MAC"
    },
    {
        "SW1": "62",
        "SW2": "F3",
        "type": "W",
        "description": "Internal reset"
    },
    {
        "SW1": "62",
        "SW2": "F5",
        "type": "W",
        "description": "Default agent locked"
    },
    {
        "SW1": "62",
        "SW2": "F7",
        "type": "W",
        "description": "Cardholder locked"
    },
    {
        "SW1": "62",
        "SW2": "F8",
        "type": "W",
        "description": "Basement is current agent"
    },
    {
        "SW1": "62",
        "SW2": "F9",
        "type": "W",
        "description": "CALC Key Set not unblocked"
    },
    {
        "SW1": "62",
        "SW2": "FX",
        "type": "W",
        "description": "No Description Available"
    },
    {
        "SW1": "62",
        "SW2": "XX",
        "type": "W",
        "description": "RFU"
    },
    {
        "SW1": "63",
        "SW2": "--",
        "type": "W",
        "description": "State of non-volatile memory changed"
    },
    {
        "SW1": "63",
        "SW2": "00",
        "type": "W",
        "description": "No information given (NV-Ram changed)"
    },
    {
        "SW1": "63",
        "SW2": "81",
        "type": "W",
        "description": "File filled up by the last write. Loading/updating is not allowed."
    },
    {
        "SW1": "63",
        "SW2": "82",
        "type": "W",
        "description": "Card key not supported."
    },
    {
        "SW1": "63",
        "SW2": "83",
        "type": "W",
        "description": "Reader key not supported."
    },
    {
        "SW1": "63",
        "SW2": "84",
        "type": "W",
        "description": "Plaintext transmission not supported."
    },
    {
        "SW1": "63",
        "SW2": "85",
        "type": "W",
        "description": "Secured transmission not supported."
    },
    {
        "SW1": "63",
        "SW2": "86",
        "type": "W",
        "description": "Volatile memory is not available."
    },
    {
        "SW1": "63",
        "SW2": "87",
        "type": "W",
        "description": "Non-volatile memory is not available."
    },
    {
        "SW1": "63",
        "SW2": "88",
        "type": "W",
        "description": "Key number not valid."
    },
    {
        "SW1": "63",
        "SW2": "89",
        "type": "W",
        "description": "Key length is not correct."
    },
    {
        "SW1": "63",
        "SW2": "C0",
        "type": "W",
        "description": "Verify fail, no try left."
    },
    {
        "SW1": "63",
        "SW2": "C1",
        "type": "W",
        "description": "Verify fail, 1 try left."
    },
    {
        "SW1": "63",
        "SW2": "C2",
        "type": "W",
        "description": "Verify fail, 2 tries left."
    },
    {
        "SW1": "63",
        "SW2": "C3",
        "type": "W",
        "description": "Verify fail, 3 tries left."
    },
    {
        "SW1": "63",
        "SW2": "CX",
        "type": "W",
        "description": "The counter has reached the value \\x\\ (0 = x = 15) (command dependent)."
    },
    {
        "SW1": "63",
        "SW2": "F1",
        "type": "W",
        "description": "More data expected."
    },
    {
        "SW1": "63",
        "SW2": "F2",
        "type": "W",
        "description": "More data expected and proactive command pending."
    },
    {
        "SW1": "63",
        "SW2": "FX",
        "type": "W",
        "description": "No Description Available"
    },
    {
        "SW1": "63",
        "SW2": "XX",
        "type": "W",
        "description": "RFU"
    },
    {
        "SW1": "64",
        "SW2": "--",
        "type": "E",
        "description": "State of non-volatile memory unchanged"
    },
    {
        "SW1": "64",
        "SW2": "00",
        "type": "E",
        "description": "No information given (NV-Ram not changed)"
    },
    {
        "SW1": "64",
        "SW2": "01",
        "type": "E",
        "description": "Command timeout. Immediate response required by the card."
    },
    {
        "SW1": "64",
        "SW2": "XX",
        "type": "E",
        "description": "RFU"
    },
    {
        "SW1": "65",
        "SW2": "--",
        "type": "E",
        "description": "State of non-volatile memory changed"
    },
    {
        "SW1": "65",
        "SW2": "00",
        "type": "E",
        "description": "No information given"
    },
    {
        "SW1": "65",
        "SW2": "01",
        "type": "E",
        "description": "Write error. Memory failure. There have been problems in writing or reading the EEPROM. Other hardware problems may also bring this error."
    },
    {
        "SW1": "65",
        "SW2": "81",
        "type": "E",
        "description": "Memory failure"
    },
    {
        "SW1": "65",
        "SW2": "FX",
        "type": "E",
        "description": "No Description Available"
    },
    {
        "SW1": "65",
        "SW2": "XX",
        "type": "E",
        "description": "RFU"
    },
    {
        "SW1": "66",
        "SW2": "--",
        "type": "S",
        "description": " "
    },
    {
        "SW1": "66",
        "SW2": "00",
        "type": "S",
        "description": "Error while receiving (timeout)"
    },
    {
        "SW1": "66",
        "SW2": "01",
        "type": "S",
        "description": "Error while receiving (character parity error)"
    },
    {
        "SW1": "66",
        "SW2": "02",
        "type": "S",
        "description": "Wrong checksum"
    },
    {
        "SW1": "66",
        "SW2": "03",
        "type": "S",
        "description": "The current DF file without FCI"
    },
    {
        "SW1": "66",
        "SW2": "04",
        "type": "S",
        "description": "No SF or KF under the current DF"
    },
    {
        "SW1": "66",
        "SW2": "69",
        "type": "S",
        "description": "Incorrect Encryption/Decryption Padding"
    },
    {
        "SW1": "66",
        "SW2": "XX",
        "type": "S",
        "description": "No Description Available"
    },
    {
        "SW1": "67",
        "SW2": "--",
        "type": "E",
        "description": " "
    },
    {
        "SW1": "67",
        "SW2": "00",
        "type": "E",
        "description": "Wrong length"
    },
    {
        "SW1": "67",
        "SW2": "XX",
        "type": "E",
        "description": "length incorrect (procedure)(ISO 7816-3)"
    },
    {
        "SW1": "68",
        "SW2": "--",
        "type": "E",
        "description": "Functions in CLA not supported"
    },
    {
        "SW1": "68",
        "SW2": "00",
        "type": "E",
        "description": "No information given (The request function is not supported by the card)"
    },
    {
        "SW1": "68",
        "SW2": "81",
        "type": "E",
        "description": "Logical channel not supported"
    },
    {
        "SW1": "68",
        "SW2": "82",
        "type": "E",
        "description": "Secure messaging not supported"
    },
    {
        "SW1": "68",
        "SW2": "83",
        "type": "E",
        "description": "Last command of the chain expected"
    },
    {
        "SW1": "68",
        "SW2": "84",
        "type": "E",
        "description": "Command chaining not supported"
    },
    {
        "SW1": "68",
        "SW2": "FX",
        "type": "E",
        "description": "No Description Available"
    },
    {
        "SW1": "68",
        "SW2": "XX",
        "type": "E",
        "description": "RFU"
    },
    {
        "SW1": "69",
        "SW2": "--",
        "type": "E",
        "description": "Command not allowed"
    },
    {
        "SW1": "69",
        "SW2": "00",
        "type": "E",
        "description": "No information given (Command not allowed)"
    },
    {
        "SW1": "69",
        "SW2": "01",
        "type": "E",
        "description": "Command not accepted (inactive state)"
    },
    {
        "SW1": "69",
        "SW2": "81",
        "type": "E",
        "description": "Command incompatible with file structure"
    },
    {
        "SW1": "69",
        "SW2": "82",
        "type": "E",
        "description": "Security condition not satisfied."
    },
    {
        "SW1": "69",
        "SW2": "83",
        "type": "E",
        "description": "Authentication method blocked"
    },
    {
        "SW1": "69",
        "SW2": "84",
        "type": "E",
        "description": "Referenced data reversibly blocked (invalidated)"
    },
    {
        "SW1": "69",
        "SW2": "85",
        "type": "E",
        "description": "Conditions of use not satisfied."
    },
    {
        "SW1": "69",
        "SW2": "86",
        "type": "E",
        "description": "Command not allowed (no current EF)"
    },
    {
        "SW1": "69",
        "SW2": "87",
        "type": "E",
        "description": "Expected secure messaging (SM) object missing"
    },
    {
        "SW1": "69",
        "SW2": "88",
        "type": "E",
        "description": "Incorrect secure messaging (SM) data object"
    },
    {
        "SW1": "69",
        "SW2": "8D",
        "type": " ",
        "description": "Reserved"
    },
    {
        "SW1": "69",
        "SW2": "96",
        "type": "E",
        "description": "Data must be updated again"
    },
    {
        "SW1": "69",
        "SW2": "E1",
        "type": "E",
        "description": "POL1 of the currently Enabled Profile prevents this action."
    },
    {
        "SW1": "69",
        "SW2": "F0",
        "type": "E",
        "description": "Permission Denied"
    },
    {
        "SW1": "69",
        "SW2": "F1",
        "type": "E",
        "description": "Permission Denied - Missing Privilege"
    },
    {
        "SW1": "69",
        "SW2": "FX",
        "type": "E",
        "description": "No Description Available"
    },
    {
        "SW1": "69",
        "SW2": "XX",
        "type": "E",
        "description": "RFU"
    },
    {
        "SW1": "6A",
        "SW2": "--",
        "type": "E",
        "description": "Wrong parameter(s) P1-P2"
    },
    {
        "SW1": "6A",
        "SW2": "00",
        "type": "E",
        "description": "No information given (Bytes P1 and/or P2 are incorrect)"
    },
    {
        "SW1": "6A",
        "SW2": "80",
        "type": "E",
        "description": "The parameters in the data field are incorrect."
    },
    {
        "SW1": "6A",
        "SW2": "81",
        "type": "E",
        "description": "Function not supported"
    },
    {
        "SW1": "6A",
        "SW2": "82",
        "type": "E",
        "description": "File not found"
    },
    {
        "SW1": "6A",
        "SW2": "83",
        "type": "E",
        "description": "Record not found"
    },
    {
        "SW1": "6A",
        "SW2": "84",
        "type": "E",
        "description": "There is insufficient memory space in record or file"
    },
    {
        "SW1": "6A",
        "SW2": "85",
        "type": "E",
        "description": "Lc inconsistent with TLV structure"
    },
    {
        "SW1": "6A",
        "SW2": "86",
        "type": "E",
        "description": "Incorrect P1 or P2 parameter."
    },
    {
        "SW1": "6A",
        "SW2": "87",
        "type": "E",
        "description": "Lc inconsistent with P1-P2"
    },
    {
        "SW1": "6A",
        "SW2": "88",
        "type": "E",
        "description": "Referenced data not found"
    },
    {
        "SW1": "6A",
        "SW2": "89",
        "type": "E",
        "description": "File already exists"
    },
    {
        "SW1": "6A",
        "SW2": "8A",
        "type": "E",
        "description": "DF name already exists."
    },
    {
        "SW1": "6A",
        "SW2": "F0",
        "type": "E",
        "description": "Wrong parameter value"
    },
    {
        "SW1": "6A",
        "SW2": "FX",
        "type": "E",
        "description": "No Description Available"
    },
    {
        "SW1": "6A",
        "SW2": "XX",
        "type": "E",
        "description": "RFU"
    },
    {
        "SW1": "6B",
        "SW2": "--",
        "type": "E",
        "description": " "
    },
    {
        "SW1": "6B",
        "SW2": "00",
        "type": "E",
        "description": "Wrong parameter(s) P1-P2"
    },
    {
        "SW1": "6B",
        "SW2": "XX",
        "type": "E",
        "description": "Reference incorrect (procedure byte), (ISO 7816-3)"
    },
    {
        "SW1": "6C",
        "SW2": "--",
        "type": "E",
        "description": "Wrong length Le"
    },
    {
        "SW1": "6C",
        "SW2": "00",
        "type": "E",
        "description": "Incorrect P3 length."
    },
    {
        "SW1": "6C",
        "SW2": "XX",
        "type": "E",
        "description": "Bad length value in Le; \\xx\\ is the correct exact Le"
    },
    {
        "SW1": "6D",
        "SW2": "--",
        "type": "E",
        "description": " "
    },
    {
        "SW1": "6D",
        "SW2": "00",
        "type": "E",
        "description": "Instruction code not supported or invalid"
    },
    {
        "SW1": "6D",
        "SW2": "XX",
        "type": "E",
        "description": "Instruction code not programmed or invalid (procedure byte), (ISO 7816-3)"
    },
    {
        "SW1": "6E",
        "SW2": "--",
        "type": "E",
        "description": " "
    },
    {
        "SW1": "6E",
        "SW2": "00",
        "type": "E",
        "description": "Class not supported"
    },
    {
        "SW1": "6E",
        "SW2": "XX",
        "type": "E",
        "description": "Instruction class not supported (procedure byte), (ISO 7816-3)"
    },
    {
        "SW1": "6F",
        "SW2": "--",
        "type": "E",
        "description": "Internal exception"
    },
    {
        "SW1": "6F",
        "SW2": "00",
        "type": "E",
        "description": "Command aborted - more exact diagnosis not possible (e.g., operating system error)."
    },
    {
        "SW1": "6F",
        "SW2": "FF",
        "type": "E",
        "description": "Card dead (overuse, ...)"
    },
    {
        "SW1": "6F",
        "SW2": "XX",
        "type": "E",
        "description": "No precise diagnosis (procedure byte), (ISO 7816-3)"
    },
    {
        "SW1": "9-",
        "SW2": "--",
        "type": " ",
        "description": " "
    },
    {
        "SW1": "90",
        "SW2": "00",
        "type": "I",
        "description": "Command successfully executed (OK)."
    },
    {
        "SW1": "90",
        "SW2": "04",
        "type": "W",
        "description": "PIN not succesfully verified, 3 or more PIN tries left"
    },
    {
        "SW1": "90",
        "SW2": "08",
        "type": " ",
        "description": "Key/file not found"
    },
    {
        "SW1": "90",
        "SW2": "80",
        "type": "W",
        "description": "Unblock Try Counter has reached zero"
    },
    {
        "SW1": "91",
        "SW2": "00",
        "type": " ",
        "description": "OK"
    },
    {
        "SW1": "91",
        "SW2": "01",
        "type": " ",
        "description": "States.activity, States.lock Status or States.lockable has wrong value"
    },
    {
        "SW1": "91",
        "SW2": "02",
        "type": " ",
        "description": "Transaction number reached its limit"
    },
    {
        "SW1": "91",
        "SW2": "0C",
        "type": " ",
        "description": "No changes"
    },
    {
        "SW1": "91",
        "SW2": "0E",
        "type": " ",
        "description": "Insufficient NV-Memory to complete command"
    },
    {
        "SW1": "91",
        "SW2": "1C",
        "type": " ",
        "description": "Command code not supported"
    },
    {
        "SW1": "91",
        "SW2": "1E",
        "type": " ",
        "description": "CRC or MAC does not match data"
    },
    {
        "SW1": "91",
        "SW2": "40",
        "type": " ",
        "description": "Invalid key number specified"
    },
    {
        "SW1": "91",
        "SW2": "7E",
        "type": " ",
        "description": "Length of command string invalid"
    },
    {
        "SW1": "91",
        "SW2": "9D",
        "type": " ",
        "description": "Not allow the requested command"
    },
    {
        "SW1": "91",
        "SW2": "9E",
        "type": " ",
        "description": "Value of the parameter invalid"
    },
    {
        "SW1": "91",
        "SW2": "A0",
        "type": " ",
        "description": "Requested AID not present on PICC"
    },
    {
        "SW1": "91",
        "SW2": "A1",
        "type": " ",
        "description": "Unrecoverable error within application"
    },
    {
        "SW1": "91",
        "SW2": "AE",
        "type": " ",
        "description": "Authentication status does not allow the requested command"
    },
    {
        "SW1": "91",
        "SW2": "AF",
        "type": " ",
        "description": "Additional data frame is expected to be sent"
    },
    {
        "SW1": "91",
        "SW2": "BE",
        "type": " ",
        "description": "Out of boundary"
    },
    {
        "SW1": "91",
        "SW2": "C1",
        "type": " ",
        "description": "Unrecoverable error within PICC"
    },
    {
        "SW1": "91",
        "SW2": "CA",
        "type": " ",
        "description": "Previous Command was not fully completed"
    },
    {
        "SW1": "91",
        "SW2": "CD",
        "type": " ",
        "description": "PICC was disabled by an unrecoverable error"
    },
    {
        "SW1": "91",
        "SW2": "CE",
        "type": " ",
        "description": "Number of Applications limited to 28"
    },
    {
        "SW1": "91",
        "SW2": "DE",
        "type": " ",
        "description": "File or application already exists"
    },
    {
        "SW1": "91",
        "SW2": "EE",
        "type": " ",
        "description": "Could not complete NV-write operation due to loss of power"
    },
    {
        "SW1": "91",
        "SW2": "F0",
        "type": " ",
        "description": "Specified file number does not exist"
    },
    {
        "SW1": "91",
        "SW2": "F1",
        "type": " ",
        "description": "Unrecoverable error within file"
    },
    {
        "SW1": "92",
        "SW2": "0x",
        "type": "I",
        "description": "Writing to EEPROM successful after \\x\\ attempts."
    },
    {
        "SW1": "92",
        "SW2": "10",
        "type": "E",
        "description": "Insufficient memory. No more storage available."
    },
    {
        "SW1": "92",
        "SW2": "40",
        "type": "E",
        "description": "Writing to EEPROM not successful."
    },
    {
        "SW1": "93",
        "SW2": "01",
        "type": " ",
        "description": "Integrity error"
    },
    {
        "SW1": "93",
        "SW2": "02",
        "type": " ",
        "description": "Candidate S2 invalid"
    },
    {
        "SW1": "93",
        "SW2": "03",
        "type": "E",
        "description": "Application is permanently locked"
    },
    {
        "SW1": "94",
        "SW2": "00",
        "type": "E",
        "description": "No EF selected."
    },
    {
        "SW1": "94",
        "SW2": "01",
        "type": " ",
        "description": "Candidate currency code does not match purse currency"
    },
    {
        "SW1": "94",
        "SW2": "02",
        "type": " ",
        "description": "Candidate amount too high"
    },
    {
        "SW1": "94",
        "SW2": "02",
        "type": "E",
        "description": "Address range exceeded."
    },
    {
        "SW1": "94",
        "SW2": "03",
        "type": " ",
        "description": "Candidate amount too low"
    },
    {
        "SW1": "94",
        "SW2": "04",
        "type": "E",
        "description": "FID not found, record not found or comparison pattern not found."
    },
    {
        "SW1": "94",
        "SW2": "05",
        "type": " ",
        "description": "Problems in the data field"
    },
    {
        "SW1": "94",
        "SW2": "SW1",
        "type": "E",
        "description": "Required MAC unavailable"
    },
    {
        "SW1": "94",
        "SW2": "07",
        "type": " ",
        "description": "Bad currency : purse engine has no slot with R3bc currency"
    },
    {
        "SW1": "94",
        "SW2": "08",
        "type": " ",
        "description": "R3bc currency not supported in purse engine"
    },
    {
        "SW1": "94",
        "SW2": "08",
        "type": "E",
        "description": "Selected file type does not match command."
    },
    {
        "SW1": "95",
        "SW2": "80",
        "type": " ",
        "description": "Bad sequence"
    },
    {
        "SW1": "96",
        "SW2": "81",
        "type": " ",
        "description": "Slave not found"
    },
    {
        "SW1": "97",
        "SW2": "00",
        "type": " ",
        "description": "PIN blocked and Unblock Try Counter is 1 or 2"
    },
    {
        "SW1": "97",
        "SW2": "02",
        "type": " ",
        "description": "Main keys are blocked"
    },
    {
        "SW1": "97",
        "SW2": "04",
        "type": " ",
        "description": "PIN not succesfully verified, 3 or more PIN tries left"
    },
    {
        "SW1": "97",
        "SW2": "84",
        "type": " ",
        "description": "Base key"
    },
    {
        "SW1": "97",
        "SW2": "85",
        "type": " ",
        "description": "Limit exceeded - C-MAC key"
    },
    {
        "SW1": "97",
        "SW2": "86",
        "type": " ",
        "description": "SM error - Limit exceeded - R-MAC key"
    },
    {
        "SW1": "97",
        "SW2": "87",
        "type": " ",
        "description": "Limit exceeded - sequence counter"
    },
    {
        "SW1": "97",
        "SW2": "88",
        "type": " ",
        "description": "Limit exceeded - R-MAC length"
    },
    {
        "SW1": "97",
        "SW2": "89",
        "type": " ",
        "description": "Service not available"
    },
    {
        "SW1": "98",
        "SW2": "02",
        "type": "E",
        "description": "No PIN defined."
    },
    {
        "SW1": "98",
        "SW2": "04",
        "type": "E",
        "description": "Access conditions not satisfied, authentication failed."
    },
    {
        "SW1": "98",
        "SW2": "35",
        "type": "E",
        "description": "ASK RANDOM or GIVE RANDOM not executed."
    },
    {
        "SW1": "98",
        "SW2": "40",
        "type": "E",
        "description": "PIN verification not successful."
    },
    {
        "SW1": "98",
        "SW2": "50",
        "type": "E",
        "description": "INCREASE or DECREASE could not be executed because a limit has been reached."
    },
    {
        "SW1": "98",
        "SW2": "62",
        "type": "E",
        "description": "Authentication Error, application specific (incorrect MAC)"
    },
    {
        "SW1": "99",
        "SW2": "00",
        "type": " ",
        "description": "1 PIN try left"
    },
    {
        "SW1": "99",
        "SW2": "04",
        "type": " ",
        "description": "PIN not succesfully verified, 1 PIN try left"
    },
    {
        "SW1": "99",
        "SW2": "85",
        "type": " ",
        "description": "Wrong status - Cardholder lock"
    },
    {
        "SW1": "99",
        "SW2": "86",
        "type": "E",
        "description": "Missing privilege"
    },
    {
        "SW1": "99",
        "SW2": "87",
        "type": " ",
        "description": "PIN is not installed"
    },
    {
        "SW1": "99",
        "SW2": "88",
        "type": " ",
        "description": "Wrong status - R-MAC state"
    },
    {
        "SW1": "9A",
        "SW2": "00",
        "type": " ",
        "description": "2 PIN try left"
    },
    {
        "SW1": "9A",
        "SW2": "04",
        "type": " ",
        "description": "PIN not succesfully verified, 2 PIN try left"
    },
    {
        "SW1": "9A",
        "SW2": "71",
        "type": " ",
        "description": "Wrong parameter value - Double agent AID"
    },
    {
        "SW1": "9A",
        "SW2": "72",
        "type": " ",
        "description": "Wrong parameter value - Double agent Type"
    },
    {
        "SW1": "9D",
        "SW2": "05",
        "type": "E",
        "description": "Incorrect certificate type"
    },
    {
        "SW1": "9D",
        "SW2": "07",
        "type": "E",
        "description": "Incorrect session data size"
    },
    {
        "SW1": "9D",
        "SW2": "08",
        "type": "E",
        "description": "Incorrect DIR file record size"
    },
    {
        "SW1": "9D",
        "SW2": "09",
        "type": "E",
        "description": "Incorrect FCI record size"
    },
    {
        "SW1": "9D",
        "SW2": "0A",
        "type": "E",
        "description": "Incorrect code size"
    },
    {
        "SW1": "9D",
        "SW2": "10",
        "type": "E",
        "description": "Insufficient memory to load application"
    },
    {
        "SW1": "9D",
        "SW2": "11",
        "type": "E",
        "description": "Invalid AID"
    },
    {
        "SW1": "9D",
        "SW2": "12",
        "type": "E",
        "description": "Duplicate AID"
    },
    {
        "SW1": "9D",
        "SW2": "13",
        "type": "E",
        "description": "Application previously loaded"
    },
    {
        "SW1": "9D",
        "SW2": "14",
        "type": "E",
        "description": "Application history list full"
    },
    {
        "SW1": "9D",
        "SW2": "15",
        "type": "E",
        "description": "Application not open"
    },
    {
        "SW1": "9D",
        "SW2": "17",
        "type": "E",
        "description": "Invalid offset"
    },
    {
        "SW1": "9D",
        "SW2": "18",
        "type": "E",
        "description": "Application already loaded"
    },
    {
        "SW1": "9D",
        "SW2": "19",
        "type": "E",
        "description": "Invalid certificate"
    },
    {
        "SW1": "9D",
        "SW2": "1A",
        "type": "E",
        "description": "Invalid signature"
    },
    {
        "SW1": "9D",
        "SW2": "1B",
        "type": "E",
        "description": "Invalid KTU"
    },
    {
        "SW1": "9D",
        "SW2": "1D",
        "type": "E",
        "description": "MSM controls not set"
    },
    {
        "SW1": "9D",
        "SW2": "1E",
        "type": "E",
        "description": "Application signature does not exist"
    },
    {
        "SW1": "9D",
        "SW2": "1F",
        "type": "E",
        "description": "KTU does not exist"
    },
    {
        "SW1": "9D",
        "SW2": "20",
        "type": "E",
        "description": "Application not loaded"
    },
    {
        "SW1": "9D",
        "SW2": "21",
        "type": "E",
        "description": "Invalid Open command data length"
    },
    {
        "SW1": "9D",
        "SW2": "30",
        "type": "E",
        "description": "Check data parameter is incorrect (invalid start address)"
    },
    {
        "SW1": "9D",
        "SW2": "31",
        "type": "E",
        "description": "Check data parameter is incorrect (invalid length)"
    },
    {
        "SW1": "9D",
        "SW2": "32",
        "type": "E",
        "description": "Check data parameter is incorrect (illegal memory check area)"
    },
    {
        "SW1": "9D",
        "SW2": "40",
        "type": "E",
        "description": "Invalid MSM Controls ciphertext"
    },
    {
        "SW1": "9D",
        "SW2": "41",
        "type": "E",
        "description": "MSM controls already set"
    },
    {
        "SW1": "9D",
        "SW2": "42",
        "type": "E",
        "description": "Set MSM Controls data length less than 2 bytes"
    },
    {
        "SW1": "9D",
        "SW2": "43",
        "type": "E",
        "description": "Invalid MSM Controls data length"
    },
    {
        "SW1": "9D",
        "SW2": "44",
        "type": "E",
        "description": "Excess MSM Controls ciphertext"
    },
    {
        "SW1": "9D",
        "SW2": "45",
        "type": "E",
        "description": "Verification of MSM Controls data failed"
    },
    {
        "SW1": "9D",
        "SW2": "50",
        "type": "E",
        "description": "Invalid MCD Issuer production ID"
    },
    {
        "SW1": "9D",
        "SW2": "51",
        "type": "E",
        "description": "Invalid MCD Issuer ID"
    },
    {
        "SW1": "9D",
        "SW2": "52",
        "type": "E",
        "description": "Invalid set MSM controls data date"
    },
    {
        "SW1": "9D",
        "SW2": "53",
        "type": "E",
        "description": "Invalid MCD number"
    },
    {
        "SW1": "9D",
        "SW2": "54",
        "type": "E",
        "description": "Reserved field error"
    },
    {
        "SW1": "9D",
        "SW2": "55",
        "type": "E",
        "description": "Reserved field error"
    },
    {
        "SW1": "9D",
        "SW2": "56",
        "type": "E",
        "description": "Reserved field error"
    },
    {
        "SW1": "9D",
        "SW2": "57",
        "type": "E",
        "description": "Reserved field error"
    },
    {
        "SW1": "9D",
        "SW2": "60",
        "type": "E",
        "description": "MAC verification failed"
    },
    {
        "SW1": "9D",
        "SW2": "61",
        "type": "E",
        "description": "Maximum number of unblocks reached"
    },
    {
        "SW1": "9D",
        "SW2": "62",
        "type": "E",
        "description": "Card was not blocked"
    },
    {
        "SW1": "9D",
        "SW2": "63",
        "type": "E",
        "description": "Crypto functions not available"
    },
    {
        "SW1": "9D",
        "SW2": "64",
        "type": "E",
        "description": "No application loaded"
    },
    {
        "SW1": "9E",
        "SW2": "00",
        "type": " ",
        "description": "PIN not installed"
    },
    {
        "SW1": "9E",
        "SW2": "04",
        "type": " ",
        "description": "PIN not succesfully verified, PIN not installed"
    },
    {
        "SW1": "9F",
        "SW2": "00",
        "type": " ",
        "description": "PIN blocked and Unblock Try Counter is 3"
    },
    {
        "SW1": "9F",
        "SW2": "04",
        "type": " ",
        "description": "PIN not succesfully verified, PIN blocked and Unblock Try Counter is 3"
    },
    {
        "SW1": "9F",
        "SW2": "XX",
        "type": " ",
        "description": "Command successfully executed; \\xx\\ bytes of data are available and can be requested using GET RESPONSE."
    },
    {
        "SW1": "9x",
        "SW2": "XX",
        "type": " ",
        "description": "Application related status, (ISO 7816-3)"
    }
]);