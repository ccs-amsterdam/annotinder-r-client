import React from "react";

// Main pages. Use below in items to include in header menu
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnnotatorAPIClient } from "ccs-annotator-client";

const App = () => {
  return (
    <Router>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Routes>
          <Route path="/" exact element={<AnnotatorAPIClient fixedRPort={8000} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
