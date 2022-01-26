fetch('https://api.coinlore.net/api/tickers/')
.then(res => res.json())
.then(data => console.log(data))