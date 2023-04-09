import React from 'react';
import { Box } from '@mui/system';



const PokeCardType = ({type}) => {
    const color = type[1]
    const name = type[0]

    return (
            <Box sx={{
                backgroundColor:color
            }}>
                {{name}}
            </Box>
    );
  };
  
  export default PokeCardType;