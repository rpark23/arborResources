import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import links from './Forms_links.json'

export default function Forms(props) {
  const { forms, prevView, nextScreen } = props;
  const [ display, setDisplay ] = useState(null);
  const pcp = forms[0];

  return (
    <div className={styles.forms}>
      <h2>Referral Forms</h2>
      {pcp ? 
        <div>
          <div className={styles.medwiki}><h3>{pcp}</h3><a href={links[0][pcp].medwiki}>Medwiki</a></div>
          {links[0][pcp].forms ?
            <ul className={styles.referralForms}>
              {links[0][pcp].forms.map((form, i) =>
                <li key={i}><a href={form} download={form.slice(7)}>{form.slice(7)}</a></li>
              )}
            </ul> : 
            <ul className={styles.referralForms}>
              <li>No forms required, but check MedWiki for patient instructions.</li>
            </ul>
          }
        </div> : null
      }
      {forms[1] ? 
        <div>
          <div className={styles.medwiki}><h3>Labs</h3></div>
          <ul className={styles.referralForms}>
            <li>No forms required for B2C.</li>
          </ul>
        </div> : null
      }
      {forms[2] ? 
        <div>
          <div className={styles.medwiki}><h3>Imaging</h3></div>
          <ul className={styles.referralForms}>
            <li>No forms required for B2C.</li>
          </ul>
        </div> : null
      }
      {forms[3] ? 
        <div>
          <div className={styles.medwiki}><h3>Medications</h3></div>
          <ul className={styles.referralForms}>
            <li>No forms required for B2C, but please remember to <span className={styles.red}><strong><u>choose a specific pharmacy location</u></strong></span>{' '}
              (with your patient) and notify your B2C chair or manager.</li>
          </ul>
        </div> : null
      }
      <form>
        <div className={styles.control}>
          <Button variant="contained" className={styles.left} onClick={prevView}><ArrowBackIcon/></Button>
          <Button variant="contained" className={styles.next} onClick={nextScreen}>
            <p>Next</p>
            <ArrowForwardIcon className={styles.right}/>
          </Button>
        </div>
      </form>
    </div>
  )
}