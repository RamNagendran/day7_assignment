// Print the total population of all the countries using reduce.

const response = new XMLHttpRequest();

response.open('GET', 'https://restcountries.com/v3.1/all')
response.send();

response.onload = () => {
    const result = JSON.parse(response.responseText)
    if (result && result.length > 0) {
        const totalPopulation = result.map((items) => items.population).reduce((a, b) => a + b)
        console.log(`Total Population: ${totalPopulation}`)
    }
}