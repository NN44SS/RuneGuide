var monsterList = [];
var intsToRemove = [139, 252, 274, 630, 965, 2043, 2044, 2918, 2919, 3125, 3126, 3361, 3473, 3474, 3475, 4115, 5775, 5890, 5891, 5908, 6118,
                    6118, 6119, 6120, 6121, 6292, 6293, 6294, 6293,6294, 6295, 6297, 6299, 6300, 6306, 6574, 6575, 6579, 6581,
                    6582, 6593, 6612, 6613, 6614, 6698, 6699, 6700, 6702, 6716, 6723, 7101, 7144, 7254, 7255, 7273, 7274, 7275,
                    7397, 7398, 7399, 7400, 7401, 8095, 8244, 8340, 8345, 8346, 8347, 8355, 8356, 8357, 8359, 8360, 8361, 8362,
                    8363, 8370, 8372, 7402, 7403, 7404, 7405, 7406, 7407, 7409, 7410, 7411, 7553, 7554, 7555, 7649, 7679, 7697,
                    7697, 7696, 7699, 7700, 7706, 7708, 7795, 7806, 7852, 7858, 7859, 7860, 7861, 7888, 8027, 8030, 8031, 8060, 8374,
                    8384, 8388, 8617, 8618, 8097, 8096, 8098, 8621, 8917, 8950, 9021, 9021, 9035, 9046, 9047, 9048, 9258, 9291, 9293, 9296, 9416,
                    9425, 9569, 9571, 9564, 10397, 10398, 10400, 10402];

//Initialize boss data.
function initBossData(){
  getMonsters();
  setTimeout(function initData(){
    monsterListClean();
    listCustomRemoves(intsToRemove, monsterList);
    populateBossGrid(monsterList);
    console.log(monsterList);
  }, 2000);
}

//Request monster data.
var requestMonsters = async (page) => {
  let url = 'https://api.osrsbox.com/monsters?where=combat_level>200&page=' + page;
  const res = await fetch(url);
  const data = await res.json();
  monsterList.push(data);
}
//Retreieves and populates monster data.
function getMonsters(){
  monsterList = [];
  var page = 1;
  while (page < 30) {
    requestMonsters(page);
    page++;
  }
}

//Cleans the list for some bad data.
function monsterListClean(){
  for (let i = 0; i < monsterList.length; i++) {
    var innerArray = monsterList[i]._items.length;
    for (var z = innerArray - 1; z >= 0; z--) {
      var monsterName = monsterList[i]._items[z].name;
      var monsterDup = monsterList[i]._items[z].duplicate;
      if (monsterDup == true) {
        monsterList[i]._items.splice(z, 1);
      } else if (monsterName.includes("hard")) {
        monsterList[i]._items.splice(z, 1);
      } else{
      }
    }
  }
}

//Populate the boss grid on the index page.
function populateBossGrid(monsterList){
  var bossGridWrapper = document.getElementById('BossSelectionGrid');
  for (let i = 0; i < monsterList.length; i++) {
    var innerArray = monsterList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
    var monsterName = monsterList[i]._items[z].name;
    var monsterId = monsterList[i]._items[z].id;

    var bossTile = document.createElement('div');
    bossTile.setAttribute('class', 'bossTile');
    bossTile.setAttribute('onclick', 'selectBoss(this)');
    bossTile.setAttribute('id', monsterId);

    var bossTitleWrapper = document.createElement('div');
    bossTitleWrapper.setAttribute('class', 'bossTitleWrapper');

    var bossTitle = document.createElement('div');
    bossTitle.setAttribute('class', 'bossTitle');

    var bossTitleText = document.createElement("span");
    bossTitleText.innerHTML = monsterName;

    var monsterImg = document.createElement('img');
    var imgSrc = setBossImgSrc(monsterId);
    monsterImg.src = imgSrc;
    monsterImg.setAttribute('alt', monsterName);
    monsterImg.setAttribute('class', 'gridImg');


    bossTitle.appendChild(bossTitleText);
    bossTitleWrapper.append(bossTitle);
    bossTile.appendChild(monsterImg);
    bossTile.appendChild(bossTitleWrapper)
    bossGridWrapper.appendChild(bossTile);
    }
  }
}

