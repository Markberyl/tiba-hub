import { Box } from '@mui/system';
import React from 'react';
import "../Styles/Screen.css"

const Screen = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <div className="rhombus">
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
            <div className="text">
                Loading.....
            </div>

        </Box>
    );
};

export default Screen;