import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main className="container mt-4">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
