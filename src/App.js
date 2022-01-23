import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClerkView from "./pages/ClerkView";
import GetNumberView from "./pages/GetNumberView";
import BoardView from "./pages/BoardView";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center align-items-center p-2" style={{flexGrow: 1}}>
        <div className="col-md-8">
          <Routes>
            {/* <Route exact path="/" element={<p>System obsługi patentów</p>} /> */}
            <Route exact path="/urzednik/:clerkNumber" element={<ClerkView />} />
            <Route exact path="/rejestracja" element={<GetNumberView />} />
            <Route exact path="/tablica" element={<BoardView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
