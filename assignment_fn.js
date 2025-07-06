let p = "Hello"

function reverse_string(st){
    let s = st.split(""); 

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let hold = s[i];
        s[i]     = s[j];
        s[j]     = hold;
        i++;
        j--;
    }

    return s.join("");
}

console.log(reverse_string(p))

function find_largest(arr) {
    if (arr.length === 0) return null;

    let max     = arr[0];
    for (let i  = 1; i < arr.length; i++) {
        if (arr[i]    > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(find_largest([5, 8, 3, 10, 2]));


let num = [1, 2, 3, 4, 5];
let doubled = num.map(num => num*2);
console.log(doubled);

let num1 = [1, 2, 3, 4, 5, 6];
let evens = num1.filter(num1 => num1 % 2 === 0);
console.log(evens);