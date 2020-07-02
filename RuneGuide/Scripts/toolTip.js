function showToolTip(e, id){
  var divTooltip = document.getElementById("tooltipWrapper");
  populateToolTip(id);
  $('#tooltipWrapper').css({'top':e.pageY+70,'left':e.pageX-30, 'position':'absolute', 'border':'1px solid black', 'padding':'5px'});
  $('#tooltipWrapper').show();
}

function hideToolTip(e, id){
  var divTooltip = document.getElementById("tooltipWrapper");
  $('#tooltipWrapper').hide();
  clearTooltip();
  // divTooltip.style.display = "";
}

//Console function to populate the tooltip
function testTooltip(id){
  var hideShit = document.getElementById('inventoryContainer');
  hideShit.style.display = "none";
  populateToolTip(id);
}

function clearTooltip(){
  //Clear the tooltip elements so new elements can be populated.
  var divWrapper_Img = document.getElementById('toolTipImgWrapper');
  var divWrapper_Name = document.getElementById('toolTipNameWrapper');
  var divWrapper_Equip = document.getElementById('ttDataEquip');
  var divWrapper_Memb = document.getElementById('ttDataMemb');
  var divWrapper_Stack = document.getElementById('ttDataStack');
  var divWrapper_LowAlch = document.getElementById('ttDataLowAlch');
  var divWrapper_HighAlch = document.getElementById('ttDataHighAlch');
  var divWrapper_OffStab = document.getElementById('ttDataOffStab');
  var divWrapper_OffSlash = document.getElementById('ttDataOffSlash');
  var divWrapper_OffCrush = document.getElementById('ttDataOffCrush');
  var divWrapper_OffMage = document.getElementById('ttDataOffMage');
  var divWrapper_OffRanged = document.getElementById('ttDataOffRange');
  var divWrapper_DefStab = document.getElementById('ttDataDefStab');
  var divWrapper_DefSlash = document.getElementById('ttDataDefSlash');
  var divWrapper_DefCrush = document.getElementById('ttDataDefCrush');
  var divWrapper_DefMage = document.getElementById('ttDataDefMage');
  var divWrapper_DefRanged = document.getElementById('ttDataDefRange');
  var divWrapper_BonCom = document.getElementById('ttDataBonusCom');
  var divWrapper_BonRanged = document.getElementById('ttDataBonusRange');
  var divWrapper_BonMage = document.getElementById('ttDataBonusMage');
  var divWrapper_BonPrayer = document.getElementById('ttDataBonusPrayer');

  divWrapper_Img.innerHTML = "";
  divWrapper_Name.innerHTML = "";
  divWrapper_Equip.innerHTML = "";
  divWrapper_Memb.innerHTML = "";
  divWrapper_Stack.innerHTML = "";
  divWrapper_LowAlch.innerHTML = "";
  divWrapper_HighAlch.innerHTML = "";
  divWrapper_OffStab.innerHTML = "";
  divWrapper_OffSlash.innerHTML = "";
  divWrapper_OffCrush.innerHTML = "";
  divWrapper_OffMage.innerHTML = "";
  divWrapper_OffRanged.innerHTML = "";
  divWrapper_DefStab.innerHTML = "";
  divWrapper_DefSlash.innerHTML = "";
  divWrapper_DefCrush.innerHTML = "";
  divWrapper_DefMage.innerHTML = "";
  divWrapper_DefRanged.innerHTML = "";
  divWrapper_BonCom.innerHTML = "";
  divWrapper_BonRanged.innerHTML = "";
  divWrapper_BonMage.innerHTML = "";
  divWrapper_BonPrayer.innerHTML = "";
}

