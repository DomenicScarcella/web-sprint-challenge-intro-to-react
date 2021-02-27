import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([])

  useEffect(() => {
    axios
      .get('http://swapi.dev/api/people/')
      .then (res => {
        setPeople(res.data.results)
        console.log(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const StyledApp = styled.div`
  background-color: lightyellow;
  width: 100%;
  margin: auto;
  padding: 0;
  min-width: 480px;
  max-width: 1080px;
  height: auto;
  text-align: center;
  font-size: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  `

  return (
    <StyledApp>
      <h1>Star Wars</h1>
        <div>
          {
            people.map(p => {
              return (
              <>
                <h2>{p.name}</h2>
                <p><strong>Height:</strong> {p.height}<br /><strong>Mass:</strong> {p.mass}<br /><strong>Birth year:</strong> {p.birth_year}<br /><br /></p>
              </>
              )
            })
          }
        </div>
    </StyledApp>
  );
}

export default App;
