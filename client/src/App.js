import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Database from "./databaseTemplates/Database"
import Page from "./pageTemplates/Page"
import Page2 from "./pageTemplates/page2"

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
