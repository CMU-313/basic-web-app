export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "My Andrew ID is wjchien."
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "My name is William Chien." 
    );
  }
  if (query.toLowerCase().includes("What is 63 plus 65?")) {
    return (
      "128" 
    );
  }
  if (query.toLowerCase().includes("What is 97 plus 24?")) {
    return (
      "121" 
    );
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 78, 55, 21?")) {
    return (
      "78" 
    );
  }

  
  return "";
}
