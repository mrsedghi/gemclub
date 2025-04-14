import { Box, Grid, styled } from "@mui/material";

const HeaderBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "64px", // h-16 (16 * 4 = 64px)
  backgroundColor: theme.palette.primary, // #1e1e1e
  boxShadow: theme.shadows[2], // shadow-md
}));

function Header() {
  return (
    <Grid container>
      <HeaderBox />
    </Grid>
  );
}

export default Header;