//Set img source by img ID.
function setBossImgSrc(monsterId){
  var imgSrc;
  if (monsterId == 239) {
    imgSrc = 'https://oldschool.runescape.wiki/images/e/e9/King_Black_Dragon.png?d25f0';
  }else if (monsterId == 319) {
    imgSrc = 'https://oldschool.runescape.wiki/images/5/5c/Corporeal_Beast.png?52ebb';
  }else if (monsterId == 494) {
    imgSrc = 'https://oldschool.runescape.wiki/images/d/d3/Kraken.png?a4955';
  }else if (monsterId == 499) {
    imgSrc = 'https://oldschool.runescape.wiki/images/1/1c/Thermonuclear_smoke_devil.png?87507';
  }else if (monsterId == 499) {
    imgSrc = 'https://oldschool.runescape.wiki/images/1/1c/Thermonuclear_smoke_devil.png?87507';
  }else if (monsterId == 963) {
    imgSrc = 'https://oldschool.runescape.wiki/images/5/57/Kalphite_Queen.png?a4955';
  }else if (monsterId == 2042) {
    imgSrc = 'https://oldschool.runescape.wiki/images/b/bc/Zulrah_%28serpentine%29.png?29a54';
  }else if (monsterId == 2042) {
    imgSrc = 'https://oldschool.runescape.wiki/images/b/bc/Zulrah_%28serpentine%29.png?29a54';
  }else if (monsterId == 2054) {
    imgSrc = 'https://oldschool.runescape.wiki/images/a/a9/Chaos_Elemental.png?c170c';
  }else if (monsterId == 2205) {
    imgSrc = 'https://oldschool.runescape.wiki/images/f/fb/Commander_Zilyana.png?c5eaa';
  }else if (monsterId == 2215) {
    imgSrc = 'https://oldschool.runescape.wiki/images/b/b8/General_Graardor.png?4dd90';
  }else if (monsterId == 2265) {
    imgSrc = 'https://oldschool.runescape.wiki/images/b/b4/Dagannoth_Supreme.png?81f00';
  }else if (monsterId == 2266) {
    imgSrc = 'https://oldschool.runescape.wiki/images/8/8b/Dagannoth_Prime.png?945b1';
  }else if (monsterId == 2267) {
    imgSrc = 'https://oldschool.runescape.wiki/images/1/1b/Dagannoth_Rex.png?a99a9';
  }else if (monsterId == 3127) {
    imgSrc = 'https://oldschool.runescape.wiki/images/8/82/TzTok-Jad.png?87507';
  }else if (monsterId == 3129) {
    imgSrc = 'https://oldschool.runescape.wiki/images/2/2f/K%27ril_Tsutsaroth.png?d22a3';
  }else if (monsterId == 3162) {
    imgSrc = 'https://oldschool.runescape.wiki/images/f/fd/Kree%27arra.png?65c34';
  }else if (monsterId == 5779) {
    imgSrc = 'https://oldschool.runescape.wiki/images/f/fd/Giant_Mole.png?3f58a';
  }else if (monsterId == 5862) {
    imgSrc = 'https://oldschool.runescape.wiki/images/4/45/Cerberus.png?47f4c';
  }else if (monsterId == 5886) {
    imgSrc = 'https://oldschool.runescape.wiki/images/f/fa/Abyssal_Sire_%28phase_1%29.png?0db8f';
  }else if (monsterId == 6503) {
    imgSrc = 'https://oldschool.runescape.wiki/images/d/d4/Callisto.png?4612a';
  }else if (monsterId == 6504) {
    imgSrc = 'https://oldschool.runescape.wiki/images/7/7f/Venenatis.png?20540';
  }else if (monsterId == 6611) {
    imgSrc = 'https://oldschool.runescape.wiki/images/7/7f/Vet%27ion.png?4cb16';
  }else if (monsterId == 6615) {
    imgSrc = 'https://oldschool.runescape.wiki/images/3/35/Scorpia.png?517c9';
  }else if (monsterId == 6618) {
    imgSrc = 'https://oldschool.runescape.wiki/images/c/c0/Crazy_archaeologist.png?3ecc9';
  }else if (monsterId == 6619) {
    imgSrc = 'https://oldschool.runescape.wiki/images/d/d8/Chaos_Fanatic.png?8871d';
  }else if (monsterId == 7286) {
    imgSrc = 'https://oldschool.runescape.wiki/images/a/a8/Skotizo.png?dc8b8';
  }else if (monsterId == 7851) {
    imgSrc = 'https://oldschool.runescape.wiki/images/5/5d/Dusk.png?8af58';
  }else if (monsterId == 8061) {
    imgSrc = 'https://oldschool.runescape.wiki/images/archive/9/9a/20180104231729%21Vorkath.png?c4d1a';
  }else if (monsterId == 8583) {
    imgSrc = 'https://oldschool.runescape.wiki/images/e/ed/Hespori.png?cd901';
  }else if (monsterId == 8615) {
    imgSrc = 'https://oldschool.runescape.wiki/images/a/a3/Alchemical_Hydra.png?925dd';
  }else if (monsterId == 8713) {
    imgSrc = 'https://oldschool.runescape.wiki/images/e/e9/Sarachnis.png?8f040';
  }else{
    imgSrc = 'https://www.wiki.sc4devotion.com/images/6/62/Wiki_no_image.png';
  }
  return imgSrc;
}

