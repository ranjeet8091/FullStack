/* Type your javascript code here */
// Task 1
function add(...args) {
    return args.reduce((sum, curr) => sum + curr, 0);
}
console.log(add(1, 2, 3, 4)); 
//Task 2
const newarr = [1, 2,[3, 9], [5, [10, 11]]];
function getIndex(Array, tartArray) {
    for (let i = 0; i < Array.length; i++) {
        if (JSON.stringify(Array[i]) === JSON.stringify(tartArray)) {
            return i;
        }
    }
    return -1;
}
console.log(getIndex(newarr, [3, 5]));
console.log(getIndex(newarr, [3, 9]));