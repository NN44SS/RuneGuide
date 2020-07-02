const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://api.osrsbox.com/items';

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var items = request.response;
  console.log(items);
  populateItemData(items);
}


function populateItemData(jsonObj) {
  const itemData = jsonObj['_items']

  for (let i = 0; i < itemData.length; i++) {
    var myItemID
    const myItemBucket = document.createElement('itemBucket');
    const myH2 = document.createElement('h2');
    const myH2A = document.createElement('h2');
    const myImg = document.createElement('img');

    myH2.textContent = itemData[i].name;
    myH2A.textContent = ' $ ' + itemData[i].cost;
    myItemID = itemData[i].id;
    myImg.src = returnIcon(myItemID);

    myItemBucket.appendChild(myH2);
    myItemBucket.appendChild(myH2A);
    myItemBucket.appendChild(myImg);
    section.appendChild(myItemBucket);
  }


}

function returnIcon(itemID) {
  var itemIcon = "https://www.osrsbox.com/osrsbox-db/items-icons/"+ itemID +".png"
  return itemIcon
}
