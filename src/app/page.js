
//Import global styles and page structure elements
import '/src/app/globals.css';

import PrimarySearchAppBar from '../../components/AppBar';
import { Grid, Box, Card } from '@mui/material';
import TimelineCard from '../../components/TimelineCard';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <PrimarySearchAppBar />

      <Grid container spacing={2} sx={{ p: 2 }} className='portfolioGrid' >
        <Grid xs={2}></Grid> {/* buffer */}
        <Grid item xs={2} >
          <Card className='circles-sidebar' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', m: 1 }} >
            <Image
              className="userProfilePicture"
              src="/images/profile.jpg"
              height={80}
              width={80}
              sx={{
                maxWidth: '100%', // Limit image width to not exceed its container
                height: 'auto', // Ensures the height is scaled automatically
                objectFit: 'contain' // Ensures image is scaled appropriately
              }}
            />
            <p className='profile-name-sidebar'>Chandler J. Ward</p>
            <p>
              Interests: Tech and Investing🔍
              <br />
              Salt Lake City Metropolitan Area🌍
              <br />
              Followers: 2.1K✨
              <br />
              Rank: 1,453🏅
              <br />
              Learn Streak: 37 days!🔥
            </p>
          </Card>
          <Card className='circles-sidebar' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', m: 1 }} >
            <h3 className='sidebar-heading'>Circles</h3>
            <ul>
              <li><a href="#">The AI Network</a></li>
              <li><a href="#">SLC Founders</a></li>
              <li><a href="#">Radar Hub</a></li>
              <li><a href="#">Non-Profit Stop</a></li>
            </ul>
          </Card>
        </Grid>
        <Grid item xs={3} >

          <TimelineCard />

        </Grid>
        <Grid item xs={2} >
          <Card className='circles-sidebar' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', m: 1 }}>
            <h3 className='sidebar-heading'>Trending Topics</h3>
            <ul>
              <li><a href="#">Corporate Governance</a></li>
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">Isreal Palestine History</a></li>
              <li><a href="#">Code For Beginners</a></li>
            </ul>
          </Card>
          <Card className='circles-sidebar' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', m: 1 }}>

            <Image
              src="/images/Google_Ads_logo.png"
              className='sponsor-image'
              height={80}
              width={80}
              sx={{
                maxWidth: '100%', // Limit image width to not exceed its container
                height: 'auto', // Ensures the height is scaled automatically
                objectFit: 'contain' // Ensures image is scaled appropriately
              }}
            />
            <p className='sponsored-text'>Sponsored</p>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}
