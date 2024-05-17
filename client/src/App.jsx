import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Header from "./components/Header/Header";
import FooterCom from "./components/Footer/FooterCom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>

        <Route path="/projects" element={<ProjectsPage />}></Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
