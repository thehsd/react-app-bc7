import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-700"> this is react app</h1>
      <button className="btn">click me</button>
      <div className="rounded-sm border border-stone-950 m-2 p-3 flex justify-between">
        <div className="bg-emerald-500 p-3  hover:rounded-3xl transition-all">
          box 1
        </div>
        <div className="bg-indigo-800 p-3">box 2</div>
      </div>
    </>
  );
};
export default App;
