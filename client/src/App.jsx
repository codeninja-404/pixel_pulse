

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
