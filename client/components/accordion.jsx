import React from 'react';

// MUI Accordion:

// BASIC ACCORDION
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// COLLAPSABLE ACCORDION
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// export default function Accordion(props) {
//   return (
//     <div>ACCORDION WILL BE PLACED HERE</div>
//   );
// }

// BASIC ACCORDION
// export default function HomeAccordion() {
//   return (
//     <div className='home-accordion' >

//       <div>
//         {/* This will be a tutorial for new users */}
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Typography>How to use this site?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//               malesuada lacus ex, sit amet blandit leo lobortis eget.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Typography>What is an escape room?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               An escape room is a game in which a team of players discover clues,
//               solve puzzles, and accomplish tasks in one or more
//               rooms in order to accomplish a specific goal in a limited amount of time. The goal is
//               often to escape from the site of the game. <a href='https://en.wikipedia.org/wiki/Escape_room'>Learn more here!</a>
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography>About Us</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               This page was created out of a hobby for escape rooms! Hopefully it&apos;ll become yours too!
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Typography>Contact Us</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//               malesuada lacus ex, sit amet blandit leo lobortis eget.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </div>

//     </div>
//   );
// }

// COLLAPSABLE ACCORDION
const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function HomeAccordion() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='home-accordion'>

      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is an escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              <p>An escape room is a game in which a team of players discover clues,
                solve puzzles, and accomplish tasks in one or more
                rooms in order to accomplish a specific goal in a limited amount of time. The goal is
                often to escape from the site of the game.</p>
              <p><a href='https://en.wikipedia.org/wiki/Escape_room'>Learn more here!</a></p>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>How to use this site?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              <p>This site was created out of a hobby for escape rooms. Hopefully it can be yours too!</p>
              <p>There are many types and themes of escape rooms out there, find your first room here!</p>

            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

    </div>
  );
}
