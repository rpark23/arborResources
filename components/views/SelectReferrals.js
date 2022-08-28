import styles from '../../styles/Home.module.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SelectReferrals(props) {
  const { screens, selectReferrals } = props;

  return (
    <div className={styles.view}>
      <p className={styles.description0}>
        Select the referrals you are interested in:
      </p>
      <form onSubmit={e => selectReferrals(e)}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }} />} label="Primary Care" />
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Labs" />
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Imaging" />
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Medications" />
          {/* <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Health Education" /> */}
          {/*<FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Specialty Care" />*/}
          {/*<FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Social Needs" />*/}
        </FormGroup>
        <Button variant="contained" className={styles.next} type="submit">
          <p>Next</p>
          <ArrowForwardIcon className={styles.right}/>
        </Button>
      </form>
    </div>
  )
}