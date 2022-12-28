import "./App.css";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import AnimatedCursor from "react-animated-cursor";

import "normalize.css/normalize.css";

// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
      <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="0, 0, 0"
        outerAlpha={0.6}
        innerScale={2}
        outerScale={4}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}

export default App;
