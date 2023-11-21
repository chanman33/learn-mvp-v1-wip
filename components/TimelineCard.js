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
import { Avatar, Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


//TODO: Implement API to fetch post data, use getServerSideProps or StaticProps based on postID
//See [postID].js for details
//TODO: merge data below with posts.json placeholder data

const data = [
  {
    id: "1",
    src: 'https://www.investopedia.com/terms/c/corporategovernance.asp',
    srcIMG: 'https://www.investopedia.com/thmb/1hcPHOmM02RQ7fLV92yPwf3yLYU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Term-Definitions_corporategovernance-dba10e3df300439597427b2518b96b93.png',
    publisher: 'Investopedia',
    title: 'Corporate Governance: Definition, Principles, Models, and Examples',
    description: "Good corporate governance can benefit investors and other stakeholders, while bad governance can lead to scandal and ruin...",
    tokens: "2,300" + " Tokens",
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
    src: 'https://en.wikipedia.org/wiki/Lidar',
    srcIMG: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/3D_Sick_Lidar.jpg/330px-3D_Sick_Lidar.jpg',
    publisher: 'Wikipeida',
    title: 'Lidar',
    description: "Lidar (also LIDAR, LiDAR or LADAR, an acronym of 'light detection and ranging' or 'laser imaging, detection, and ranging') is a method for determining ranges by targeting an object or a surface with a laser and measuring...",
    tokens: "1800" + " Tokens",
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

    src: 'https://www.udemy.com/course/python-for-machine-learning-data-science-masterclass/',
    srcIMG: 'https://img-c.udemycdn.com/course/750x422/2769460_e60c.jpg',
    publisher: 'Udemy',
    title: 'Python for Machine Learning & Data Science Masterclass',
    description: "Learn about Data Science and Machine Learning with Python! Including Numpy, Pandas, Matplotlib, Scikit-Learn and more!...",
    tokens: "42,000" + " Tokens",
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
              <Link href= {item.src} className="no-style-link">
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
              </Link>

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