import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Player } from "@lordicon/react";

import loading from "../assets/icons/Loading.json";
import { Link } from "react-router-dom";

function Login() {
  const playerRef1 = useRef(null);

  useEffect(() => {
    playerRef1.current?.playFromBeginning();
  }, []);
  return (
    <Box className="flex flex-col flex-nowrap justify-around lg:px-24  p-10  h-screen">
      <Box className="flex flex-col justify-center items-center lg:mt-0 mt-10">
        <Player ref={playerRef1} size={150} icon={loading} />
        <h3 className=" text-center text-3xl font-peydaExBold">جم کلاب</h3>
      </Box>
      <Box className=" -mt-24">
        <TextField
          label="شماره موبایل خود را وراد کنید"
          variant="outlined"
          dir="rtl"
          className="w-full font-peydaReg "
        />
        <Box className="flex flex-row-reverse items-center mt-2">
          <InfoIcon sx={{ fontSize: 15 }} />
          <FormHelperText className="text-right ">
            شماره موبایل باید به نام خودتان باشد
          </FormHelperText>
        </Box>
      </Box>
      <Box className=" ">
        <Link to={"/verifyphone"}>
          <Button variant="contained" className="w-full h-12">
            ادامه
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
