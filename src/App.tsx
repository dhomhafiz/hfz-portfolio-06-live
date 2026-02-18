import React, { useState, useEffect, useMemo } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Main />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </FadeIn>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
