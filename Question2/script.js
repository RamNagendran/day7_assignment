// Get all the countries which has the population of less than 2 lakhs using filter

const response = new XMLHttpRequest();

response.open('GET', 'https://restcountries.com/v3.1/all')
response.send();

response.onload = () => {
    const result = JSON.parse(response.responseText)
    if (result && result.length > 0) {
        const lessThan_2lkhs_countries = result.filter((items) => {
            if (items.population < 200000) {
                return items
            }
        })
        console.log(lessThan_2lkhs_countries)
    }
}