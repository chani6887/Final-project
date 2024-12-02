import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';;
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
function Singup() {
    let [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
    })
    function hendlerOnChange(e) {
        console.log("e", e)
        let change = e.target.name;
        let copy = { ...user };
        copy[change] = e.target.value;
        setUser(copy)
        console.log("user", user)
    }
    function saveUser(){
        console.log("currentUser",user);
        localStorage.setItem("currentUser",JSON.stringify(user));

    }
    return (
        <>
            <h1>Sing Up</h1>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >.
                <TextField onChange={(e) => { hendlerOnChange(e) }} type="text" name='name' id="outlined-basic" label="name" variant="outlined" />
                <TextField onChange={(e) => { hendlerOnChange(e) }} type="email" name='email' id="outlined-basic" label="email" variant="outlined" />
                <TextField onChange={(e) => { hendlerOnChange(e) }} type="password" name='password' id="outlined-basic" label="password" variant="outlined" />
            </Box>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={saveUser}>
                    Send
                </Button>
            </Stack>
        </>
    )
}

export default Singup