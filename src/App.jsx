import { useState } from "react";

function App() {

  return (
    <>
    <div className="flex flex-wrap justify-center w-full h-screen bg-[url(.\images\img-2.jpg)] bg-cover text-black">
       <div className="border-slate-400 border-2 flex flex-wrap justify-center my-auto opacity-70 w-[40%] h-[45%] bg-black rounded-3xl">
        <div className="w-[90%] h-[40%] mt-4 bg-white rounded-3xl"></div>
        <div className="w-[90%] h-[40%] bg-white rounded-3xl"></div>
       </div>
    </div>
    </>
  );
}

export default App;
