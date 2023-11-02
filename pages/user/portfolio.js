// about.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/app/layout';
import SunburstPortfolio from '../../components/SunburstChart';

const Portfolio = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Fetch the JSON data from your file or API
        fetch('/data/data.json') // Replace with the correct path
            .then((response) => response.json())
            .then((data) => {
                setJsonData(data);
                console.log('Fetched JSON data:', data); // Log the data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Chandler Ward"
                />

                <br></br>
                <h1>Portfolio Page</h1>
                <div>
                    <Image
                        src="/images/sunburst-portfolio.png" // Route of the image file
                        height={144} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Chandler Ward"
                    />
                    <SunburstPortfolio />
                </div>

                <br></br>
                <h2><Link href="/">Back to home</Link></h2>
            </div>
        </main>
    )
}

export default Portfolio;