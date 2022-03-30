//Below is the url
const cryptoUrl = `https://api.coinlore.net/api/tickers/?`;
  //below is the api data gathering
  document.addEventListener('DOMContentLoaded',() => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    //const val = document.getElementById('number').value;
    buildList(e.target.number.value-1);
    //console.log(val);
    getCryto(e.target.number.value-1);
    form.reset()
  })
})
function buildList(coin){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${coin} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#mainList').appendChild(p)
  
}
function handleDelete(e){
  e.target.parentNode.remove()
}

function getCryto(val) {
  console.log(val)

  /*let main = document.getElementById('main');
  let cryptoList = document.getElementById('cryptoList');
  let box = document.getElementById('box'); */
  fetchCryto(val)

  /* box.innerHTML = '';
  cryptoList.innerHTML ='';*/

}

async function fetchCryto(e) {
  console.log(e)
  const response = await fetch(cryptoUrl);
  const dat = await response.json();
  data = dat.data;
  console.log(data);
  const rank = dat.data[e].rank;
  console.log(rank)
  const symbol = dat.data[e].symbol;
  console.log(symbol)
  const called = dat.data[e].name;
  console.log(called)
  const changeUSD = dat.data[e].percent_change_24h;
  console.log(changeUSD)
  const capUSD = dat.data[e].market_cap_usd;
  console.log(capUSD)
  const priceUSD = data[e].price_usd;
  console.log(priceUSD)
  //console.log(data[e].price_usd);
  //document.getElementById('usd').textContent = priceUSD;
}




/*former code
async function fetchCryto() {
  const response = await fetch(cryptoUrl);
  const dat = await response.json();
  const priceUSD = dat.data[0].price_usd;
  const changeUSD = dat.data[0].percent_change_24h;
  const capUSD = dat.data[0].market_cap_usd;
  console.log(dat.data[0].price_usd);
  console.log(dat.data[0].percent_change_24h);
  console.log(dat.data[0].market_cap_usd);
  document.getElementById('usd').textContent = priceUSD;
  document.getElementById('cap').textContent = changeUSD;
  document.getElementById('chg').textContent = capUSD;
}
*/
/*
const butt = document.getElementById("butt");
const frm1 = document.getElementById("frm1");

butt.addEventListener('click', function onClick(){
  const val = document.getElementById('frm1').value;
  console.log(val);
  getCryto();
});



const myBtn = document.getElementById("myBtn");
const myBtn2 = document.getElementById("myBtn2");
/*  
myBtn.addEventListener('click', function onClick() {
  myBtn.style.backgroundColor = '#4F8C6F';
  myBtn.style.color = 'white'
  myBtn2.style.backgroundColor = 'gray';
  myBtn2.style.color = 'gray'
})
myBtn2.addEventListener('click', function onClick() {
  myBtn2.style.backgroundColor = '#A66946';
  myBtn2.style.color = 'white'
  myBtn.style.backgroundColor = 'gray';
  myBtn.style.color = 'gray';
})
myBtn.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
myBtn2.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
 // getCryto();
});
/* template
  <h2>BITCOIN<br />(BTC):</h2>
 
  <p3>See How Bitcoin Is Doing In The Market!!!!</p3>

  <p>When The Info Was Accessed: <span id="datetime"></span></p>

  <p2>
   Price in USD: <span id = 'usd'></span><br />
   Market Cap: <span id = 'chg'></span> <br />
   Change %: <span id = 'cap'></span>
  </p2>
      <ul>
      <p>How is the cryto looking? 
        <i id ="thumb" class="fa fa-thumbs-up"></i>
      </p>
      
      <button id = "myBtn" type = "button">Bullish! <span >&#x21E7;</span></button>
      <button id = "myBtn2" type = "button">Bearish!<span >&#x21E9;</span></button><br />
      
     </ul>
*/

/* former code
frm1.addEventListener("submit", myFunction);
function myFunction() {
  const val = document.getElementById('rank').value;
  console.log(val);
  getCryto
}*/

/*former code
async function fetchCryto() {
  const response = await fetch(cryptoUrl);
  const dat = await response.json();
  const priceUSD = dat.data[0].price_usd;
  const changeUSD = dat.data[0].percent_change_24h;
  const capUSD = dat.data[0].market_cap_usd;
  console.log(dat.data[0].price_usd);
  console.log(dat.data[0].percent_change_24h);
  console.log(dat.data[0].market_cap_usd);
  document.getElementById('usd').textContent = priceUSD;
  document.getElementById('cap').textContent = changeUSD;
  document.getElementById('chg').textContent = capUSD;
}
*/