import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';


function createData(name, countEpisodes, sumTokens, mainTopicTags, imageURL) {
  return {
    name,
    countEpisodes,
    sumTokens,
    mainTopicTags,
    imageURL,
    history: [
      {
        date: '2023-11-03',
        episode: 'E152: Real estate chaos, WeWork bankruptcy, Biden regulates AI...',
        tokens: '20.1K',
        topicTags: 'Real Estate, Artificial Intelligence, San Francisco Politics',
      },
      {
        date: '2023-10-27',
        episode: 'E151: WW3 risk, War with Iran?, 4.9% GDP, startup failures growing...',
        tokens: '21.1K',
        topicTags: 'US Foreign Policy, Economics, Startups, US Politics',
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <Image
            src={row.imageURL}
            height={48}
            width={48}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.countEpisodes}</TableCell>
        <TableCell align="right">{row.sumTokens}</TableCell>
        <TableCell align="right">{row.mainTopicTags}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Episode</TableCell>
                    <TableCell align="right"># Tokens</TableCell>
                    <TableCell align="right">Topic Tags</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.episode}</TableCell>
                      <TableCell align="right">{historyRow.tokens}</TableCell>
                      <TableCell align="right">{historyRow.topicTags}</TableCell>


                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// Fix required prop types once you define all the naming structure and data

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData('All-In with Chamath, Jason, Sacks & Friedberg', 42, '450.6K', 'Venture Capital, Technology, Politics', '/images/all_in_podcast_logo.jpg'),
  createData('My First Million', 35, '280.3K', 'Entrepreneurship, Personal Finance, Small Business', '/images/my_first_million_podcast_logo.jpg'),
  createData('The Game - Alex Hormozi', 18, '110.2K', 'Business Operations, Sales, Entrepreneurship', '/images/the_game_alex_hormozi_podcast_logo.jpg'),
  createData('The Twenty Minute VC (20VC)', 12, '80.8K', 'Venture Capital, Startups, Fundraising', '/images/20_minute_VC_podcast_logo.jpg'),
  createData('Acquired', 4, '120.9K', 'Technology, Investing, Business', '/images/acquired_podcast_logo.jpg'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right"># Episodes</TableCell>
            <TableCell align="right">Total Tokens</TableCell>
            <TableCell align="right">Main Topics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}