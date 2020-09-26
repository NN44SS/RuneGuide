//Matches id's from int array(intsToRemove) to a list of obects and removes them.
function listCustomRemoves(intsToRemove, listToFilter){
  for (let i = 0; i < listToFilter.length; i++) {
    var innerArray = listToFilter[i]._items.length;
    for (var z = innerArray - 1; z >= 0; z--) {
      var objectId = listToFilter[i]._items[z].id;
      var objectName = listToFilter[i]._items[z].name;
      for (let x = 0; x < intsToRemove.length; x++){
        var targetInt = intsToRemove[x]
        if (targetInt == objectId) {
          listToFilter[i]._items.splice(z, 1);
          continue;
        }
      }
    }
  }
}

function checkforUndefined(value){
  if (value === undefined){
    value = 0;
  }
  return value;
}

function addOperatorToNumber(value){
  if (value > 0){
    value = "+" + value;
  }
  return value;
}

function colorData(value){
  var returnColor;
  if (value > 0){
    returnColor = "green";
  }else if (value < 0) {
    returnColor = "red";
  }else {
    returnColor = "white";
  }
  return returnColor;
}
