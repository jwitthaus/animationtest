import * as React from "react";
import { animate, motion } from "framer-motion";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Timeline(props) {
  const timelineLength = props.timelineEnd - props.timelineStart;

  const zoom = (timelineLength / props.visibleDays) * 100;

  return (
    <Box sx={{ width: `${zoom}%` }}>
      {new Array(50).fill(0).map((_, index) => (
        <Box sx={{ display: "flex" }}>
          {new Array(timelineLength).fill(0).map((_, index) => (
            <Paper
              key={index}
              sx={{
                backgroundColor: "#aaaaaa",
                height: "100px",
                margin: "2px",
                flex: 1,
              }}
            ></Paper>
          ))}
        </Box>
      ))}
    </Box>
  );
}
