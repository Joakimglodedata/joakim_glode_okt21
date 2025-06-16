const æ = (selector) => document.querySelector(selector);
const ø = (selector) => console.log(selector);
// æ(ø(".flexCenterRow"))
// console.log(document.querySelector(".flexCenterRow"))

// Asynkron funksjon

async function fetchData() {
    const frtuiBowl = [{fruit: "Apple"}, {vegetable: "Potato"}, {berry: "Strawberry"} ]
    ø(fruitBowl)
    return fruitBowl
}

ø("Waiting for data")

async function receiveData() {
    try {  
        const data = await fetchData()
        ø(data)

        const response = data[0].fruit
        ø(response)
    } catch {
        ø("Noe gjekk galt")
    }
}

receiveData()


// 
// 

async function displayData() {
    try { 
        const data = [{fruit: "Apple"}, {vegetable: "Potato"}, {berry: "Strawberry"} ] // Data
        const response = data[1].vegetable
        console.log(response)
    } catch {
        ø("Noe gjekk galt")
    }
}

// 
// 

async function fetchJson() {
    const data = await fetch("data.json")
    ø(data)
    return data
}


async function displayJson () {
    const response = await fetchJson()

    const fruitBowl = await response.json()
    ø(fruitBowl)

    const displayJson = æ("#displayJson")

    fruitBowl.forEach(fruit => {if (fruit.fruit) { 
        const li = document.createElement("li")
        li.textContent = fruit.fruit
        displayJson.appendChild(li)}
    })
}

displayJson()