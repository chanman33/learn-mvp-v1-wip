// portfolio.js
import React, { useState, useEffect } from 'react';
import Layout from '@/app/layout';
import Link from 'next/link';
import Image from 'next/image';
import SunburstChart from '../../components/SunburstChart';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import PrimarySearchAppBar from '../../components/AppBar';
import PodcastsCollapsibleTable from '../../components/PodcastsCollapsibleTable';





const Portfolio = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Fetch the JSON data from your file or API
        fetch('/data/data_mini.json') // Replace with the correct path - data.json renders super super slow...
            .then((response) => response.json())
            .then((responseData) => {
                setJsonData(responseData); // from outer: jsonData = responseData;
                console.log('Fetched JSON data:', responseData); // Log the data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <main>
            <PrimarySearchAppBar></PrimarySearchAppBar>

            <Grid container spacing={2} sx={{ p: 2 }} >
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid item xs={12} md={6} >
                    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'grey.300', borderRadius: 2, bgcolor: 'background.paper', p: 2 }}>
                            <Image
                                className="userProfilePicture"
                                src="/images/profile.jpg"
                                height={144}
                                width={144}
                                sx={{
                                    maxWidth: '100%', // Limit image width to not exceed its container
                                    height: 'auto', // Ensures the height is scaled automatically
                                    objectFit: 'contain' // Ensures image is scaled appropriately
                                }}
                            />
                            <Box sx={{ display: 'flex', m: 1 }}>
                                Chandler J. Ward🧑‍🎓
                                <br />
                                Interests: Tech and Investing🔍
                                <br />
                                Salt Lake City Metropolitan Area🌍
                                <br />
                                Followers: 2.1K✨
                                <br />
                                Rank: 1,453🏅
                                <br />
                                Learn Streak: 37 days!🔥
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: 1, borderColor: 'grey.300', borderRadius: 2, bgcolor: 'background.paper', p: 2 }} >
                            <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 , alignItems: 'center'}}>
                                <Image
                                    src="/images/brigham_young_university_logo.jpg"
                                    height={48}
                                    width={48}
                                    className="schoolLogo"

                                    sx={{
                                        maxWidth: '100%', // Limit image width to not exceed its container
                                        height: 'auto', // Ensures the height is scaled automatically
                                        objectFit: 'contain' // Ensures image is scaled appropriately
                                    }}
                                />
                                <Box sx={{ display: 'flex', m: 1 }}>
                                    Brigham Young University
                                    <br />
                                    Bachelor of Science, Finance
                                </Box>

                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 , alignItems: 'center'}}>
                                <Image
                                    src="/images/bingham_high_school_logo.jpg"
                                    height={48}
                                    width={48}
                                    className="schoolLogo"
                                    sx={{
                                        maxWidth: '100%', // Limit image width to not exceed its container
                                        height: 'auto', // Ensures the height is scaled automatically
                                        objectFit: 'contain' // Ensures image is scaled appropriately
                                    }}
                                />
                                <Box sx={{ display: 'flex', m: 1 }}>
                                    Bingham High School
                                    <br />
                                    High School Diploma
                                </Box>
                            </Box>

                        </Box>
                    </Stack>


                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} >
                    <h1>Portfolio🗂️</h1>
                    <Box sx={{ display: 'flex', justifyContent: 'center', border: 1, borderColor: 'grey.300', borderRadius: 2, p: 2 }} >
                        {/* if (jsonData has stuff) then render SunburstChart*/}
                        {jsonData && (
                            <SunburstChart data={jsonData} />
                        )}

                    </Box>

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} className='license-certsGrid'>
                    <h2>Licenses & Certifications🪪</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}
                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} className='license-certsGrid'>
                    <h2>Research & Publications📝</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} className='license-certsGrid'>
                    <h2>Books📚</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} className='license-certsGrid'>
                    <h2>Podcasts🎙️</h2>
                    <PodcastsCollapsibleTable></PodcastsCollapsibleTable>

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} className='license-certsGrid'>
                    <h2>Blogs & Articles📰</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid item xs={12} md={6} className='license-certsGrid'>
                    <h2>AI & GPT Lessons🤖</h2>
                    <br></br>
                </Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid xs={8}>
                    <Link href="/"> <Button>Return to home</Button></Link>
                </Grid> {/* buffer */}

            </Grid>
        </main>


    )
}

export default Portfolio;