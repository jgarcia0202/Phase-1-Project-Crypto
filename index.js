//Below is the url
const cryptoUrl = `https://api.coinlore.net/api/tickers/?`;

  //below is the api data gathering
  document.addEventListener('DOMContentLoaded',() => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchCryto(e.target.number.value-1);
    form.reset()
  })
})

async function fetchCryto(rnk) {
  const response = await fetch(cryptoUrl);
  const dat = await response.json();
  data = dat.data;
  const rank = dat.data[rnk].rank;
  const symbol = dat.data[rnk].symbol;
  const called = dat.data[rnk].name;
  const changeUSD = dat.data[rnk].percent_change_24h;
  const capUSD = dat.data[rnk].market_cap_usd;
  const priceUSD = dat.data[rnk].price_usd;
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteThis)
  btn.textContent = 'X'
  p.textContent = `- Crypto information loading... ${called}... Rank: ${rank}; Symbol: ${symbol}; Percent Change: ${changeUSD}; Market Cap: ${capUSD}; Price: $${priceUSD} `
  p.appendChild(btn)
  document.querySelector('#mainList').appendChild(p)
}

function deleteThis(e){
  e.target.parentNode.remove()
}
