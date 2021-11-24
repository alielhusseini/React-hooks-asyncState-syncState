import { useEffect, useRef, useState } from 'react';
import './App.css';

function Child() {

  console.log("CHILD TOP OF FUNCTION");

  const [loading,setLoading] = useState(true);

  const x = useRef(10); 

  useEffect(() => { // did mount
    console.log("CHILD UEF empty array");
    setLoading(false);
  }, []);

  useEffect(() => { // read on mounting and on loading state change
    console.log("CHILD UEF loading inside array");
  }, [loading])

  useEffect(() => { // read on mounting and on each state change it runs
    console.log("CHILD No array");
  });

  return (
    <>
    {console.log("CHILD INSIDE RETURN")}
    <div className="App">
      <h2>
        CHILD HOOKS
      </h2>
    </div>
    </>
  );
}

export default Child;