function populateToolTip(itemID){

  //Get tooltip elements on index for population.
  var datacolor;
  var invToolTipWrapper = document.getElementById('tooltipWrapper');
  var divWrapper_Img = document.getElementById('toolTipImgWrapper');
  var divWrapper_Name = document.getElementById('toolTipNameWrapper');
  var divWrapper_Equip = document.getElementById('ttDataEquip');
  var divWrapper_Memb = document.getElementById('ttDataMemb');
  var divWrapper_Stack = document.getElementById('ttDataStack');
  var divWrapper_LowAlch = document.getElementById('ttDataLowAlch');
  var divWrapper_HighAlch = document.getElementById('ttDataHighAlch');
  var divWrapper_OffStab = document.getElementById('ttDataOffStab');
  var divWrapper_OffSlash = document.getElementById('ttDataOffSlash');
  var divWrapper_OffCrush = document.getElementById('ttDataOffCrush');
  var divWrapper_OffMage = document.getElementById('ttDataOffMage');
  var divWrapper_OffRanged = document.getElementById('ttDataOffRange');
  var divWrapper_DefStab = document.getElementById('ttDataDefStab');
  var divWrapper_DefSlash = document.getElementById('ttDataDefSlash');
  var divWrapper_DefCrush = document.getElementById('ttDataDefCrush');
  var divWrapper_DefMage = document.getElementById('ttDataDefMage');
  var divWrapper_DefRanged = document.getElementById('ttDataDefRange');
  var divWrapper_BonCom = document.getElementById('ttDataBonusCom');
  var divWrapper_BonRanged = document.getElementById('ttDataBonusRange');
  var divWrapper_BonMage = document.getElementById('ttDataBonusMage');
  var divWrapper_BonPrayer = document.getElementById('ttDataBonusPrayer');


  //Loop the itemList populated in populateItems(); to check for item IDs that match
  for (let i = 0; i < itemList.length; i++){
    var innerArray = itemList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
      var itemA = itemList[i]._items[z].id;
      //if the ID of the item in the list matches the Id of the hovered item
      if (itemA == itemID) {
        var itemId_TT = itemList[i]._items[z].id;
        var itemName_TT = itemList[i]._items[z].name;

        var itemLowAlch_TT = itemList[i]._items[z].lowalch;
        if (itemLowAlch_TT == null) {
          itemLowAlch_TT = "";
        }else {
          itemLowAlch_TT = itemLowAlch_TT.toString();
        }
        itemLowAlch_TT = numberWithCommas(itemLowAlch_TT);

        var itemHighAlch_TT = itemList[i]._items[z].highalch;
        if (itemHighAlch_TT == null) {
          itemHighAlch_TT = "";
        }else {
          itemHighAlch_TT = itemHighAlch_TT.toString();
        }
        itemHighAlch_TT = numberWithCommas(itemHighAlch_TT);

        var itemMemb_TT = itemList[i]._items[z].tradeable;
        itemMemb_TT = itemMemb_TT.toString();
        itemMemb_TT = jsUcfirst(itemMemb_TT);

        var itemEquip_TT = itemList[i]._items[z].equipable;
        itemEquip_TT = itemEquip_TT.toString();
        itemEquip_TT = jsUcfirst(itemEquip_TT);

        var itemStack_TT = itemList[i]._items[z].stackable;
        itemStack_TT = itemStack_TT.toString();
        itemStack_TT = jsUcfirst(itemStack_TT);

        //create variables to hold item data
        var itemOffStab_TT = checkforUndefined(itemList[i]._items[z].equipment.attack_stab);
        var itemOffSlash_TT = checkforUndefined(itemList[i]._items[z].equipment.attack_slash);
        var itemOffCrush_TT = checkforUndefined(itemList[i]._items[z].equipment.attack_crush);
        var itemOffMage_TT = checkforUndefined(itemList[i]._items[z].equipment.attack_magic);
        var itemOffRanged_TT = checkforUndefined(itemList[i]._items[z].equipment.attack_ranged);
        var itemDefStab_TT = checkforUndefined(itemList[i]._items[z].equipment.defence_stab);
        var itemDefSlash_TT = checkforUndefined(itemList[i]._items[z].equipment.defence_slash);
        var itemDefCrush_TT = checkforUndefined(itemList[i]._items[z].equipment.defence_crush);
        var itemDefMage_TT = checkforUndefined(itemList[i]._items[z].equipment.defence_magic);
        var itemDefRanged_TT = checkforUndefined(itemList[i]._items[z].equipment.defence_ranged);
        var itemBonCom_TT = checkforUndefined(itemList[i]._items[z].equipment.melee_strength);
        var itemBonRanged_TT = checkforUndefined(itemList[i]._items[z].equipment.ranged_strength);
        var itemBonMage_TT = checkforUndefined(itemList[i]._items[z].equipment.magic_damage);
        var itemBonPrayer_TT = checkforUndefined(itemList[i]._items[z].equipment.prayer);

        //Format numbers for tooltip pills.
        itemOffStab_TT = addOperatorToNumber(itemOffStab_TT);
        itemOffSlash_TT = addOperatorToNumber(itemOffSlash_TT);
        itemOffCrush_TT = addOperatorToNumber(itemOffCrush_TT);
        itemOffMage_TT = addOperatorToNumber(itemOffMage_TT);
        itemOffRanged_TT = addOperatorToNumber(itemOffRanged_TT);
        itemDefStab_TT = addOperatorToNumber(itemDefStab_TT);
        itemDefSlash_TT = addOperatorToNumber(itemDefSlash_TT);
        itemDefCrush_TT = addOperatorToNumber(itemDefCrush_TT);
        itemDefMage_TT = addOperatorToNumber(itemDefMage_TT);
        itemDefRanged_TT = addOperatorToNumber(itemDefRanged_TT);
        itemBonCom_TT = addOperatorToNumber(itemBonCom_TT);
        itemBonRanged_TT = addOperatorToNumber(itemBonRanged_TT);
        itemBonMage_TT = addOperatorToNumber(itemBonMage_TT);
        itemBonPrayer_TT = addOperatorToNumber(itemBonPrayer_TT);

        //Create elements to append to the tooltip.
        var itemImgTip = document.createElement("img");
        itemImgTip.src = "https://www.osrsbox.com/osrsbox-db/items-icons/"+ itemId_TT +".png";
        itemImgTip.setAttribute('id', 'tooltipImg')


        var itemNameTip = document.createElement("span");
        itemNameTip.innerHTML = itemName_TT;

        var itemIdTip = document.createElement("span");
        itemIdTip.innerHTML = itemId_TT;

        var itemNameTip = document.createElement("span");
        itemNameTip.innerHTML = itemName_TT;

        var itemMembTip = document.createElement("span");
        itemMembTip.innerHTML = itemMemb_TT;

        var itemHighAlchTip = document.createElement("span");
        itemHighAlchTip.innerHTML = itemHighAlch_TT;

        var itemLowAlchTip = document.createElement("span");
        itemLowAlchTip.innerHTML = itemLowAlch_TT;

        var itemEquipTip = document.createElement("span");
        itemEquipTip.innerHTML = itemEquip_TT;

        var itemStackTip = document.createElement("span");
        itemStackTip.innerHTML = itemStack_TT;

        var itemOffStabTip = document.createElement("span");
        itemOffStabTip.innerHTML = itemOffStab_TT;

        var itemOffSlashTip = document.createElement("span");
        itemOffSlashTip.innerHTML = itemOffSlash_TT;

        var itemOffCrushTip = document.createElement("span");
        itemOffCrushTip.innerHTML = itemOffCrush_TT;

        var itemOffMageTip = document.createElement("span");
        itemOffMageTip.innerHTML = itemOffMage_TT;

        var itemOffRangedTip = document.createElement("span");
        itemOffRangedTip.innerHTML = itemOffRanged_TT;

        var itemDefStabTip = document.createElement("span");
        itemDefStabTip.innerHTML = itemDefStab_TT;

        var itemDefSlashTip = document.createElement("span");
        itemDefSlashTip.innerHTML = itemDefSlash_TT;

        var itemDefCrushTip = document.createElement("span");
        itemDefCrushTip.innerHTML = itemDefCrush_TT;

        var itemDefMageTip = document.createElement("span");
        itemDefMageTip.innerHTML = itemDefMage_TT;

        var itemDefRangedTip = document.createElement("span");
        itemDefRangedTip.innerHTML = itemDefRanged_TT;

        var itemBonComTip = document.createElement("span");
        itemBonComTip.innerHTML = itemBonCom_TT;

        var itemBonRangedTip = document.createElement("span");
        itemBonRangedTip.innerHTML = itemBonRanged_TT;

        var itemBonMageTip = document.createElement("span");
        itemBonMageTip.innerHTML = itemBonMage_TT;

        var itemBonPrayerTip = document.createElement("span");
        itemBonPrayerTip.innerHTML = itemBonPrayer_TT;


        //Append items to the appropriate elements in the tooltip
        divWrapper_Img.appendChild(itemImgTip);
        divWrapper_Name.appendChild(itemNameTip);
        divWrapper_Equip.appendChild(itemEquipTip);
        divWrapper_Memb.appendChild(itemMembTip);
        divWrapper_Stack.appendChild(itemStackTip);
        divWrapper_HighAlch.appendChild(itemHighAlchTip);
        divWrapper_LowAlch.appendChild(itemLowAlchTip);

        divWrapper_OffStab.appendChild(itemOffStabTip);
        datacolor = colorData(itemOffStab_TT);
        divWrapper_OffStab.style.color = datacolor;

        divWrapper_OffSlash.appendChild(itemOffSlashTip);
        datacolor = colorData(itemOffSlash_TT);
        divWrapper_OffSlash.style.color = datacolor;

        divWrapper_OffCrush.appendChild(itemOffCrushTip);
        datacolor = colorData(itemOffCrush_TT);
        divWrapper_OffCrush.style.color = datacolor;

        divWrapper_OffMage.appendChild(itemOffMageTip);
        datacolor = colorData(itemOffMage_TT);
        divWrapper_OffMage.style.color = datacolor;

        divWrapper_OffRanged.appendChild(itemOffRangedTip);
        datacolor = colorData(itemOffRanged_TT);
        divWrapper_OffRanged.style.color = datacolor;

        divWrapper_DefStab.appendChild(itemDefStabTip);
        datacolor = colorData(itemDefStab_TT);
        divWrapper_DefStab.style.color = datacolor;

        divWrapper_DefSlash.appendChild(itemDefSlashTip);
        datacolor = colorData(itemDefSlash_TT);
        divWrapper_DefSlash.style.color = datacolor;

        divWrapper_DefCrush.appendChild(itemDefCrushTip);
        datacolor = colorData(itemDefCrush_TT);
        divWrapper_DefCrush.style.color = datacolor;

        divWrapper_DefMage.appendChild(itemDefMageTip);
        datacolor = colorData(itemDefMage_TT);
        divWrapper_DefMage.style.color = datacolor;

        divWrapper_DefRanged.appendChild(itemDefRangedTip);
        datacolor = colorData(itemDefRanged_TT);
        divWrapper_DefRanged.style.color = datacolor;

        divWrapper_BonCom.appendChild(itemBonComTip);
        datacolor = colorData(itemBonCom_TT);
        divWrapper_BonCom.style.color = datacolor;

        divWrapper_BonRanged.appendChild(itemBonRangedTip);
        datacolor = colorData(itemBonRanged_TT);
        divWrapper_BonRanged.style.color = datacolor;

        divWrapper_BonMage.appendChild(itemBonMageTip);
        datacolor = colorData(itemBonMage_TT);
        divWrapper_BonMage.style.color = datacolor;

        divWrapper_BonPrayer.appendChild(itemBonPrayerTip);
        datacolor = colorData(itemBonPrayer_TT);
        divWrapper_BonPrayer.style.color = datacolor;

        //show tooltip
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
