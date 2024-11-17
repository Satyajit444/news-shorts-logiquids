import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isErrorPage = location.pathname == "/";
  return (
    <>
      {isErrorPage && <Navbar />}
      <div className="min-h-screen">{children}</div>
      {isErrorPage && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AppLayout>
  </Router>
);

export default App;
