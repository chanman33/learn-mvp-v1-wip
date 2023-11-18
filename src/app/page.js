
//Import global styles and page structure elements
import '/src/app/globals.css';

import PrimarySearchAppBar from '../../components/AppBar';
import { Grid } from '@mui/material';
import TimelineCard from '../../components/TimelineCard';


export default function Home() {
  return (
    <>
      <PrimarySearchAppBar />

      <Grid container spacing={2} sx={{ p: 2 }} className='portfolioGrid' >
        <Grid xs={4}></Grid> {/* buffer */}
        <Grid item xs={12} md={6} >
          
            <TimelineCard />
          
        </Grid>
      </Grid>

    </>
  )
}
