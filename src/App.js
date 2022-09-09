import React from "react";
import { AnnotatorRClient, ResponsiveContainer } from "annotinder-client";
import "./style.css";

const App = () => {
  return (
    <ResponsiveContainer>
      <AnnotatorRClient />
    </ResponsiveContainer>
  );
};

export default App;
