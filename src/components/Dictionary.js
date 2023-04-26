import React, { useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState('definition');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const searchDictionary = async () => {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`);
    setResult(response.data[0]);
  };

  const renderResult = () => {
    if (!result) {
      return null;
    }

    switch (selectedOption) {
      case 'definition':
        return result.meanings[0].definitions.map((definition, index) => (
          <p key={index}>{definition.definition}</p>
        ));
      case 'synonyms':
        return result.meanings[0].definitions[0].synonyms.map((synonym, index) => (
          <p key={index}>{synonym}</p>
        ));
      case 'examples':
        return result.meanings[0].definitions[0].examples.map((example, index) => (
          <p key={index}>{example.text}</p>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button onClick={searchDictionary}>Search</button>
      </div>
      <div>
        <label>
          <input type="radio" value="definition" checked={selectedOption === 'definition'} onChange={handleOptionChange} />
          Definition
        </label>
        <label>
          <input type="radio" value="synonyms" checked={selectedOption === 'synonyms'} onChange={handleOptionChange} />
          Synonyms
        </label>
        <label>
          <input type="radio" value="examples" checked={selectedOption === 'examples'} onChange={handleOptionChange} />
          Examples
        </label>
      </div>
      {renderResult()}
    </div>
  );
};

export default Dictionary;