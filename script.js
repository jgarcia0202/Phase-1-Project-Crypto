async function getCryto() {
    const response = await fetch(cryptoUrl);
    const dat = await response.json();
    const symbArray= [];
    for (var i = 0; i < 20; i++) {
      const symbol = dat.data[i].symbol;
      console.log(symbol);
      symbArray = symbol.push()
    }
    document.getElementById('sym').textContent = symbArray;}