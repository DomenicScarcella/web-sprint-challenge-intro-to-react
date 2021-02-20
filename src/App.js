import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

const data = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "http://swapi.dev/api/planets/1/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: [],
    vehicles: [
      "http://swapi.dev/api/vehicles/14/",
      "http://swapi.dev/api/vehicles/30/",
    ],
    starships: [
      "http://swapi.dev/api/starships/12/",
      "http://swapi.dev/api/starships/22/",
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "http://swapi.dev/api/people/1/",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "http://swapi.dev/api/planets/1/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace",
      "Attack of the Clones",
      "Revenge of the Sith",
    ],
    species: ["http://swapi.dev/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "http://swapi.dev/api/people/2/",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "http://swapi.dev/api/planets/8/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace",
      "Attack of the Clones",
      "Revenge of the Sith",
    ],
    species: ["http://swapi.dev/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "http://swapi.dev/api/people/3/",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "http://swapi.dev/api/planets/1/",

    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: [],
    vehicles: [],
    starships: ["http://swapi.dev/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "http://swapi.dev/api/people/4/",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    homeworld: "http://swapi.dev/api/planets/2/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: [],
    vehicles: ["http://swapi.dev/api/vehicles/30/"],
    starships: [],
    created: "2014-12-10T15:20:09.791000Z",
    edited: "2014-12-20T21:17:50.315000Z",
    url: "http://swapi.dev/api/people/5/",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
    homeworld: "http://swapi.dev/api/planets/1/",
    films: ["A New Hope", "Attack of the Clones", "Revenge of the Sith"],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:52:14.024000Z",
    edited: "2014-12-20T21:17:50.317000Z",
    url: "http://swapi.dev/api/people/6/",
  },
];



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState ('')

  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/people/`)
      .then (res => {
        setPeople(res.data)
        console.log(res.data)
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
      <h1 className="Header">I'm not visually expressive, and I don't make things;  I fix things that are broken, I spot errors that other people miss, and I correct things.  But staring at a blank page and having to make something is excruciating for me.  I'm awful at making things from scratch, especially visual things, especially when I have to know a foreign language (which JavaScript is for me) in order to execute it.  Everything I've done at Lambda so far has been copying things that work and tweaking them to fit the details of the assignment/project.  But short of completely stealing someone else's code, I don't know what to copy for this project.  And I have no idea how to create things from scratch.  There aren't even multiple tests in the CodeGrade for me to monitor any progress I might be making.  I'm totally lost.  I don't want to be a web designer.  I don't want to be a person who has to make things.  I know I'm absolutely failing this Sprint Challenge.  I'm not writing any of this to be funny nor cute.  I'm doing this because the alternative is descending into a fit of rage and disturbing my neighbors with loud noises.  Here are some Star Wars people I did by copying and pasting 42 paragraph tags:</h1>
      
      <p>Name: {data[0].name}</p>
      <p>Height: {data[0].height}</p>
      <p>Mass: {data[0].mass}</p>
      <p>Hair: {data[0].hair_color}</p>
      <p>Eyes: {data[0].eye_color}</p>
      <p>Birth Year: {data[0].birth_year}</p>
      <p>Films: {data[0].films}</p>
      <p>Name: {data[1].name}</p>
      <p>Height: {data[1].height}</p>
      <p>Mass: {data[1].mass}</p>
      <p>Hair: {data[1].hair_color}</p>
      <p>Eyes: {data[1].eye_color}</p>
      <p>Birth Year: {data[1].birth_year}</p>
      <p>Films: {data[1].films}</p>
      <p>Name: {data[2].name}</p>
      <p>Height: {data[2].height}</p>
      <p>Mass: {data[2].mass}</p>
      <p>Hair: {data[2].hair_color}</p>
      <p>Eyes: {data[2].eye_color}</p>
      <p>Birth Year: {data[2].birth_year}</p>
      <p>Films: {data[2].films}</p>
      <p>Name: {data[3].name}</p>
      <p>Height: {data[3].height}</p>
      <p>Mass: {data[3].mass}</p>
      <p>Hair: {data[3].hair_color}</p>
      <p>Eyes: {data[3].eye_color}</p>
      <p>Birth Year: {data[3].birth_year}</p>
      <p>Films: {data[3].films}</p>
      <p>Name: {data[4].name}</p>
      <p>Height: {data[4].height}</p>
      <p>Mass: {data[4].mass}</p>
      <p>Hair: {data[4].hair_color}</p>
      <p>Eyes: {data[4].eye_color}</p>
      <p>Birth Year: {data[4].birth_year}</p>
      <p>Films: {data[4].films}</p>
      <p>Name: {data[5].name}</p>
      <p>Height: {data[5].height}</p>
      <p>Mass: {data[5].mass}</p>
      <p>Hair: {data[5].hair_color}</p>
      <p>Eyes: {data[5].eye_color}</p>
      <p>Birth Year: {data[5].birth_year}</p>
      <p>Films: {data[5].films}</p>
    </StyledApp>
  );
}

export default App;
