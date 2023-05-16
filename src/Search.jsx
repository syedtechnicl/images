import Card from "./Card";
import { useState } from "react";

const Search = () => {
  const [initial, update] = useState("");

  return (
    <>
      <h1 className="bg bg-success p-4 text-white text-uppercase">
        Just Type the any image name instent you Got {initial}
      </h1>

      <input
        className="form-control"
        type="text"
        placeholder="Search any Name"
        value={initial}
        onChange={(e) => {
          update(e.target.value);
        }}
      />
      <br />
      <Card name={initial} />
    </>
  );
};
export default Search;
