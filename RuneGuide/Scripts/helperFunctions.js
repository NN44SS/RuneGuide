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
