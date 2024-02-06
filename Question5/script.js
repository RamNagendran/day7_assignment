// Print the countries that users US Dollar as currency.

const response = new XMLHttpRequest();

response.open('GET', 'https://restcountries.com/v3.1/all')
response.send();

response.onload = () => {
    const result = JSON.parse(response.responseText)
    if (result && result.length > 0) {
        const usDollar_countries = result.filter((items) => {
            return items.currencies && items.currencies['USD']
        })
        console.log(usDollar_countries)
    }
}