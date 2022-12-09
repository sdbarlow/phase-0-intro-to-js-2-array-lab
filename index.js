const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newArr = [...cats, name]
    return newArr;
}

function prependCat(name) {
    const newArr = [name, ...cats];
    return newArr;
}

function removeLastCat() {
    const newArr = cats.slice(0, -1);
    return newArr;
}

function removeFirstCat() {
    const newArr = cats.slice(1, cats.length);
    return newArr;
}

