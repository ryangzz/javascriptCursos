let obj1 = { a: 1, b: 3 },
    obj2 = { c: 2, d: 4 };
let obj3 = {...obj1, ...obj2 };
console.log(obj3);