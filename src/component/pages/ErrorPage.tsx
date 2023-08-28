import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const error: any = useRouteError();

  return (
    <Container maxWidth="sm">
      <Box component="main" sx={{ py: 15 }}>
        <Typography variant="h4">Oops!</Typography>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.data}</i>
        </p>
        <p>
          <i>
            {error?.status} || {error?.statusText}
          </i>
        </p>
      </Box>
    </Container>
  );
};

export default ErrorPage;
