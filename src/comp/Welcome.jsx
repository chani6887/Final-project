import React from 'react'; // שימוש בייבוא פשוט ל-React
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleClick = (str) => {
    if(str==="Sign up")
      navigate("/singup");
    else
      navigate("/login");
  };

  const buttons = [
    <Button key="one" onClick={()=>{handleClick("Connect")}}>
      Connect
    </Button>,
    <Button key="two" onClick={()=>{handleClick("Sign up")}}>
      Sign up
    </Button>,
  ];

  return (
    <div>
     
      <SwipeLeftIcon  onClick={()=>{handleClick("Connect")}}/>
      <h1>Log in to continue</h1>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          variant="text"
        >
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Welcome;