//Runs when the user selects a boss from the grid
function selectBoss(ev) {
  var bossGridWrapper = document.getElementById('bossGridWrapper');
  var bossId = ev.id;


  for (let i = 0; i < monsterList.length; i++) {
    var innerArray = monsterList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
      var monsterName = monsterList[i]._items[z].name;
      var monsterId = monsterList[i]._items[z].id;
      var monsterMembers = monsterList[i]._items[z].members;
      var monsterComLvl = monsterList[i]._items[z].combat_level;
      var monsterExamine = monsterList[i]._items[z].examine;
      var monsterMaxHit = monsterList[i]._items[z].max_hit;
      var monsterAggressive = monsterList[i]._items[z].aggressive;
      var monsterPoisonous = monsterList[i]._items[z].poisonous;
      var monsterAttType = getAttackTypes(monsterId);
      var monsterAttSpeed = monsterList[i]._items[z].attack_speed;
      var monsterHitPoints = monsterList[i]._items[z].hitpoints;
      var monsterAttLvl = monsterList[i]._items[z].attack_level;
      var monsterMeleeLvl = monsterList[i]._items[z].strength_level;
      var monsterDefLvl = monsterList[i]._items[z].defence_level;
      var monsterMageLvl = monsterList[i]._items[z].magic_level;
      var monsterRangedLvl = monsterList[i]._items[z].ranged_level;
      var monsterDefStab = monsterList[i]._items[z].defence_stab;
      var monsterDefSlash = monsterList[i]._items[z].defence_slash;
      var monsterDefCrush = monsterList[i]._items[z].defence_crush;
      var monsterDefMage = monsterList[i]._items[z].defence_magic;
      var monsterDefRanged = monsterList[i]._items[z].defence_ranged;
      var monsterBonMeleeStrength = monsterList[i]._items[z].melee_strength;
      var monsterBonMagicStrength = monsterList[i]._items[z].magic_strength;
      var monsterBonRangedStrength = monsterList[i]._items[z].ranged_strength;
      if (bossId == monsterId) {
      //If bossID matches a monster in the list
      bossGridWrapper.style.display = "none";
      populateBossInfo(monsterName, monsterId, monsterMembers, monsterComLvl, monsterExamine, monsterMaxHit,
                        monsterAggressive, monsterPoisonous, monsterAttType, monsterAttSpeed, monsterHitPoints,
                        monsterAttLvl, monsterMeleeLvl, monsterDefLvl, monsterMageLvl, monsterRangedLvl,
                        monsterDefStab, monsterDefSlash, monsterDefCrush, monsterDefMage, monsterDefRanged,
                        monsterBonMeleeStrength, monsterBonMagicStrength, monsterBonRangedStrength);

      populateMonsterDrops(monsterId);
      }
    }
  }
}


//Fill the values on the page by using the boss info passed from boss selection
function populateBossInfo(monsterName, monsterId, monsterMembers, monsterComLvl, monsterExamine, monsterMaxHit,
                  monsterAggressive, monsterPoisonous, monsterAttType, monsterAttSpeed, monsterHitPoints,
                  monsterAttLvl, monsterMeleeLvl, monsterDefLvl, monsterMageLvl, monsterRangedLvl,
                  monsterDefStab, monsterDefSlash, monsterDefCrush, monsterDefMage, monsterDefRanged,
                  monsterBonMeleeStrength, monsterBonMagicStrength, monsterBonRangedStrength)

