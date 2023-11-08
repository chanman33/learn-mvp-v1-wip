// about.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/app/layout'; //imports CSS and chains to globals.css I think...
import SunburstChart from '../../components/SunburstChart';
import { Button, Grid } from '@mui/material';
import ContentGrid from '../../components/ContentGrid';
import PrimarySearchAppBar from '../../components/AppBar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import PodcastsCollapsibleTable from '../../components/PodcastsCollapsibleTable';



// Style definition for Grid/Box borders
const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',

};

const Portfolio = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Fetch the JSON data from your file or API
        fetch('/data/data.json') // Replace with the correct path
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

            <Grid container spacing={2} className='profileGrid' >
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={8} className='bioContainer' sx={{ ...commonStyles, borderRadius: 1 }} >
                    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Image
                            className="userProfilePicture"
                            src="/images/profile.jpg"
                            height={144}
                            width={144}
                            sx={{ mr: 2 }}
                        />
                        <span sx={{ display: 'flex', justifyContent: 'center' }}>
                            Chandler J. Ward
                            <br />
                            Interested in Tech and Investing
                            <br />
                            Salt Lake City Metropolitan Area
                            <br />
                            Followers: 2.1K
                        </span>

                    </Box>
                    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }} >
                        <span>
                            <Image
                                src="/images/brigham_young_university_logo.jpg"
                                height={48}
                                width={48}
                            />
                            Brigham Young University
                            <br />
                            Bachelor of Science, Finance
                        </span>
                        <span>
                            <Image
                                src="/images/bingham_high_school_logo.jpg"
                                height={48}
                                width={48}
                            />
                            Bingham High School
                            <br />
                            High School Diploma
                        </span>
                        <span>
                            Top Strengths & Interests:
                            <li>
                                Entrepreneurship
                            </li>
                            <li>
                                Investing
                            </li>
                            <li>
                                U.S. Politics
                            </li>
                        </span>

                    </Box>

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid xs={8} className='portfolioGrid'>
                    <h1>Portfolio</h1>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* if (jsonData has stuff) then render SunburstChart*/}
                        {jsonData && (
                            <SunburstChart data={jsonData} />
                        )}

                    </Box>

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={8} className='license-certsGrid'>
                    <h2>Licenses & Certifications</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}
                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={8} className='license-certsGrid'>
                    <h2>Research & Publications</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={8} className='license-certsGrid'>
                    <h2>Books</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid xs={8} className='license-certsGrid'>
                    <h2>Podcasts</h2>
                    <PodcastsCollapsibleTable></PodcastsCollapsibleTable>

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid xs={8} className='license-certsGrid'>
                    <h2>Blogs & Articles</h2>
                    {/* <CollapsibleTable></CollapsibleTable> */}

                </Grid>
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}

                <Grid xs={8} className='license-certsGrid'>
                    <h2>AI Micro Lessons</h2>
                </Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={2}></Grid> {/* buffer */}
                <Grid xs={8}>
                    <Link href="/"> <Button>Return to home</Button></Link>
                </Grid> {/* buffer */}

            </Grid>
        </main >


    )
}

export default Portfolio;