import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


//TODO: Implement API to fetch post data, use getServerSideProps or StaticProps based on postID
//See [postID].js for details
//TODO: merge data below with posts.json placeholder data

const data = [
  {
    id: "1",
    src: '',
    srcIMG: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc',
    publisher: 'The Dog Owner',
    title: 'About Our Dog',
    description: "He's a good boy",
    tokens: "400" + " Tokens",
    comments: [
      {
          id: "1",
          text: "Great post!"
      },
      {
          id: "2",
          text: "Really insightful."
      }
  ]
  },
  {
    id: "2",
    src: '',
    srcIMG: 'https://natusan.co.uk/cdn/shop/articles/natusan-blog-how-cat-years-work-header_600x600_crop_center.jpg?v=1674474680',
    publisher: 'The Cat Owner',
    title: 'About Our Cat',
    description: "He's a bad boy",
    tokens: "200" + " Tokens",
    comments: [
      {
          id: "1",
          text: "Great post!"
      },
      {
          id: "2",
          text: "Really insightful."
      }
    ]
  },
  {
    id: "3",

    src: '',
    srcIMG: 'https://images.squarespace-cdn.com/content/v1/5486159de4b074841b303621/1625098587656-RAWMEEYLSLFFNK7J2F5O/WEBimage1.jpg',
    publisher: 'The Turtle Owner',
    title: 'About Our Turtle',
    description: "He's a chill turtle",
    tokens: "300" + " Tokens",
    comments: [
      {
          id: "1",
          text: "Great post!"
      },
      {
          id: "2",
          text: "Really insightful."
      }
    ]
  }
];

function Media(props) {
  const { loading = false } = props;

  return (
    <>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Card key={index} sx={{ maxWidth: 526, m: 2 }}>

          <CardHeader
            avatar={
              loading ? (
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
              ) : (
                <Avatar />
              )
            }
            action={
              loading ? null : (
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              )
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                item.publisher
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                item.tokens
              )
            }
          />

          {loading ? (
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image={item.srcIMG}
            />
          )}

          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <div>
                <Typography color="text.black" component="h2">
                  {
                    item.title
                  }
                </Typography>
                <Typography variant="body2" color="text.secondary" component="p">
                  {
                    item.description
                  }
                </Typography>
              </div>

            )}
          </CardContent>
        </Card>
      ))
      }
    </>

  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function TimelineCard() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
    </Box>
  );
}