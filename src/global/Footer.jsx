import react from "react";
import { Box, Typography } from "@mui/material";
export default function Footer() {
  return (
    <>
      <Box mt="4%" sx={{ background: "black" }} bottom="0">
        <Box
          sx={{ background: "black" }}
          display="flex"
          justifyContent="center"
        >
          <Typography sx={{ position: "fixed", bottom: 0 }} variant="body1">
            Made with <>🧡</> by Anirudh
          </Typography>
        </Box>
      </Box>
    </>
  );
}
