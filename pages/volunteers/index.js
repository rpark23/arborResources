import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Volunteers.module.css'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
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
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Volunteers() {
  const [expanded, setExpanded] = useState('panel1');
  const [flow, setFlow] = useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const nextFlow = (e) => {
    setFlow(flow+1);
  }

  const prevFlow = (e) => {
    setFlow(flow-1);
  }

  const endFlow = (e) => {
    setFlow(8);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>New Clinic Workflow</title>
        <meta name="description" content="New Arbor Clinic Workflow for all undergraduate volunteers. Changes
        aim to create an equitable and fulfilling volunteer experience while improving the patient experience.
        The new workflow will go into effect on October 1st following our Fall All Hands from 10:00am-12:30pm.
        Read to the bottom of the page to find details for Fall Shift Signups." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.letterBackground}>
        <Paper className={styles.letter} elevation={16}>
          <h2>New Arbor Workflow</h2>
          <p>Effective 10/1/2022</p>
          <br/>
          <h4 className={styles.mobile}>* For a better viewing experience, try opening this link on a bigger screen. *</h4>
          <br/>
          <h3>Motivation</h3>
          <div className={styles.accordian}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <h5>Training Challenges</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  &emsp; Having MED 181 online the past 2 years has impacted our training process and forced many 
                  of our volunteers to learn their roles during (shadowing) shifts. Training is also fragmented into 
                  specific positions that can leave volunteers with an incomplete picture of clinic, a lack of 
                  experienced volunteers to seek guidance from, and lead to misunderstandings between different roles. 
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <h5>Division of Patient Care</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  &emsp; Having so many different roles can also overwhelm our patients and lead to a diffusion 
                  of responsibility of each patient’s care. As the patient moves throughout clinic, 
                  there are many handoffs where key patient information needs to be communicated in a 
                  very short window of time. These transfers often lead to delays and mistakes that affect 
                  both the patient and volunteer experience.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <h5>Volunteer Sustainability</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  &emsp; Differences in roles also forces some volunteers to do extra work after clinic is over, 
                  while other volunteers are needed as soon as they arrive. Some volunteers want to take on more tasks 
                  and be more closely involved in patient care while others just want more time to interact with their 
                  patients. Our changes below seek to create an equitable distribution of clinic responsibilities 
                  and opportunities. 
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <br/><br/>
          <h3>New Roles</h3>
          <div className={styles.roles}>
            <p>
              &emsp; Our new clinic workflow centers around the <strong>Patient Navigator</strong> training, 
              which <u>all volunteers will receive</u>. After 3 quarters in the Patient Navigator role, volunteers 
              are eligible to become <strong>Referrals Chairs</strong>, <strong>Front Desk Managers</strong>, 
              or <strong>Preclinical Volunteers</strong>.
            </p>
            <div className={styles.img}>
              <Image src="/images/volunteers/roles.png" layout="fill" />
            </div>
          </div>
          <br/>
          <h3>New Clinic Flow</h3>
          <br/>
          <p>&emsp; Click on the arrows to walk through our new clinic flow or <a onClick={(e) => endFlow(e)}>jump to the end</a>.</p>
          <div className={styles.flow}>
            {flow == 1 ? <ArrowBack className={styles.grey}/> : <ArrowBack className={styles.arrow} onClick={(e) => prevFlow(e)} />}
            <div className={styles.img}>
              <Image src={`/images/volunteers/flow/${flow}.png`} layout="fill" priority={true} />
            </div>
            {flow == 8 ? <ArrowForward className={styles.grey}/> : <ArrowForward className={styles.arrow} onClick={(e) => nextFlow(e)} />}
          </div>
          <br/>
          <h3>Required Training</h3>
          <div className={styles.training}>
            <p>
              &emsp; As stated before, we are making the <strong>Patient Navigator</strong> training available to all 
              current Arbor volunteers. It will be a (MED 182) <strong><u>requirement for all volunteers with shifts 
              after 10/1/2022</u></strong>. 
            </p>
            <br />
            <p>
              &emsp; The easiest way to fulfill this requirement is to attend our <strong>Fall All Hands</strong> on{' '}
              <strong>Saturday, October 1 from 10:00am-12:30pm</strong>. If you have a conflict, please email the managers 
              as soon as possible so that we can schedule a 1-on-1 training with you before your next scheduled shift.
            </p>
          </div>
          <br/>
          <h3>*** Action REQUIRED ***</h3>
          <div className={styles.required}>
            <p>
              &emsp; To acknowledge that you have reviewed our new workflow, please sign up for your <strong>fall shifts</strong> on the{' '}
              <strong><a href="https://docs.google.com/spreadsheets/d/1UzrjWoiBUE6N7N2JmylI95hB_qLn6CQK0V60xUsX3S4/edit#gid=918942208" target="_blank" rel="noreferrer">Arbor Volunteer Schedule</a></strong>,
              which includes a column for our Fall All Hands. To ensure you are scheduled, <u>please mark at least 2 &quot;Available&quot; 
              dates between every set of black bars</u> <strong>by 9/13</strong>.{' '}
              <u>Shifts will be assigned on a rolling basis, so sign up as soon as you can!</u>
            </p>
          </div>
        </Paper>
      </div>
    </div>
  )
}
