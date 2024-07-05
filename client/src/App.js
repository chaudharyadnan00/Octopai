import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Position from "./pages/Position";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/position/:exerciseId"
            element={
              <ProtectedRoute>
                <Position />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
