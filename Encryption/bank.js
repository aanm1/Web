function currency(){
    const options = {method: 'GET', headers: {'x-api-key': "3ZnkeJaSjf3rGfZfFUzuXGtD"}};  

    fetch('https://fxethio.com/api/v1/exchange-rates/{ETB}',options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
    });

};

window.onload = currency;