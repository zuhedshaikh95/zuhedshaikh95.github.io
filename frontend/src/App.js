import { About, Calendar, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Calendar />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}
