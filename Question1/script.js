

// Get all the countries from Asian continent using filter

const response = new XMLHttpRequest();

response.open('GET', 'https://restcountries.com/v3.1/all')
response.send();

response.onload = () => {
    const result = JSON.parse(response.responseText)
    if (result && result.length > 0) {
        const asianCountries = result.filter((items) => {
            if (items.region === 'Asia') {
                return items
            }
        })
        console.log(asianCountries)
    }
}