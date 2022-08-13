import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function Labs(props) {
  const {prevScreen, selectLabs} = props;

  return (
    <div className={styles.view}>
      <h3>Labs</h3>
      <p className={styles.description3}>
        Do any of your labs require fasting? <br/> If you are unsure, please ask your provider.
      </p>
      <form onSubmit={(e) => selectLabs(e)}>
        <input hidden value="Stanford Hospital - Boswell Clinic Laboratory" />
        <RadioGroup
            name="labs"
            defaultValue="No"
          >
          <FormControlLabel value="No" control={<Radio sx={{ p: 0.5 }}/>} label="No" />
          <FormControlLabel value="Yes" control={<Radio sx={{ p: 0.5 }}/>} label="Yes" />
        </RadioGroup>
        <p className={styles.description3}>
          *Labs are done free of charge at Stanford. If you receive a bill, please email arborclinic@stanford.edu with a copy of the bill.
        </p>
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