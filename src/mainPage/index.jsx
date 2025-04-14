import { Box, Grid } from "@mui/material";
import NavButton from "../components/NavButton";
import Skelton from "../components/Skelton";
function MainPage() {
  return (
    <Grid>
      <Box className="p-12">
        <Skelton />
      </Box>

      <NavButton />
    </Grid>
  );
}
export default MainPage;
