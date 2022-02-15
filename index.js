const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function(e){
  const reason = prompt("Why do you think so?");
  alert("You believe the market is bullish because: "+ reason+ ".");
});

const myBtn2 = document.getElementById("myBtn2");
myBtn2.addEventListener("click", function(e){
  const reason = prompt("Why do you think so?");
  alert("You believe the market is bearish because: "+ reason+ ".");
});

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
const thumb = document.getElementById("thumb");
thumb.addEventListener("click", function(e){
  e.classList.toggle("fa-thumbs-down");
})

//Below is urls
const cryptoUrl = 'https://api.coinlore.net/api/tickers/?start=0&limit=1';
const timeUrl = 'http://worldclockapi.com/api/json/est/now'

//below is former code for button
function function1() {
    document.getElementById("system").innerHTML = "You have voted...</br> It seems that you believe that the crypto market is looking Bullish! That means that the market is going up!!!";
  }
  function function2() {
    document.getElementById("system").innerHTML = "You have voted...</br> It seems that you believe that the crypto market is looking Bearish! That means that the market is going down!!!";
    }
  //below is the api data gathering
async function getCryto() {
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


async function getTime() {
  const response = await fetch(timeUrl);
  const data = await response.json();
  const { currentDateTime, dayOfTheWeek} = data;
  console.log(currentDateTime);
  console.log(dayOfTheWeek);
  // timeZoneName: "Eastern Standard Time"
  document.getElementById('day').textContent = dayOfTheWeek;
  document.getElementById('time').textContent = currentDateTime;
}

getCryto();
getTime();
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  const name = prompt("Hello, what is your name? :");
  document.body.innerHTML += "<p>Welcome fellow crypto investor " + name+ "!</p>";
 // document.body.innerHTML += `Welcome fellow crypto investor ${prompt}!`;
});