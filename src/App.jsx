import { useState } from "react";

import "./App.css";
import Allcards from "./component/Allcards";
import { data } from "./utils/data";
//console.log(data);

function App() {
  const [val, setval] = useState("");
  const [filterdata, setfilterdata] = useState(data);
  function filterhandler() {
    let res = data.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    console.log(res);
    setfilterdata(res);
  }

  return (
    <div className="bg-gray-300 text-center ">
      <h1 className="text-3xl pt-4 md:text-3xl">Flipheart</h1>
      <div className="mt-5">
        <input
          className="p-3 rounded-tl-3xl rounded-bl-3xl
       bg-green-100 md:text-3xl"
          type="text"
          placeholder="Search to buy.."
          onChange={(e) => setval(e.target.value)}
        />
        <button
          className="p-3 px-6 rounded-tr-3xl rounded-br-3xl bg-green-500 md:text-3xl
      "
          on
          onClick={filterhandler}
        >
          search
        </button>
      </div>
        {filterdata.length<=0 ? <h1 className="text-6xl">Noitem</h1> :<Allcards data={filterdata} /> }
      
    </div>
  );
}

export default App;
