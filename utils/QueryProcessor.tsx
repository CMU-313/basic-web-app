export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "chenfang"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Alinaaa"
    );
  }
  const arithmeticMatch = query.match(/what is (\d+) plus (\d+)\?/);
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1], 10);
    const num2 = parseInt(arithmeticMatch[2], 10);
    return `${num1 + num2}`;
  }

  const largestNumberMatch = query.match(/which of the following numbers is the largest: ([\d, ]+)?/);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const maxNumber = Math.max(...numbers);
    return `${maxNumber}`;
  }

  return "";
}
