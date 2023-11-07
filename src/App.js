import "./App.css";
import "./index.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import RequireUserAuth from "./components/Require User/RequireUserAuth";
import HomeFeed from "./components/Home Feed/HomeFeed";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Template from "./components/FormBuilder/Template";
import CreateForm from "./components/FormBuilder/CreateForm";
import CenteredTabs from "./components/FormBuilder/CenteredTabs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RequireUserAuth />}>
          <Route element={<Home />}>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
          </Route>
          <Route path="/formbuilder" element={<Template />} />
          <Route path="/create-form/:id" element={<CreateForm />} />
          <Route path="/create-form/:id" element={<CenteredTabs />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;