//Set an environment variable to append to the board name each time it runs
pm.environment.set("boardNumberAppended", getBoardNumberAppendedValue());

//Get the number to add to the board name
function getBoardNumberAppendedValue() {
    let boardNumberValue;
    //check if it has never been used, if not, set it to 1
    if (pm.environment.get("boardNumberAppended") == null) {
        boardNumberValue = 1;
        pm.environment.set("boardNumberAppended", boardNumberValue);
        return boardNumberValue;
        //if it has been increment the value
    } else {
        boardNumberValue = pm.environment.get("boardNumberAppended") + 1;
        pm.environment.set("boardNumberAppended", boardNumberValue);
        return boardNumberValue;
    }
}

//create the appeneded board name
pm.environment.set("boardName", createBoardName());

//add the board number to the board name
function createBoardName() {
    let createdBoardName = "My Board " + pm.environment.get("boardNumberAppended");
    return createdBoardName;
}

