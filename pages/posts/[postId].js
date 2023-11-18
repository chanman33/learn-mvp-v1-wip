import React, { useState, useEffect } from 'react';
import '/src/app/globals.css';
import Layout from '@/app/layout';
import postsData from '../../public/data/posts.json'
import { Card, CardContent, Typography } from '@mui/material';
import { List, ListItem, TextField, Button } from '@mui/material';
import PrimarySearchAppBar from '../../components/AppBar';
import { Grid } from '@mui/material';
import TimelineCard from '../../components/TimelineCard';


//TODO: Implement API to fetch post data, use getServerSideProps or StaticProps based on postID
//See commented out code as place holder


export async function getServerSideProps(context) {

    // Fetch data for the post using context.params.postId
    // For example, from your API
    //   const data = await fetch(`https://yourapi.com/posts/${context.params.postId}`);
    //   const post = await data.json();

    const { postId } = context.params;
    const post = postsData.posts.find(p => p.id === postId);

    // Handle the case where the post does not exist
    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post },
    };
}


export default function PostPage({ post }) {
    return (
        <main>

            <PrimarySearchAppBar />

            <Grid container spacing={2} sx={{ p: 2 }} className='portfolioGrid' >
                <Grid xs={3}></Grid> {/* buffer */}
                <Grid item xs={12} md={6} >

                    <div>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{post.title}</Typography>
                                <Typography variant="body2">{post.content}</Typography>
                            </CardContent>

                            <List>
                                {post.comments.map(comment => (
                                    <ListItem key={comment.id}>{comment.text}</ListItem>
                                ))}
                            </List>

                            <TextField label="Add a comment" fullWidth />
                            <Button variant="contained">Submit</Button>
                            
                            {/* TODO: Handle on submit to add comment to list */}
                            
                        </Card>
                    </div>

                </Grid>

            </Grid>

        </main>

    );
}
