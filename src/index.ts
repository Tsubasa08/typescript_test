console.log("Hello TypeScript!!!");

let a = 1 + 2;
let b = a + 2;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

function add(a: number, b: number) {
  return a + b;
}

console.log(add(a, b));
