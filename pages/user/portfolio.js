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
        <>
            <PrimarySearchAppBar />

            <Grid container spacing={2} sx={{ p: 2 }}>
                <Grid item xs={2} />
                <Grid item xs={12} md={8}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.300', borderRadius: 2, bgcolor: 'background.paper', p: 2 }}>
                            <Image
                                className="userProfilePicture"
                                src="/images/profile.jpg"
                                height={144}
                                width={144}
                                sx={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="h6">Chandler J. Ward🧑‍🎓</Typography>
                                <Typography>Interests: Tech and Investing🔍</Typography>
                                <Typography>Salt Lake City Metropolitan Area🌍</Typography>
                                <Typography>Followers: 2.1K✨</Typography>
                                <Typography>Rank: 1,453🏅</Typography>
                                <Typography>Learn Streak: 37 days!🔥</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', border: 1, borderColor: 'grey.300', borderRadius: 2, bgcolor: 'background.paper', p: 2 }}>
                            {[
                                { src: "/images/brigham_young_university_logo.jpg", school: "Brigham Young University", degree: "Bachelor of Science, Finance" },
                                { src: "/images/bingham_high_school_logo.jpg", school: "Bingham High School", degree: "High School Diploma" }
                            ].map((edu, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: index === 0 ? 2 : 0 }}>
                                    <Image
                                        src={edu.src}
                                        height={48}
                                        width={48}
                                        className="schoolLogo"
                                        sx={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                                    />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography>{edu.school}</Typography>
                                        <Typography>{edu.degree}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={2} />
                <Grid item xs={12} md={8}>
                    <Typography variant="h4">Portfolio 🗂️</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', border: 1, borderColor: 'grey.300', borderRadius: 2, p: 2 }}>
                        {jsonData && <SunburstChart data={jsonData} />}
                    </Box>
                </Grid>
                <Grid item xs={2} />

                {['Licenses & Certifications 🪪', 'Research & Publications 📝', 'Books 📚', 'Podcasts 🎙️', 'Blogs & Articles 📰', 'AI & GPT Lessons 🤖'].map((section, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={2} />
                        <Grid item xs={12} md={8} className='license-certsGrid'>
                            <Typography variant="h5">{section}</Typography>
                            {section === 'Podcasts 🎙️' && <PodcastsCollapsibleTable />}
                        </Grid>
                        <Grid item xs={2} />
                    </React.Fragment>
                ))}

                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Link href="/">
                        <Button variant="contained" color="primary">Return to home</Button>
                    </Link>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </>
    )
}

export default Portfolio;