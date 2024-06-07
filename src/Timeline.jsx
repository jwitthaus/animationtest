import * as React from "react";
import { animate, motion } from "framer-motion";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Timeline(props) {
  const timelineLength = props.timelineEnd - props.timelineStart;

  const zoom = (timelineLength / props.visibleDays) * 100;

  const AnimatedBox = motion(Box);

  return (
    <AnimatedBox
      animate={{ width: `${zoom}%` }}
      transition={{ duration: 3 }}
      sx={{ display: "flex" }}
      onUpdate={(latest) => {
        console.log(latest);
      }}
    >
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
    </AnimatedBox>
  );
}
