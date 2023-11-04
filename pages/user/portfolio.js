// about.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/app/layout'; //imports CSS and chains to globals.css I think...
import SunburstChart from '../../components/SunburstChart';
import { Button, Grid } from '@mui/material';
import ContentGrid from '../../components/ContentGrid';



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
        <Grid container spacing={2} className='profileGrid'>
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={8} className='bioContainer'>
                <Image
                    className="userProfilePicture"
                    src="/images/profile.jpg" // Route of the image file
                    height={144}
                    width={144}
                />
            </Grid>
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={8} className='portfolioGrid'>
                {/* if (jsonData has stuff) then render SunburstChart*/}
                {jsonData && (
                    <SunburstChart data={jsonData} />
                )}
                <div>
                    <ContentGrid className='portfolioDataGrid'></ContentGrid>
                </div>

            </Grid>
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={8} className='license-certsGrid'>
                <h2>Licenses & certifications</h2>
            </Grid> 
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={2}></Grid> {/* buffer */}
            <Grid xs={8}>
                <Link href="/"> <Button>Return to home</Button></Link>
            </Grid> {/* buffer */}
            <Grid xs={2}></Grid> {/* buffer */}

        </Grid>

    )
}

export default Portfolio;