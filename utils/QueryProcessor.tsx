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
  if (query.toLowerCase().includes("plus")) {
    // Attempt to extract numbers before and after the word "plus"
    const parts = query.match(/(\d+)\s+plus\s+(\d+)/i);
    if (parts && parts.length === 3) { // Check if the match was successful and we have the correct parts
      const num1 = parseInt(parts[1], 10); // First number
      const num2 = parseInt(parts[2], 10); // Second number
      return (num1 + num2).toString(); // Perform the addition and return the result as a string
    }
  }

  return "";
}
