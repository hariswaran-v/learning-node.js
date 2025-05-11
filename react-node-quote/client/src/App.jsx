import TheNavbar from "./components/TheNavbar";
import Quote from "./components/Quote";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const fetchResult = await fetch("http://localhost:3000/");
        const quotesData = await fetchResult.json();
        console.log("Fetched quotes:", quotesData); // <-- Check this

        setQuotes(quotesData);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    }
    fetchQuotes();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen ">
      <TheNavbar />
      <main className=" m-10 space-y-10">
        {quotes.length === 0 && (
          <div className="bg-white p-5 rounded font-semibold">
            No quotes data available!
          </div>
        )}

        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote.quote} author={quote.author} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
