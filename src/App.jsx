import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import Albums from "./pages/Albums";

function App() {
  
  const containerStyle = {
    backgroundColor: '#2B2929', 
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
          <Route path="/project/:projectIndex" element={<Albums />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
