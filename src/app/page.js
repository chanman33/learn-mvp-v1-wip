
//Import global page structure elements
import PrimarySearchAppBar from '../../components/AppBar';
import SkeletonCard from '../../components/TimelineCard';
import { Grid } from '@mui/material';

//Import components React, Material UI
import Link from 'next/link';
import Button from '@mui/material/Button';

//Import Robot Google Fonts - default for Material UI 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TimelineCard from '../../components/TimelineCard';




export default function Home() {
  return (
    <main>
      <div>
        {/* <Header /> */}
        <PrimarySearchAppBar />
      </div>
      <Grid container spacing={2} sx={{ p: 2 }} className='portfolioGrid' >
        <Grid xs={4}></Grid> {/* buffer */}
        <Grid item xs={12} md={6} >
          
          <div>
            <TimelineCard />
          </div>

        </Grid>

      </Grid>

    </main>

  )
}
