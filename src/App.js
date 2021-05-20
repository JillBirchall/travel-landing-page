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
    <>
      <NavBar />
      <SlideShow />
      <PhotoGrid />
      <TourCardContainer />
      <Contact />
      <SignUp />
      <About />
      <Footer />
    </>
  );
}

export default App;
