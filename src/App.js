import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Home,
  About,
  Courses,
  SingleCourse,
  Instructors,
  Blog,
  Contact,
  Login,
  Register,
  Error,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="courses" element={<Courses />}></Route>
          <Route path="courses/:id" element={<SingleCourse />}></Route>
          <Route path="instructors" element={<Instructors />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
