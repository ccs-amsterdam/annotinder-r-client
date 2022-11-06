import React from "react";
import { AnnotatorRClient, ResponsiveContainer } from "annotinder-client";
import { GlobalStyle } from "annotinder-client";

const App = () => {
  return (
    <ResponsiveContainer>
      <GlobalStyle />

      <AnnotatorRClient />
    </ResponsiveContainer>
  );
};

export default App;