{


  var bossSectionWrapper = document.getElementById('bossSectionWrapper');
  var bossImgContainer = document.getElementById('bossImgContainer');
  var bossTitleContainer = document.getElementById('bossTitleContainer');

  //Find element locations in the DOM
  var bossInfoComLvl = document.getElementById('bossComLvl');
  var bossInfoHitPoints = document.getElementById('bossHitPoints');
  var bossInfoMembers = document.getElementById('bossMembers');
  var bossInfoExamine = document.getElementById('bossExamine');
  var bossInfoMaxHit = document.getElementById('bossMaxHit');
  var bossInfoAggressive = document.getElementById('bossAggressive');
  var bossInfoPoisonous = document.getElementById('bossPoisonous');
  var bossInfoAttType = document.getElementById('bossAttType');
  var bossInfoAttSpeed = document.getElementById('bossAttSpeed');
  var bossInfoAttLvl = document.getElementById('bossStatAttLvl');
  var bossInfoMelLvl = document.getElementById('bossStatMelLvl');
  var bossInfoDefLvl = document.getElementById('bossStatDefLvl');
  var bossInfoMageLvl = document.getElementById('bossStatMageLvl');
  var bossInfoRangeLvl = document.getElementById('bossStatRangeLvl');
  var bossInfoDefStab = document.getElementById('bossStatDefStab');
  var bossInfoDefSlash = document.getElementById('bossStatDefSlash');
  var bossInfoDefCrush = document.getElementById('bossStatDefCrush');
  var bossInfoDefMage = document.getElementById('bossStatDefMage');
  var bossInfoDefRange = document.getElementById('bossStatDefRange');
  var bossInfoBonusMel = document.getElementById('bossBonMel');
  var bossInfoBonusMage = document.getElementById('bossBonMage');
  var bossInfoBonusRange = document.getElementById('bossBonRanged');
  var bossSlayerMasters = document.getElementById('slayerMastersContainer');


  //Display the Boss Wrapper
  bossSectionWrapper.style.display = "inline";

  //populate boss image
  var monsterImg = document.createElement('img');
  var imgSrc = setBossImgSrc(monsterId);
  monsterImg.src = imgSrc;
  monsterImg.setAttribute('alt', monsterName);
  monsterImg.setAttribute('class', 'bossSpotlightImg');

  //populate boss title to span
  var bossTitleText = document.createElement("span");
  bossTitleText.setAttribute('class', "bossSpotlightTxt")
  bossTitleText.innerHTML = monsterName;

  //populate boss stats to span elements
  var span_CombatLvl = document.createElement("span");
  span_CombatLvl.innerHTML = monsterComLvl;
  var span_Hitpoints = document.createElement("span");
  span_Hitpoints.innerHTML = monsterHitPoints;
  var span_Members = document.createElement("span");
  span_Members.innerHTML = monsterMembers;
  var span_Examine = document.createElement("span");
  span_Examine.innerHTML = monsterExamine;
  var span_MaxHit = document.createElement("span");
  span_MaxHit.innerHTML = monsterMaxHit;
  var span_Aggresive = document.createElement("span");
  span_Aggresive.innerHTML = monsterAggressive;
  var span_Poisonous = document.createElement("span");
  span_Poisonous.innerHTML = monsterPoisonous;
  var span_AttType = document.createElement("span");
  span_AttType.innerHTML = monsterAttType;
  var span_AttSpeed = document.createElement("span");
  span_AttSpeed.innerHTML = monsterAttSpeed;
  var span_AttLvl = document.createElement("span");
  span_AttLvl.innerHTML = monsterAttLvl;
  var span_MelLvl = document.createElement("span");
  span_MelLvl.innerHTML = monsterMeleeLvl;
  var span_DefLvl = document.createElement("span");
  span_DefLvl.innerHTML = monsterDefLvl;
  var span_MageLvl = document.createElement("span");
  span_MageLvl.innerHTML = monsterMageLvl;
  var span_RangeLvl = document.createElement("span");
  span_RangeLvl.innerHTML = monsterRangedLvl;
  var span_DefStab = document.createElement("span");
  span_DefStab.innerHTML = monsterDefStab;
  var span_DefSlash = document.createElement("span");
  span_DefSlash.innerHTML = monsterDefSlash;
  var span_DefCrush = document.createElement("span");
  span_DefCrush.innerHTML = monsterDefCrush;
  var span_DefMage = document.createElement("span");
  span_DefMage.innerHTML = monsterDefMage;
  var span_DefRange = document.createElement("span");
  span_DefRange.innerHTML = monsterDefRanged;
  var span_BonusMel = document.createElement("span");
  span_BonusMel.innerHTML = checkforUndefined(monsterBonMeleeStrength);
  var span_BonusMage = document.createElement("span");
  span_BonusMage.innerHTML = checkforUndefined(monsterBonMagicStrength);
  var span_BonusRange = document.createElement("span");
  span_BonusRange.innerHTML = checkforUndefined(monsterBonRangedStrength);



  //Append created elements above to the dom
  bossImgContainer.appendChild(monsterImg);
  bossTitleContainer.appendChild(bossTitleText);
  bossInfoComLvl.appendChild(span_CombatLvl);
  bossInfoHitPoints.appendChild(span_Hitpoints);
  bossInfoMembers.appendChild(span_Members);
  bossInfoExamine.appendChild(span_Examine);
  bossInfoMaxHit.appendChild(span_MaxHit);
  bossInfoAggressive.appendChild(span_Aggresive);
  bossInfoPoisonous.appendChild(span_Poisonous);
  bossInfoAttType.appendChild(span_AttType);
  bossInfoAttSpeed.appendChild(span_AttSpeed);
  bossInfoAttLvl.appendChild(span_AttLvl);
  bossInfoMelLvl.appendChild(span_MelLvl);
  bossInfoDefLvl.appendChild(span_DefLvl);
  bossInfoMageLvl.appendChild(span_MageLvl);
  bossInfoRangeLvl.appendChild(span_RangeLvl);
  bossInfoDefStab.appendChild(span_DefStab);
  bossInfoDefSlash.appendChild(span_DefSlash);
  bossInfoDefCrush.appendChild(span_DefCrush);
  bossInfoDefMage.appendChild(span_DefMage);
  bossInfoDefRange.appendChild(span_DefRange);
  bossInfoBonusMel.appendChild(span_BonusMel);
  bossInfoBonusMage.appendChild(span_BonusMage);
  bossInfoBonusRange.appendChild(span_BonusRange);



  //Populate slayer master images
  var slayerMasters = getSlayerMasters(monsterId);
  if(slayerMasters.includes('konar')){
    var masterImg = document.createElement('img');
    masterImg.src = 'Images/SlayerMasters/Konar_quo_Maten_chathead.png';
    masterImg.setAttribute('alt', 'Konar');
    masterImg.setAttribute('class', 'slayerMasterImg');
    bossSlayerMasters.appendChild(masterImg);
  }

  if(slayerMasters.includes('chaeldar')){
    var masterImg = document.createElement('img');
    masterImg.src = 'Images/SlayerMasters/Chaeldar_chathead.png';
    masterImg.setAttribute('alt', 'Chaeldar');
    masterImg.setAttribute('class', 'slayerMasterImg');
    bossSlayerMasters.appendChild(masterImg);
  }

  if(slayerMasters.includes('duradel')){
    var masterImg = document.createElement('img');
    masterImg.src = 'Images/SlayerMasters/Duradel_chathead.png';
    masterImg.setAttribute('alt', 'Duradel');
    masterImg.setAttribute('class', 'slayerMasterImg');
    bossSlayerMasters.appendChild(masterImg);
  }

  if(slayerMasters.includes('nieve')){
    var masterImg = document.createElement('img');
    masterImg.src = 'Images/SlayerMasters/Nieve_chathead.png';
    masterImg.setAttribute('alt', 'Nieve');
    masterImg.setAttribute('class', 'slayerMasterImg');
    bossSlayerMasters.appendChild(masterImg);
  }


}

