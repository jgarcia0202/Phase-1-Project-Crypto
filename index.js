//Below is the url
const cryptoUrl = `https://api.coinlore.net/api/tickers/?`;

  //below is the api data gathering
  document.addEventListener('DOMContentLoaded',() => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
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
  fetchCryto(val)
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
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `Crypto information loading... ${called}... Rank: ${rank}; Symbol: ${symbol}; Percent Change: ${changeUSD}; Market Cap: ${capUSD}; Price: $${priceUSD} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#mainList').appendChild(p)
}
