let drops = [];


function populateMonsterDrops(monsterId) {
  //Iterate over the monster list and pass values for the boss drop table
  for (let i = 0; i < monsterList.length; i++) {
    var innerArray = monsterList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
      var loopMonsterId = monsterList[i]._items[z].id;
      if (monsterId == loopMonsterId) {
        var dropsArray = monsterList[i]._items[z].drops.length;
        for (var u = 0; u < dropsArray; u++) {
          var dropID = monsterList[i]._items[z].drops[u].id;
          var dropName = monsterList[i]._items[z].drops[u].name;
          var dropQuantity = monsterList[i]._items[z].drops[u].quantity;
          var dropRarity = monsterList[i]._items[z].drops[u].rarity;

          populateDropsArray(dropID, dropName, dropQuantity, dropRarity);
        }
      }
    }
  }
  //sort the drop array by item rarity descending
  drops.sort((a,b) => (a.dropRarity > b.dropRarity) ? -1: 1);
  console.log(drops);
}

//format drop values and push to the drops array
function populateDropsArray(dropID, dropName, dropQuantity, dropRarity){
  dropRarity = (dropRarity * 100);
  dropRarity = dropRarity.toFixed(2) + '%';
  // console.log(dropName);
  // console.log(dropRarity);

let drop = {
    'dropID': dropID,
    'dropName': dropName,
    'dropQuantity': dropQuantity,
    'dropRarity': dropRarity
  }
  drops.push(drop);
}

function createDropPanel(){
  //TODO - build template for the drops list to be populated.
}
