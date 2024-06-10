import { Box, Button, Paper } from "@mui/material";
import "./App.css";
import Timeline from "./Timeline";
import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  const [visibleDays, setVisibleDays] = useState(7);
  const timelineStart = 0; //in days
  const timelineEnd = 100; // in

  return (
    <Box>
      <Box sx={{ position: "fixed", top: "120px" }}>
        <Button
          variant="contained"
          sx={{ m: 1 }}
          onClick={() => setVisibleDays(7)}
        >
          7
        </Button>
        <Button
          variant="contained"
          sx={{ m: 1 }}
          onClick={() => setVisibleDays(31)}
        >
          31
        </Button>
      </Box>
      <ScrollContainer className="scroll-container">
        <Timeline
          visibleDays={visibleDays}
          timelineStart={timelineStart}
          timelineEnd={timelineEnd}
        />
      </ScrollContainer>
    </Box>
  );
}

export default App;
