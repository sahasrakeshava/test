import React from 'react'
import { Grid, Typography } from '@mui/material'
const Footer = () => {
    return (
        // Footer
        <div><Grid className='mt-10 text-center text-white bg-slate-800'
            container
            sx={{
                bgcolor: "gray-700", color: "white", py: 3
            }}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
            </Grid>
        </Grid></div>
    )
}

export default Footer