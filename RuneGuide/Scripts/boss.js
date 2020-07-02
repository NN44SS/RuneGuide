var monsterList = [];
var intsToRemove = [139, 252, 274, 630, 965, 2043, 2044, 2918, 2919, 3125, 3126, 3361, 3473, 3474, 3475, 4115, 5775, 5890, 5891, 5908, 6118,
                    6118, 6119, 6120, 6121, 6292, 6293, 6294, 6293,6294, 6295, 6297, 6299, 6300, 6306, 6574, 6575, 6579, 6581,
                    6582, 6593, 6612, 6613, 6614, 6698, 6699, 6700, 6702, 6716, 6723, 7101, 7144, 7254, 7255, 7273, 7274, 7275,
                    7397, 7398, 7399, 7400, 7401, 8095, 8244, 8340, 8345, 8346, 8347, 8355, 8356, 8357, 8359, 8360, 8361, 8362,
                    8363, 8370, 8372, 7402, 7403, 7404, 7405, 7406, 7407, 7409, 7410, 7411, 7553, 7554, 7555, 7649, 7679, 7697,
                    7697, 7696, 7699, 7700, 7706, 7708, 7795, 7806, 7852, 7858, 7859, 7860, 7861, 7888, 8027, 8030, 8031, 8060, 8374,
                    8384, 8388, 8617, 8618, 8621, 8917, 8950, 9021, 9021, 9035, 9046, 9047, 9048, 9258, 9291, 9293, 9296, 9416,
                    9425, 9569, 9571, 9564];

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

function selectBoss(ev){
  var bossGridWrapper = document.getElementById('bossGridWrapper');
  var monsterId = ev.id;
  bossGridWrapper.style.display = "none";
}
