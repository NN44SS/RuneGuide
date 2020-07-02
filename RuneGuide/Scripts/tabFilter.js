//Filter Defeensive armour
function filterResults_Armour_Mel(){
  var fullArmourData = JSON.parse(JSON.stringify(armourItemList));
  for (let i = 0; i < fullArmourData.length; i++) {
    var innerArray = fullArmourData[i]._items.length;
    for (var z = innerArray - 1; z >= 0; z--) {
      var item_def_crush = fullArmourData[i]._items[z].equipment.defence_crush;
      var item_defense_magic = fullArmourData[i]._items[z].equipment.defence_magic;
      var item_defense_ranged = fullArmourData[i]._items[z].equipment.defence_ranged;
      var item_defense_slash = fullArmourData[i]._items[z].equipment.defence_slash;
      var item_defense_stab = fullArmourData[i]._items[z].equipment.defence_stab;
      if (item_def_crush < 20 && item_defense_slash < 20 && item_defense_stab < 20){
        fullArmourData[i]._items.splice(z, 1);
      }
    }
  }
   populateItems(fullArmourData);
}


function filterResults_Armour_Range(){
  var fullRangedarmourData = JSON.parse(JSON.stringify(armourItemList));
  for (let i = 0; i < fullRangedarmourData.length; i++) {
    var innerArray = fullRangedarmourData[i]._items.length;
    for (var z = innerArray - 1; z >= 0; z--) {
      var iName = fullRangedarmourData[i]._items[z].name;
      var item_def_crush = fullRangedarmourData[i]._items[z].equipment.defence_crush;
      var item_defense_magic = fullRangedarmourData[i]._items[z].equipment.defence_magic;
      var item_defense_ranged = fullRangedarmourData[i]._items[z].equipment.defence_ranged;
      var item_defense_slash = fullRangedarmourData[i]._items[z].equipment.defence_slash;
      var item_defense_stab = fullRangedarmourData[i]._items[z].equipment.defence_stab;
      if (item_defense_ranged < 40){
        fullRangedarmourData[i]._items.splice(z, 1);
      }
    }
  }
  populateItems(fullRangedarmourData);
}

function filterResults_Armour_Mage(){
  var fullMagearmourData = JSON.parse(JSON.stringify(armourItemList));
  for (let i = 0; i < fullMagearmourData.length; i++) {
    var innerArray = fullMagearmourData[i]._items.length;
    for (var z = innerArray - 1; z >= 0; z--) {
      var iName = fullMagearmourData[i]._items[z].name;
      var item_def_crush = fullMagearmourData[i]._items[z].equipment.defence_crush;
      var item_defense_magic = fullMagearmourData[i]._items[z].equipment.defence_magic;
      var item_defense_ranged = fullMagearmourData[i]._items[z].equipment.defence_ranged;
      var item_defense_slash = fullMagearmourData[i]._items[z].equipment.defence_slash;
      var item_defense_stab = fullMagearmourData[i]._items[z].equipment.defence_stab;
      if (item_defense_magic < 20){
        fullMagearmourData[i]._items.splice(z, 1);
      }
    }
  }
  populateItems(fullMagearmourData);
}

//Handles the slot filtering for the inventory
function slotFilter(x, slotName){
  var listToSort = itemList;
  for (let i = 0; i < listToSort.length; i++) {
    var innerArray = listToSort[i]._items.length;
    for (var z = innerArray - 1; z >= 0; z--) {
      var item_name = listToSort[i]._items[z].name;
      var item_id = listToSort[i]._items[z].id;
      var item_slot = listToSort[i]._items[z].equipment.slot;
      if (item_slot != slotName){
        var non_head_item = document.getElementById(item_id);
        non_head_item.style.display = "none";
      }else {
        var non_head_item = document.getElementById(item_id);
        non_head_item.style.display = "";
      }
    }
  }
  setTabHighlight(x);
}

//Green #4dff4d rgb(77, 255, 77) | Highlight - #99ff99 | Base - #b3ffb3
//Red #ff3333 rgb(255, 51, 51) | Highlight - #ff6666 | Base - #ff9999

function setTabHighlight(x){
  if(x.style.backgroundColor != "rgb(77, 255, 77)"){
    var elements = document.getElementsByClassName('slotFilterIcons');
    for (let i = 0; i < elements.length; i++){
      if(elements[i].innerHTML != x.innerHTML){
        elements[i].style.backgroundColor = "#b3ffb3";
        elements[i].style.border = "";
      }else {
        x.style.backgroundColor = "#4dff4d"
        x.style.border = "solid 2px";
        x.style.borderStyle = "inset none none inset";
      }
    }
  }
}

function onSlotHover(x){
  if(x.style.backgroundColor != "rgb(77, 255, 77)"){
    x.style.backgroundColor = "#99ff99";
  }
}

function onSlotExit(x){
  if(x.style.backgroundColor != "rgb(77, 255, 77)"){
    x.style.backgroundColor = "#b3ffb3";
  }
}
