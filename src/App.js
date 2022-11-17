import React from "react";
import { AnnotatorRClient, ResponsiveContainer, GlobalStyle } from "annotinder-client";

const App = () => {
  return (
    <ResponsiveContainer>
      <GlobalStyle />
      <AnnotatorRClient />
    </ResponsiveContainer>
  );
};

export default App;