//Get the attack types from the nested array and return them in string format.
function getAttackTypes(monsterId){
  for (let i = 0; i < monsterList.length; i++) {
    var innerArray = monsterList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
      var loopMonsterId = monsterList[i]._items[z].id;
      if (monsterId == loopMonsterId) {
        var typeLength = monsterList[i]._items[z].attack_type.length;
        var attackTypeString = "";
        var x = 0;
        while (x < typeLength) {
          var attString = monsterList[i]._items[z].attack_type[x];
          attackTypeString += attString + ', ';
          x++;
        }
      }
    }
  }
  var returnString = attackTypeString.slice(0, -2);
  return returnString;
}


function getSlayerMasters(monsterId){
  for (let i = 0; i < monsterList.length; i++) {
    var innerArray = monsterList[i]._items.length;
    for (let z = 0; z < innerArray; z++) {
      var loopMonsterId = monsterList[i]._items[z].id;
      if (monsterId == loopMonsterId) {
        var slayerMasterLength = monsterList[i]._items[z].slayer_masters.length;
        var slayerMasterString = "";
        var x = 0;
        while (x < slayerMasterLength) {
          var masterString = monsterList[i]._items[z].slayer_masters[x];
          slayerMasterString += masterString + ', ';
          x++;
        }
      }
    }
  }
  var returnString = slayerMasterString.slice(0, -2);
  return returnString;
}
