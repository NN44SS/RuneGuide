var armourItemList = [];
var weaponItemList = [];
var itemList = [];

//Request for Armour Items
var requestArmourItems = async (page) => {
  let url = 'https://api.osrsbox.com/equipment?where={"equipable":true , "equipable_weapon": false, "duplicate": false}&page=' + page;
  const res = await fetch(url);
  const data = await res.json();
  armourItemList.push(data);
  // console.log(data);
}
//Request for Weapon items
var requestWeaponItems = async (page) => {
  let url = 'https://api.osrsbox.com/items?where={"equipable_weapon":true, "duplicate": false}&page=' + page;
  const res = await fetch(url);
  const data = await res.json();
  weaponItemList.push(data);
  // console.log(data);
}

function getItems(){
  getArmour();
  getWeapons();
  setTimeout(function showList(){
    itemList = armourItemList.concat(weaponItemList);
    console.log(itemList);
    populateItems(itemList);
  }, 2000);
}

async function getWeapons() {
  weaponItemList = [];
  var page = 1;
  while (page < 45) {
    requestWeaponItems(page);
    page++;
  }
}

async function getArmour(){
  armourItemList = [];
  var page = 1;
  while (page < 50) { //50 - TEST VALUE | 150 - LIVE VALUE
    requestArmourItems(page);
    page++;
  }
}

function populateItems(filteredList) {
  itemList = [];
  itemList = filteredList;
  //Populate the inventory with Items
  var invSearchDiv = document.getElementById('invSearchWrapper');
  if (invSearchDiv.innerHTML != ''){
    clearDiv('invSearchWrapper');
  }
  for (let i = 0; i < itemList.length; i++) {
    var innerArray = itemList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
      var itemName = itemList[i]._items[z].name;
      var itemID = itemList[i]._items[z].id;
      var itemImg = document.createElement('img');
      var itemToolTip = document.createElement("span");

      itemImg.setAttribute("id", itemName + itemID);
      itemImg.src = "https://www.osrsbox.com/osrsbox-db/items-icons/"+ itemID +".png";
      itemImg.setAttribute('draggable', 'true');
      itemImg.setAttribute('ondragstart','dragstart_handler(event)');
      itemImg.setAttribute('class', 'itemImg');
      itemImg.setAttribute('onmouseover', 'showToolTip(event,' + itemID + ')');
      itemImg.setAttribute('onmouseout', 'hideToolTip(event,' + itemID + ')');

      itemToolTip.setAttribute('class', 'osrstooltip');
      itemToolTip.setAttribute('id', itemID);

      itemToolTip.appendChild(itemImg);
      invSearchDiv.appendChild(itemToolTip);
      // console.log(itemList[i]._items[z].name);
    }
  }
}



function filterItems(){
  //Get list of all span containers in the Inven Div
  var x = document.getElementById("invSearchWrapper").querySelectorAll(".osrstooltip")
  //Parse user search input
  var itemInput = document.getElementById('itemFilt');
  var inputString = itemInput.value.toUpperCase();
  //Loop spans to determine if items match user input
  for (i = 0; i < x.length; i++){
    var itemName = x.item(i).firstElementChild.id;
    itemName = itemName.toUpperCase();
    if (itemName.includes(inputString) == false) {
      var itemID = x.item(i).id;
      var itemPack = document.getElementById(itemID);
      itemPack.style.display = "none";
    }else {
      var itemID = x.item(i).id;
      var itemPack = document.getElementById(itemID);
      itemPack.style.display = "";
    }
  }
}

function jsUcfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
