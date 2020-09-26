let obj1 = {a:2, b:1}, obj2={c:3, d:4};
let mix = {...obj1, ...obj2};
let {a, b, ...rest} = mix;
console.log({a, b, rest});