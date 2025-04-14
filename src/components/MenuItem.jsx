import InventoryIcon from "@mui/icons-material/Inventory";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Grid, Box, Typography, Paper, styled, useTheme } from "@mui/material";
import Header from "../components/Header";
import { motion } from "framer-motion";
import NavButton from "./NavButton";

const MenuItemCard = styled(motion(Paper))(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    width: "66.6667%", // lg:!w-2/3
  },
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    boxShadow: theme.shadows[4], // hover:shadow-lg
  },
}));

const MenuContent = styled(Box)({
  width: "91.6667%", // w-11/12
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  margin: "12px", // m-3
});

export default function MenuItem() {
  const theme = useTheme();

  const menuItems = [
    {
      title: "برنامه ورزشی",
      description: "برنامه ورزشی که توسط مربی برای شما نوشته شده",
      bgColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    {
      title: "برنامه غذایی",
      description: "برنامه غذایی که توسط مربی برای شما نوشته شده",
      bgColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    {
      title: "حساب کاربری",
      description: "اطلاعات حساب کاربریتو ببین",
      bgColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
  ];

  return (
    <Grid sx={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
      >
        {menuItems.map((item, index) => (
          <MenuItemCard
            key={index}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            elevation={2} // shadow-md
            sx={{
              backgroundColor: item.bgColor,
              color: item.color,
              [theme.breakpoints.up("lg")]: {
                marginTop: index === 0 ? theme.spacing(5) : theme.spacing(2), // lg:mt-10 for first item
              },
            }}
          >
            <Box sx={{ margin: "12px" }}>
              {" "}
              {/* m-3 */}
              <ArrowBackIosIcon sx={{ fontSize: 15 }} />
            </Box>
            <MenuContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {" "}
                {/* font-peydaBold */}
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "right" }}>
                {item.description}
              </Typography>
            </MenuContent>
            <Box sx={{ margin: "12px" }}>
              {" "}
              {/* m-3 */}
              <InventoryIcon />
            </Box>
          </MenuItemCard>
        ))}
      </Grid>
      <NavButton />
    </Grid>
  );
}
