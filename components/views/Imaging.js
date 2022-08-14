import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Imaging(props) {
  const {prevScreen, selectImaging} = props;

  return (
    <div className={styles.view}>
      <h3>Imaging</h3>
      <p className={styles.description3}>
        Which types of imaging were ordered for you?
      </p>
      <form onSubmit={(e) => selectImaging(e)}>
        <input hidden value="Stanford Hospital – Radiology Registration" />
        <FormGroup>
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }} />} label="X-Ray" />
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="CT" />
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="MRI" />
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Ultrasound" />
        </FormGroup>
        <p className={styles.description3}>
          *Imaging is done free of charge at Stanford. If you receive a bill, please email arborclinic@stanford.edu with a copy of the bill.
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