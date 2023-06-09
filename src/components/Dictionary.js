import React, { useState } from "react";
import axios from "axios";
import Menu from './Menu';

function Dictionary() {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [examples, setExamples] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        console.log(response.data);
        setDefinitions(response.data[0].meanings[0].definitions);
        setSynonyms(response.data[0].meanings[0].synonyms);
        setExamples(response.data[0].meanings[0].examples);
      })
      .catch((error) => {
        console.log(error);
        setDefinitions([]);
        setSynonyms([]);
        setExamples([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Menu /> <br />

      <h1>DICTIONARY APP</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Word: 
          <input type="text" value={word} onChange={handleWordChange} />
        </label>
        
        <button type="submit">Search</button>
      </form>

      {isLoading && <img src={require('./gifs/loading.gif')} alt="Loading" />}

      {definitions && definitions.length > 0 && !isLoading && (
        <div>
          <h2>Definitions:</h2>
          <ul>
            {definitions.map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
          </ul>
          <br />
        </div>
      )}

      {synonyms && synonyms.length > 0 && !isLoading && (
        <div>
          <h2>Synonyms:</h2>
          <ul>
            {synonyms.map((synonym, index) => (
              <li key={index}>{synonym}</li>
            ))}
          </ul>
          <br />
        </div>
      )}

      {examples && examples.length > 0 && !isLoading && (
        <div>
          <h2>Examples:</h2>
          <ul>
            {examples.map((example, index) => (
              <li key={index}>{example.text}</li>
            ))}
          </ul>
          <br />
        </div>
      )}

      {!isLoading && definitions.length === 0 && synonyms.length === 0 && examples.length === 0 && (
        <div>
          <p>Brak wyników</p>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
