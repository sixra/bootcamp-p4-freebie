import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import "./Categories.scss"
import { filterAdsSearch } from '../../Redux/Actions/AdsAction'
import { useDispatch } from 'react-redux'

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {

    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const dispatch = useDispatch();

  return (
    <div className="searchBarContainer">
      <div >
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div >
          {!wordEntered ? (
            <AiOutlineSearch />
          ) : (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="searchBarOutput">
          {filteredData.slice(0, 10).map((value) => {
            return (
              <div className="searchBarOutputItem" rel="noreferrer" target="_blank" onClick={() => dispatch(filterAdsSearch(data, value.title))}>
                <span>{value.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;