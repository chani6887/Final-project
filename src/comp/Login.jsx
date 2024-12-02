import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Login() {
    let [user, setUser] = React.useState({
        name: "",
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
    return (
        <>
            <h1>Login</h1>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >.
                <TextField onChange={(e) => { hendlerOnChange(e) }} type="text" name='name' id="outlined-basic" label="name" variant="outlined" />
                <TextField onChange={(e) => { hendlerOnChange(e) }} type="password" name='password' id="outlined-basic" label="password" variant="outlined" />
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </Box>
        </>
    );
}

export default Login;
