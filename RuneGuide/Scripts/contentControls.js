function hideBossSelectGrid(){
  var bossGridWrapper = document.getElementById('bossGridWrapper');
  bossGridWrapper.style.display = "none";
}

function showBossInfoPanel(){
  var bossSectionWrapper = document.getElementById('bossSectionWrapper');
  bossSectionWrapper.style.display = "inline";
}


function toggleDropSection(){
  var bossDropSection = document.getElementById('bossDropWraper');

  if (bossDropSection.style.display === 'none') {
    bossDropSection.style.display = 'block';
  }else {
    bossDropSection.style.display = 'none';
  }
}

function resetBossGrid(){

  clearBossSections();

  var bossSectionWrapper = document.getElementById('bossSectionWrapper');
  bossSectionWrapper.style.display = "none";

  var bossGridWrapper = document.getElementById('bossGridWrapper');
  bossGridWrapper.style.display = "inline";
}

function clearBossSections(){
  var bossImgContainer = document.getElementById('bossImgContainer');
  bossImgContainer.innerHTML = '';

  var bossTitleContainer = document.getElementById('bossTitleContainer');
  bossTitleContainer.innerHTML = '';
}
