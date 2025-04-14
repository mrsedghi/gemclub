import { Link } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import {
  Home as HomeIcon,
  AccountBalanceWallet as WalletIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Add as AddIcon,
} from "@mui/icons-material";

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  position: "fixed",
  zIndex: 50,
  width: "100%",
  height: "4rem",
  maxWidth: "28rem", // approximately max-w-lg
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "1rem",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[200]
  }`,
  borderRadius: "9999px", // rounded-full
}));

const NavigationContainer = styled("div")({
  display: "grid",
  height: "100%",
  maxWidth: "28rem", // approximately max-w-lg
  gridTemplateColumns: "repeat(5, 1fr)",
  margin: "0 auto",
});

const CenterFabContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function NavButton() {
  const theme = useTheme();

  return (
    <StyledBottomNavigation>
      <NavigationContainer>
        <Tooltip title="Home" placement="top" arrow>
          <BottomNavigationAction
            component={Link}
            to="/main"
            icon={<HomeIcon />}
            sx={{
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[50],
              },
            }}
          />
        </Tooltip>

        <Tooltip title="Wallet" placement="top" arrow>
          <BottomNavigationAction
            icon={<WalletIcon />}
            sx={{
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[50],
              },
            }}
          />
        </Tooltip>

        <CenterFabContainer>
          <Tooltip title="Create new item" placement="top" arrow>
            <Fab
              color="primary"
              size="medium"
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </CenterFabContainer>

        <Tooltip title="Settings" placement="top" arrow>
          <BottomNavigationAction
            component={Link}
            to="/item"
            icon={<SettingsIcon />}
            sx={{
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[50],
              },
            }}
          />
        </Tooltip>

        <Tooltip title="Profile" placement="top" arrow>
          <BottomNavigationAction
            icon={<PersonIcon />}
            sx={{
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[50],
              },
            }}
          />
        </Tooltip>
      </NavigationContainer>
    </StyledBottomNavigation>
  );
}

export default NavButton;
