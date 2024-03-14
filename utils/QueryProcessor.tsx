import { isPrimitive } from "util";

function isSquareAndCube(number: number) {
  const squareRoot = Math.sqrt(number);
  const cubeRoot = Math.cbrt(number);
  
  return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
}

function isPrime(num: number) {
  for (let i = 2; i < num; i++) {
    if (Number.isInteger(num / i)) return false;
  }
  
  return true
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("name")) {
    return "Jam";
  } else if (query.includes("Which of the following numbers is the largest:")) {
    let i = query.indexOf(":");
    let j = query.indexOf("?");
    let s = query.substring(i + 1, j);
    let parts = s.split(", ");
    let nums = parts.map(e => parseInt(e))
    let maxi = nums.reduce((acc, cur) => Math.max(acc, cur));
    return maxi.toString();
  } else if (query.includes("What is") &&  query.includes("plus")) {
    let strs = query.match(/\d+/g)!;
    let numbers = strs.map(Number);
    return (numbers.reduce((acc, cur) => acc + cur).toString());
  } else if (query.includes("What is") && query.includes("multiplied by")) {
    let strs = query.match(/\d+/g)!;
    let numbers = strs.map(Number);
    return (numbers.reduce((acc, cur) => acc * cur).toString());
  } else if (query.includes("Which of the following numbers is both a square and a cube:")) {
    let strs = query.match(/\d+/g)!;
    let numbers = strs.map(Number);
    return (numbers.filter(e => isSquareAndCube(e)).toString());
  } else if (query.includes("Which of the following numbers are primes:")) {
    let strs = query.match(/\d+/g)!;
    let numbers = strs.map(Number);
    numbers = numbers.filter(e => isPrime(e));
    return numbers.toString();
  }

  return "";
}
