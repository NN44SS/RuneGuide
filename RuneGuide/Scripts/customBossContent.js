
let recommendedStatsList = [];

//KBD - 239
//Corp - 319
//Kraken - 494
//Thermy - 499
//KQ - 963
//Zulrah - 2042
//Callistto - 6503
//Venenatis - 6504
//Vet'ion - 6611
//Scorpia - 6615
//Crazy Arch - 6618
//Chaos_Fanatic - 6619
//Skotizo - 7286
//Chaos_Elemental - 2054
//Commander_Zilyana - 2205
//General_Graardor - 2215
//Dagannoth_Supreme - 2265
//Dagannoth_Prime - 2266
//Dagannoth_Rex - 2267
//TzTok - 3127
//k'ril_Tsutsaroth - 3129
//Kree - 3126
//Giant_Mole - 5779
//Cerberus - 5862
//Abyssal_Sire - 5886
//Dusk - 7851
//vorkath - 8061
//Hespori - 8583
//Alchemical_Hydra - 8615
//Sarachnis - 8713

function populateBossCustomData(bossID){
  if (bossID == 239) {
      kbdData();
  }

  if (bossID == 319) {
      corpData();
  }

  if (bossID == 494) {
      krakenData();
  }
  if (bossID == 499) {
      thermyData();
  }

  if (bossID == 963) {
      kqData();
  }

  if (bossID == 2042) {
      zulrahData();
  }

  if (bossID == 2054) {
      chaosEleData();
  }

  if (bossID == 2205) {
      commZilData();
  }

  if (bossID == 2215) {
      genGraarData();
  }

  if (bossID == 2265) {
      dagSupData();
  }

  if (bossID == 2266) {
      dagPrimeData();
  }

  if (bossID == 2267) {
      dagRexData();
  }

  if (bossID == 3127) {
      jadData();
  }

  if (bossID == 3129) {
      zammyData();
  }

  if (bossID == 3162) {
      kreeData();
  }

  if (bossID == 5779) {
      moleData();
  }

  if (bossID == 5862) {
      cerbData();
  }

  if (bossID == 5886) {
      sireData();
  }

  if (bossID == 2042) {
      zulrahData();
  }

  if (bossID == 6503) {
      callistoData();
  }

  if (bossID == 6504) {
      venenatisData();
  }

  if (bossID == 6611) {
      vetionData();
  }

  if (bossID == 6615) {
      skorpiaData();
  }

  if (bossID == 6618) {
      crazyArchData();
  }

  if (bossID == 6619) {
      chaosFanData();
  }

  if (bossID == 7286) {
      skotizoData();
  }

  if (bossID == 7851) {
      duskData();
  }

  if (bossID == 8061) {
      vorkathData();
  }

  if (bossID == 8583) {
      hesporiData();
  }

  if (bossID == 8615) {
      hydraData();
  }

  if (bossID == 2042) {
      sarachData();
  }

}


function kbdData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att80.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength80.png');
  recommendedStatsList.push('Images/SkillBubbles/Def80.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function corpData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att90.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength90.png');
  recommendedStatsList.push('Images/SkillBubbles/Def90.png');
  recommendedStatsList.push('Images/SkillBubbles/Range90.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function krakenData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function thermyData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att90.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength90.png');
  recommendedStatsList.push('Images/SkillBubbles/Def90.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function kqData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength85.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range85.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function zulrahData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Mage80.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function chaosEleData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att80.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength80.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function commZilData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att90.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength90.png');
  recommendedStatsList.push('Images/SkillBubbles/Def90.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function genGraarData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att80.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage70.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function dagSupData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att70.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def80.png');
  recommendedStatsList.push('Images/SkillBubbles/Range70.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function dagPrimeData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att80.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage70.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function dagRexData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att80.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage70.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function jadData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function zammyData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength85.png');
  recommendedStatsList.push('Images/SkillBubbles/Def90.png');
  recommendedStatsList.push('Images/SkillBubbles/Range85.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage85.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function kreeData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength85.png');
  recommendedStatsList.push('Images/SkillBubbles/Def85.png');
  recommendedStatsList.push('Images/SkillBubbles/Range70.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage90.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function moleData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att70.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function cerbData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def85.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function sireData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att75.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength75.png');
  recommendedStatsList.push('Images/SkillBubbles/Def75.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function callistoData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att70.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function venenatisData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength90.png');
  recommendedStatsList.push('Images/SkillBubbles/Def75.png');
  recommendedStatsList.push('Images/SkillBubbles/Range85.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage90.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function vetionData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength90.png');
  recommendedStatsList.push('Images/SkillBubbles/Def75.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage90.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function scorpiaData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Mage75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function crazyArchData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Mage75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function chaosFanData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function skotizoData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att75.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength75.png');
  recommendedStatsList.push('Images/SkillBubbles/Def75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function duskData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att70.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range75.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function vorkathData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att85.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength90.png');
  recommendedStatsList.push('Images/SkillBubbles/Def85.png');
  recommendedStatsList.push('Images/SkillBubbles/Range90.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function hesporiData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att70.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength70.png');
  recommendedStatsList.push('Images/SkillBubbles/Def70.png');
  recommendedStatsList.push('Images/SkillBubbles/Range70.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function hydraData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Def80.png');
  recommendedStatsList.push('Images/SkillBubbles/Range80.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}

function sarachData(){
  var recommendedStatsSection = document.getElementById('RecommendedStatsContainer');
  recommendedStatsList.push('Images/SkillBubbles/Att65.png');
  recommendedStatsList.push('Images/SkillBubbles/Strength65.png');
  recommendedStatsList.push('Images/SkillBubbles/Def65.png');
  recommendedStatsList.push('Images/SkillBubbles/Mage60.png');

  for(let req of recommendedStatsList){
    var reqImg = document.createElement('img');
    reqImg.src = req;
    recommendedStatsSection.appendChild(reqImg);
  }
}
