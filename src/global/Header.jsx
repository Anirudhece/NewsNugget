import React from "react";
import { Box, Typography } from "@mui/material";
export default function Header() {
  return (
    <>
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" fontWeight="600">
            NewsNuggets <>📰</>
          </Typography>
        </Box>
        <Box display="flex">
          <Typography mx variant="h6">
            {/* {" "} */}
            summarizer
          </Typography>
        </Box>
      </Box>
    </>
  );
}
