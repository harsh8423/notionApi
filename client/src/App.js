import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Database from "../../../../../Desktop/notion/frontend/src/databaseTemplates/Database"
import Page from "../../../../../Desktop/notion/frontend/src/pageTemplates/Page"
import Page2 from "../../../../../Desktop/notion/frontend/src/pageTemplates/page2"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Database />} />
        <Route exact path="/Page" element={<Page />} />
        <Route exact path="/Page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}



export default App;
