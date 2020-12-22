import "../src/reset.css";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header className="header" />
      <Nav className="navigation-menu" />
      <Content />
      <Footer className="footer" />
    </div>
  );
}

export default App;
