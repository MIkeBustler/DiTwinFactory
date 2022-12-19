import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Paper, Box, InputLabel, Typography, useMediaQuery, useTheme, TextField, FormControl, Input, InputAdornment, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { userLogin } from "../redux/actions";


export const Login = () => {
  const user = useSelector(state=>state.user);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = useState(false);
  const [userState, setuserState] = useState({
    name: "",
    password: "",
    error: "",
  });

  const handleClickShowPassword = () => {setShowPassword((show)=>{ return !show })};
  const handlePasswordChange = (event) =>{setuserState(state => {return {...state, password: event.target.value}} )};
  const handleUsernameChange = (event) => {setuserState(state => {return {...state, name: event.target.value}} )};

  const onOk = () => {
    setuserState(state=>{return{...state, error:""}});
    console.log(userState);
    const nuser = {...user, id: "wasja"}
    dispath(userLogin(nuser))
    navigate("/");
  };

  
  return (
    <Paper elevation={5}>
      <Box sx={{ mt: "30px", width: "260px", height: "300px", display: "flex", flexDirection: "column", }} >
        <Typography 
          justifySelf="center" variant="h3" textAlign="center" mt="10px" >Добро пожаловать</Typography>
        <Box height="42px" p="5px" overflow="hidden">
          <Typography
            color={colors.redAccent[600]} variant="h6" textAlign="center" visibility={userState.errror} >
            {userState.error}
          </Typography>
        </Box>
        <Box mt="5px" alignSelf="center" display="flex" flexDirection="column">
          <FormControl sx={{ width: "25ch" }} variant="standard" required>
            <InputLabel>имя пользователя</InputLabel>
            <Input type="standard" onChange={handleUsernameChange} />
          </FormControl>
          <FormControl
            sx={{ mt: "15px", width: "25ch" }}
            variant="standard"
            required
          >
            <InputLabel>Пароль</InputLabel>
            <Input
              onChange={handlePasswordChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box mt="40px" display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={onOk}>Войти</Button>
            <Button variant="outlined" onClick={()=>{navigate("/");}}>Назад</Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}