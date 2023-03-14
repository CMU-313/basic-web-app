export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Sophia Witt"
    );
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[8].substring(0, query_array[8].length - 1));
    const num_two = parseInt(query_array[9].substring(0, query_array[9].length - 1));
    const num_three = parseInt(query_array[10].substring(0, query_array[10].length - 1));
    return (
      (Math.max(num_one, num_two, num_three).toString())
    );
  }
  return "";
}

  
