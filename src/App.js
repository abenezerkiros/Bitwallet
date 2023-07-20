import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages

import Wallet from "./views/wallet"
import Page2 from "./views/page2"
import Page3 from "./views/page3"
import Settings from "./views/settings"
import NotFound from "./views/404"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<NotFound  page="Home"/>} />
          <Route exact path="wallet" element={<Wallet />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
          <Route exact path="settings" element={<Settings />} />
          <Route exact path="*" element={<NotFound  page="NotFound"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;