import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

interface FooterProps {
  footerName: string;
}

const Footer: FC<FooterProps> = ({ footerName }) => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          maxWidth="xl"
        >
          <Typography variant="body1">
            My sticky footer can be found here. {footerName}
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
