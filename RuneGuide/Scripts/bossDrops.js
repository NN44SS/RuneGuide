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
  drops.sort((a, b) => (a.dropRarity) - (b.dropRarity));
  createDropPanel();
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
  var bossDropSection = document.getElementById('bossDropWraper');
  var bossDropHeader = document.getElementById('bossDropHeader');
  bossDropHeader.style.display = 'block';


  for(let drop of drops){
    //Create the row container to hold drop info divs
    var bossDropRowWrapper = document.createElement('div');
    bossDropRowWrapper.setAttribute('class', 'bossDropRow');

    //Item img
    var bossDropImgContainer = document.createElement('div');
    bossDropImgContainer.setAttribute('class', 'bossDropImgContainer');
    var dropImg = document.createElement('img');
    dropImg.setAttribute('class', 'bossDropDataTxt');
    dropImg.src = "https://www.osrsbox.com/osrsbox-db/items-icons/"+ drop.dropID +".png";
    bossDropImgContainer.appendChild(dropImg);

    //Item Name span
    var bossDropNameContainer = document.createElement('div');
    bossDropNameContainer.setAttribute('class', 'bossDropNameContainer');
    var bossDropName = document.createElement('span');
    bossDropName.setAttribute('class', 'bossDropDataTxt');
    bossDropName.innerHTML = drop.dropName;
    bossDropNameContainer.appendChild(bossDropName);

    //Item quantity span
    var bossDropQuantityContainer = document.createElement('div');
    bossDropQuantityContainer.setAttribute('class', 'bossDropQuantityContainer');
    var bossDropQuantity = document.createElement('span');
    bossDropQuantity.setAttribute('class', 'bossDropDataTxt');
    bossDropQuantity.innerHTML = drop.dropQuantity;
    bossDropQuantityContainer.appendChild(bossDropQuantity);

    //Item rarity span
    var bossDropRarityContainer = document.createElement('div');
    bossDropRarityContainer.setAttribute('class', 'bossDropRarityContainer');
    var bossDropRarity = document.createElement('span');
    bossDropRarity.setAttribute('class', 'bossDropDataTxt');
    bossDropRarity.innerHTML = drop.dropRarity;
    bossDropRarityContainer.appendChild(bossDropRarity);

    //Append properties to row wrapper then append that to the DOM 'bossDropWraper'
    bossDropRowWrapper.appendChild(bossDropImgContainer);
    bossDropRowWrapper.appendChild(bossDropNameContainer);
    bossDropRowWrapper.appendChild(bossDropQuantityContainer);
    bossDropRowWrapper.appendChild(bossDropRarityContainer);
    bossDropSection.appendChild(bossDropRowWrapper);


    // console.log(drop.dropID);
  }
}


// var requestDropIcon = async (id) => {

//   let url = 'https://api.osrsbox.com/icons_items?where={"id":'+ id +'}';
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
//   requestDropIcon(drop.dropID).then(data => console.log(data));
//   // console.log(data);
// }
