import React, { useState } from "react";

import {
  Container,
  Box,
  Typography,
  TextField,
  Divider,
  Chip,
  Fab,
  CircularProgress
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { green } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Summarizer() {
  const [loading, setLoading] = useState(false);
  const [userProvidedUrl, setUserProvidedUrl] = useState("");
  const [summarizedData, setSummarizedData] = useState("");
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  function isValidUrl(userProvidedUrl) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(userProvidedUrl);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
    setOpenSuccess(false);
  };
  const isValid = userProvidedUrl === "" || isValidUrl(userProvidedUrl);
  const handleSearch = async () => {
    setLoading(true);
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${userProvidedUrl}&length=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "53d05f89e8mshe789a04b6639386p180516jsn3d0816f79641",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com"
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setSummarizedData(result);
    } catch (error) {
      setOpenError(true);
      console.error(error);
    }
    setUserProvidedUrl("");
    setLoading(false);
    setOpenSuccess("true");
  };
  return (
    <>
      <Container>
        <Box mt="5%" textAlign="center">
          <Typography fontWeight="800" variant="h2">
            Summarize Articles with <>💁</>
          </Typography>
          <Typography
            mt="1%"
            variant="h2"
            sx={{
              fontWeight: "900",
              background: `linear-gradient(54deg, rgba(222,240,0,1) 0%, rgba(255,112,3,1) 73%)`,
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent"
            }}
          >
            Open AI Chat GPT 4
          </Typography>
          <Box mb="4%" display="flex" justifyContent="center">
            <Typography
              m="1%"
              align="right"
              variant="subtitle2"
              sx={{ width: "50%" }}
            >
              <i>
                ~An AI-based article summarizer uses natural language processing
              </i>
            </Typography>
          </Box>

          <Box display="flex" mb="4%">
            <TextField
              type="userProvidedUrl"
              fullWidth
              id="outlined-basic"
              // autoFocus
              label="enter the userProvidedUrl of the article"
              variant="outlined"
              onChange={(e) => {
                setUserProvidedUrl(e.target.value);
              }}
              value={userProvidedUrl}
              error={!isValid}
              helperText={!isValid && " enter a valid URL"}
            />
            {isValid && userProvidedUrl !== "" && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box ml="10px" sx={{ position: "relative" }}>
                  <Fab aria-label="save" color="primary" onClick={handleSearch}>
                    <SearchIcon />
                  </Fab>
                  {loading && (
                    <CircularProgress
                      size={68}
                      sx={{
                        color: green[500],
                        position: "absolute",
                        top: -6,
                        left: -6,
                        zIndex: 1
                      }}
                    />
                  )}
                </Box>
              </Box>
            )}
          </Box>

          <Divider variant="middle">
            <Chip label="summary bellow" />
          </Divider>
        </Box>
        <Container>
          <Box sx={{ fontSize: "20px", letterSpacing: "0.3px" }} mt="4%">
            {/*  data render here */}
            <Typography>{summarizedData}</Typography>
            {/*  data render karana */}
          </Box>
        </Container>
        <Snackbar
          open={openSuccess}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            This is a error message!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}
