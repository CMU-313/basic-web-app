import { BubbleSort, MergeSort } from "./Sort"

export default function QueryProcessor(query: string): string {

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const sortMatch = query.match(/Sort the numbers: (\d+), (\d+), (\d+)/);
  if (sortMatch) {
    const numbers = [ sortMatch[1], sortMatch[2], sortMatch[3] ];
    const sorted = BubbleSort(numbers);
    return sorted.join(", "); // return a comma-separated list
  }

  return "";
}

