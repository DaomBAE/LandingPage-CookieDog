import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/components/container/Footer";
import Header from "../src/components/container/Header";
import Main from "./pages/Main";
import Register from './pages/Register';
import Albums from "./pages/Albums";

function App() {
  
  const containerStyle = {
    backgroundColor: 'black', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <BrowserRouter>
      <div style={containerStyle} className="flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/project/:projectIndex" element={<Albums />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
