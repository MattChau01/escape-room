import React from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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

export default function HomeAccordion(props) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='mt-5 accordion' >

      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is an escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              An escape room is a group puzzle game in which a team of players discovers clues,
              solve puzzles, and accomplish tasks in one or more
              rooms in order to accomplish a specific goal in a limited amount of time. The goal is
              often to complete all rooms and escape the room. <a className='wiki' href='https://en.wikipedia.org/wiki/Escape_room' target="_blank" rel="noreferrer" style={{ color: '#000', textDecoration: 'underline' }}>Learn more here!</a>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>How to use this site?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              <b>Participants:</b> If you are a new player, you can find the online catalog by navigating to the &quot;Participants&quot; page.
              To do so, you can route to the page by clicking the blue &quot;Participants&quot; button above this instruction.
              You may also find the &quot;Participants&quot; button in the nav bar. The nav bar can be accessed by clicking on the menu icon on the top left corner of the page.

            </Typography>
            <Typography mt={1}>

              Once you are on the catalog page, you can find a list of rooms that were listed by vendors. To learn more about a listing, click on the title of the room,
              and it will direct you to another page with more information. If you are interested in booking a room with the vendor, you may contact them with the phone number provided.
              Before booking a room, be sure to gather a group size that fits the requirement and find a theme your party will enjoy!

            </Typography>
            <Typography mt={1}>

              Lastly, make sure to communicate within the team! Communication is key!

            </Typography>
            <Typography mt={2}>

              <b>Vendors:</b> If you are a vendor and have an escape room you would like to post a listing for, sign in to your account and add the room on the vendor portal.
              First, click on the button labeled &quot;Vendor&quot; above these instructions OR access the &quot;Vendor&quot;
              If you currently do not have an account, you can follow the prompts to create an account.
              If you already have an account, you may click on the link below the form to sign in.

            </Typography>
            <Typography mt={1}>

              Once you&apos;ve signed in, you may click on the button labeled &quot;Add a listing&quot; and follow the prompts to create a listing.

            </Typography>
            <Typography mt={1}>

              Just like that, you&apos;ve successfully created a listing!

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Do you own an escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              If you are a vendor and would like to add your room as a listing on this site, create an account
              to add your listing to our catalog!

            </Typography>
            <Typography mt={2}>
              Click on this link <a className='new-vendor' style={{ textDecoration: 'underline' }} onClick={props.routeVSignup}>here</a> to get started!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Looking to book your first escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              If you are looking to book your first room, it is recommended to first decide the theme you are looking for.
              You can use this website as a catalog to browse and learn more about current listings!

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              This site was created out of a hobby for escape rooms. Hopefully it can be yours too!
              There are many types and themes of escape rooms out there, find your first room here!

            </Typography>
            <Typography mt={2}>
              Click <a
                className='about-us-a'
                style={{ textDecoration: 'underline', color: 'inherit' }}
                href='https://github.com/MattChau01/escape-room' target="_blank" rel="noreferrer">here</a> for a link to the project repository on GitHub.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

    </div>
  );
}
