import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Premium from "./components/Pages/Premium";
import NoPage from "./components/Pages/NoPage";
import Download from "./components/Pages/Download";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import Support from "./components/Pages/Support";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header/>
        <Routes>
            <Route index element={<Main />} />
            <Route path="/" element={<Main />}/>
            <Route path="/premium" element={<Premium />} />
            <Route path="/download" element={<Download />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
              <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
