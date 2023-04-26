import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StevePage from "./pages/StevePage";
import MarkPage from "./pages/MarkPage";
import ElonPage from "./pages/ElonPage";
import JackPage from "./pages/JackPage";
import ErrorPage from "./pages/ErrorPage";
import ShowPost from "./pages/ShowPost";
import BillPage from "./pages/BillPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import StagiairePage from "./pages/StagiairePage";
import { useState } from "react";
import ShowUser from "./pages/ShowStagiaire";

function App() {
	// const [color, setColor] = useState("bg-blue-500");
	const [society, setSociety] = useState("Apple");
	return (
    <Router>
      <Routes>
        <Route path="/" element={<StevePage society={society} />} />
        <Route path="/mark" element={<MarkPage />} />
        <Route path="/elon" element={<ElonPage />} />
        <Route path="/jack" element={<JackPage />} />
        <Route path="/bill" element={<BillPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/posts/:id" element={<ShowPost />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/stagiaire" element={<StagiairePage />} />
        <Route path="/stagiaire/:id" element={<ShowUser />} />
        <Route path="*" element={<ErrorPage />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
