const re = /(Mister )\w+/g;
const str = 'Mister Smith with Mister Galladon';
const matches = str.matchAll(re);

console.info(matches); // Object [RegExp String Iterator] {}
console.info(Array.from(matches));
