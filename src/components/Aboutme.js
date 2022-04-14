import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Aboutme() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 15, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649903267/IMG_0670_ol9fja.jpg"
                alt="suitcase"
                sx={{ height: 250 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                I previously worked as a Physical Therapist for just over 3
                years. I love to learn so my curiosity led me to discovering the
                path of a Software Engineer.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649900892/5C24099E-8546-4D7A-ABE2-3D49C528599C_b90mcf.jpg"
                alt="graph"
                sx={{ height: 250 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                This is my lovely wife, Joy. We love to travel, try new foods,
                and spend as much time with our dogs as possible.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649900885/IMG_6924_mkm2xe.jpg"
                alt="clock"
                sx={{ height: 250 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                These are our wonderful dogs. Ramen (Left) is 2 years old. Luna
                (right) is 5 years old.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Aboutme;
