async function getData() {
    const response = await fetch('https://api.pokemontcg.io/v2/cards?q=name:pikachu');
    const data = await response.json();
    console.log(data[50]);
    renderTable(data)
}


function renderTable(pika) {
    const tableColumns = ['Image', 'Set Name', 'Set Symbol', 'Cardmarket link'];
    const tableData = [];
    for (let i = 0; i < pika.length; i++) {
        const pikaArray = [];
        pikaArray.push(pika[i].images.small);
        pikaArray.push(pika[i].set.name);
        pikaArray.push(pika[i].set.images.symbol);
        pikaArray.push(pika[i].cardmarket.url);

        tableData.push(pikaArray);
    }



    new gridjs.Grid({
        columns: tableColumns,
        data: tableData,
        search: true,
        sort: true
    }).render(document.getElementById('mytable'));
}

getData();