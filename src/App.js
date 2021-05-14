import "./App.css";
import { NavBar } from "./NavBar";
import { SlideShow } from "./SlideShow";
import { PhotoGrid } from "./PhotoGrid";
import { TourCardContainer } from "./TourCardContainer";
import { Contact } from "./Contact";
import { About } from "./About";
import { SignUp } from "./SignUp";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <PhotoGrid />
      <TourCardContainer />
      <Contact />
      <About />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
