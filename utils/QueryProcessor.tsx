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
  
  if (query.toLowerCase().includes("largest")) {
    const matches = query.match(/\d+/g); // Find all numbers in the query
    if (matches) {
      const numbers = matches.map(Number); // Convert all found strings to numbers
      const largest = Math.max(...numbers); // Find the largest number
      return largest.toString(); // Return the largest number as a string
    }
  }

  // Handling simple arithmetic expressions
  const arithmeticMatch = query.match(/(\d+)\s*\+\s*(\d+)/); // Match a basic addition pattern
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1], 10);
    const num2 = parseInt(arithmeticMatch[2], 10);
    return (num1 + num2).toString(); // Perform the addition and return the result as a string
  }

  return "";
}
