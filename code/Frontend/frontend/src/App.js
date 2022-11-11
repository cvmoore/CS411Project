import React from 'react';
import {useState} from 'react'
import {setMessage} from 'react'
import './App.css';

function App() {
  const [keyword, setKeyword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://87erszuvx0.execute-api.us-east-1.amazonaws.com/default/backendHandler", {
        method: "POST",
        body: JSON.stringify({
          keyword: keyword,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div className="wrapper">
      <h1>Input Search Keyword</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Keyword</p>
           <input
           type="text"
           value={keyword}
           placeholder="Keyword"
           onChange={(e) => setKeyword(e.target.value)}
         />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
