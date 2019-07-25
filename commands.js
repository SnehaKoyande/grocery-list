const fs = require('fs');

const readFile = (fileName) =>{
    try{
        return JSON.parse(fs.readFileSync(fileName));
    }
    catch(error){
        return [];
    }
};


const add = (item, price) => {
    

    let groceryList = [];
    
    groceryList = readFile('groceryList')

    let index = groceryList.findIndex((x) => x.item == item);
    
    if (index == -1){
        groceryList.push({item,price})
    } else {
        groceryList[index].price += price
    }

    fs.writeFileSync('groceryList.json', JSON.stringify(groceryList));
}

const remove = (item) =>{

    groceryList = readFile('groceryList.json')

    let index = groceryList.findIndex((x) => x.item == item);

    if (index == -1){
        console.log(`${item} does not exist in the list`)
    } else {
        groceryList.splice(index, 1)
    }

    fs.writeFileSync('groceryList.json', JSON.stringify(groceryList));
};

const print = () => {

    groceryList = readFile('groceryList.json')
    
    
    for (let i = 0; i< groceryList.length; i++ ) {
        console.log(`${i+1}.  Item: ${groceryList[i].item}  Price: ${groceryList[i].price}`)
    }
};

const priceOf = (item) => {

    groceryList = readFile('groceryList.json')

    let index = groceryList.findIndex((x) => x.item == item);

    if (index == -1){
        console.log(`${item} does not exist in the list`)
    } else {
        console.log(`The price of ${groceryList[index].item} is ${groceryList[index].price}.`)
    }
    
}

module.exports = {
    add,
    remove,
    print,
    priceOf
}