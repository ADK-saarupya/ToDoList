import { useState } from "react";
import "./App.css";
import List from "./List";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
 

  function handleDeletion(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  function handleEdit(index) {
    let editText = list[index];
    setItem(editText);
    list.splice(index, 1);
    setList([...list]);
  }

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    if(item){
    e.preventDefault();
    setList([...list, item]);
    setItem("");
    
  }
}

  

 

  return (
    <main className="bg-fav bg-opacity-10 w-2/3 m-auto min-h-screen">
      <section>
        <div className="flex items-center justify-center py-12">
          <BsFillCheckCircleFill className="text-blueCol text-3xl" />
          <p className="underline  text-blueCol  text-3xl font-semibold px-2">
            My Todo-s
          </p>
        </div>
        <form
          className="flex justify-center relative left-10"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="Add new..."
              className="border-2 w-96 p-2 rounded-lg"
              onChange={handleChange}
              value={item}
            />
          </div>
          <div className="flex text-blueCol items-center relative right-20">
            <FaCalendarAlt className="mx-2 text-2xl hover:shadow-md shadow-slate-800 cursor-pointer" />
            <button type="submit">
              <IoMdAddCircle className="text-3xl hover:shadow-md shadow-slate-800 cursor-pointer" />
            </button>
          </div>
        </form>
        <hr className="bg-gray-300 h-px my-6 w-11/12 m-auto" />
      </section>
    
      <List
        itemsList={list}
        handleDeletion={handleDeletion}
        handleEdit={handleEdit}

      />
    </main>
  );
}

export default App;
