import { useEffect, useRef, useState } from 'react';
import './App.css';
import Child from './Child';

function App() {


  const [a,setA] = useState("a");
  const [b,setB] = useState("b");


  // useEffect(() => { // did mount
  //   console.log("UEF empty array");
  //   setLoading(false);
  // }, []);

  // useEffect(() => { // read on mounting and on loading state change
  //   console.log("UEF loading inside array");
  // }, [loading])

  // useEffect(() => { // read on mounting and on each state change it runs
  //   console.log("No array");
  // });

  return (
    <>
    
    {console.log("INSIDE RETURN")}
    {console.log("A ", a)}
    {console.log("B ", b)}

    <div className="App">
      {/* <Child /> */}
      <h2>
        HOOKS
      </h2>
      <button
        onClick={e => {
          setA("aa");
          console.log("BETWEEN SETSTATES")
          setB("bb");
        }}>Sync update
      </button>
      <button
      onClick={e => {
        Promise.resolve().then(response => {
          setA("aa");
          console.log("BETWEEN SETSTATES")
          setB("bb");
        });
      }}>Async update
      </button>
    </div>
    </>
  );
}

export default App;
