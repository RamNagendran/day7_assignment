// Print the following details "name", "capital" and "flag" using forEach.

const response = new XMLHttpRequest();

response.open('GET', 'https://restcountries.com/v3.1/all')
response.send();

response.onload = () => {
    const result = JSON.parse(response.responseText)
    if (result && result.length > 0) {
        result.forEach((data, index) => {
            console.log(` ${index + 1}. 
                Common Name: ${data.name.common}
                Official Name: ${data.name.official}
                Capital : ${data.capital}
                Flag : ${data.flag}
            `)
        })
    }
}