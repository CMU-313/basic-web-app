export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[2]);
    const num_two = parseInt(query_array[4]);
    return (
  // todo add numbers together and convert to string
      );
    }


  return "";
}

  
