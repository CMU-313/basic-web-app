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
  }

  return "";
}
