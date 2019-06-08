import React from "react";
import Spinner from './Spinner';
import "./App.css";

const Ayah = ({ data }) => {
  if (!data) return <Spinner/>;
  return (
    <div className="ayah">
      <h3>{data.data.data.surah.name}</h3>
      <p>{data.data.data.text}</p>
    </div>
  );
};

export default Ayah;
