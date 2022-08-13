import styles from '../../styles/Home.module.css'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PrimaryCare(props) {
  const {county, language, prevScreen, pcpReferral} = props;

  return (
    <div className={styles.view}>
      <h3>Primary Care</h3>
      <p className={styles.description1}>
        We recommend you seek care at:
      </p>
      <form onSubmit={(e) => pcpReferral(e)}>
        {county == "Santa Clara" ? 
        <>
          {language == "English" ? 
            <div className={styles.referral}>
              <input hidden value="Ravenswood" readOnly/>
              <h4>Ravenswood/MayView</h4>
              <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203038.43452159798!2d-122.14419364956335!3d37.3312490400011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb64bc9cafd1f%3A0x5ed9b0fb90f442fc!2sMayview%20Community%20Health%20Center!5e0!3m2!1sen!2sus!4v1660252946209!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/*<AppBar>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
  </AppBar>*/}
            </div> : null
          }
          {language == "Mandarin" ? 
            <div className={styles.referral}>
              <input hidden value="NEMS" readOnly/>
              <h4>North East Medical Services (NEMS)</h4>
              <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25362.659867256756!2d-121.91728840145349!3d37.381968667146594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc1cbab2f0ff%3A0xa454a1c3848c0b09!2sNorth%20East%20Medical%20Services%20(NEMS)!5e0!3m2!1sen!2sus!4v1660251144322!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> : null
          }
          {language == "Spanish" ? 
            <div className={styles.referral}>
              <input hidden value="Gardner" readOnly/>
              <h4>Gardner Health Services</h4>
              <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101511.34645034063!2d-121.96828842906687!3d37.33707322261956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccc1d9c1c3f5%3A0xb4503cb37aa4170f!2sGardner%20Downtown%20Health%20Center!5e0!3m2!1sen!2sus!4v1660253356784!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> : null
          }
        </> : null}
        {county == "San Mateo" ? 
          <div className={styles.referral}>
            <input hidden value="Samaritan House" readOnly/>
            <h4>Samaritan House</h4>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25333.94327572666!2d-122.21644343873042!3d37.4667916115159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa36e73aa184b%3A0x8c34c5bb64b0ef0d!2sSamaritan%20House%20Free%20Clinic!5e0!3m2!1sen!2sus!4v1660253468943!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div> : null
        }
        {county == "Alameda" ? 
          <div className={styles.referral}>
            <input hidden value="AHS" readOnly/>
            <h4>Alameda Health System</h4>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100894.27487791162!2d-122.28076997928983!3d37.79130315438835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8693560bc5a1%3A0x409cfa65b47d2a20!2sAlameda%20Health%20System!5e0!3m2!1sen!2sus!4v1660253590583!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div> : null
        }
        <div className={styles.control}>
          {/* <Button variant="contained" className={styles.left} onClick={prevScreen}><ArrowBackIcon/></Button> */}
          <Button variant="contained" className={styles.next} type="submit">
            <p>Next</p>
            <ArrowForwardIcon className={styles.right}/>
          </Button>
        </div>
      </form>
    </div>
  )
}