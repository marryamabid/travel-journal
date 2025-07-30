import Entry from "./Compnents/Entry";
import Header from "./Compnents/Header";
import data from "./data";
function App() {
  const travelEntries = data.map((entry) => (
    <Entry key={entry.id} entry={entry} />
  ));
  return (
    <>
      <Header />
      {travelEntries} array of JSX elements
    </>
  );
}

export default App;
