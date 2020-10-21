let hacker1 = 'Bobby';

console.log("The driver's name is " + hacker1);

let hacker2 = 'Jay';

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

let string = ''

for (let i = 0; i < hacker1.length; i++) {
  string += `${hacker1[i]} `
}

console.log(string.toUpperCase());

let string2 = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
  string2 += `${hacker2[i]}`
};

if (hacker1 > hacker2) {
console.log(hacker1);
}