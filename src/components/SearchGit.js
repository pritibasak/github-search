import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_PROJECTS } from "../graphql/queries";

const SearchGit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProjects, { loading, data }] = useLazyQuery(SEARCH_PROJECTS);

  const handleSearch = () => {
    searchProjects({ variables: { query: searchTerm } });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {data.search.edges.map((edge) => (
              <li key={edge.node.id}>{edge.node.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchGit;
