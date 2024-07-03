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
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import CreatePost from "./pages/CreatePostPage/CreatePost";
import UpdatePost from "./pages/UpdatePostPage/UpdatePost";
import PostPage from "./pages/PostPage/PostPage";
import ScrollToTop from "./components/Shared/ScrollToTop";
import SearchPage from "./pages/SearchPage/SearchPage";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/update-post/:postId" element={<UpdatePost />}></Route>
        </Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/post/:postSlug" element={<PostPage />}></Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
