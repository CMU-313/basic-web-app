import { useState } from "react";
export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <h1>Welcome!!</h1>
      <p>Please enter your query in the box below:</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Submit</button>
    </>
  );
}
