import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar"; 
import Homepage from "./pages/Home";
import Learn from "./pages/Learn";
import ProfilePage from "./pages/Profile";
import BottomTextInput from "./components/BottomTextInput";
import "./App.css"; 

function App() {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-800">
        <div className="fixed top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        
        <div className="flex flex-1 pt-16">
          <SideBar />
          <div className="flex-1 ml-16 overflow-y-auto pb-20">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 z-20">
          <BottomTextInput 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What's Quackening..."
          />
        </div>
      </div>
    </Router>
  );
}

export default App;