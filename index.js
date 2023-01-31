// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(id){
    cats.push(id);
 return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    const newArr = [...cats, name]
    return newArr;
}

function prependCat(name) {
    const newArr = [name, ...cats];
    return newArr;
}

function removeLastCat(){
    const newCats = cats.slice(0,2);
    return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}