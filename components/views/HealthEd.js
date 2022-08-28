import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function HealthEd(props) {
  const {prevScreen, selectResources} = props;

  //const [dietary, setDietary] = useState(false);
  const [pt, setPT] = useState(false);
  const [disease, setDisease] = useState(false);

  const changePT = (e) => {
    setPT(!pt);
  }

  const changeDisease = () => {
    setDisease(!disease);
  }

  return (
    <div className={styles.view}>
      <h3>Health Education</h3>
      <p className={styles.description3}>
        What types of resources are you interested in?
      </p>
      <form onSubmit={(e) => selectResources(e)}>
        <input hidden value="Stanford Hospital – Radiology Registration" />
        <FormGroup>
          <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }} />} label="Dietary Recommendations" />
          <FormControlLabel value={pt} onChange={changePT} control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Physical Therapy Exercises" />
          {/* {pt ? 
            <Select className={styles.healthEd} defaultValue="Select One" value={pt} onChange={changePT}>
              <MenuItem value="">Shoulder</MenuItem>
              <MenuItem value="">Neck</MenuItem>
              <MenuItem value="">Low Back</MenuItem>
              <MenuItem value="">Knee Joint</MenuItem>
              <MenuItem value="">Hip Arthritis</MenuItem>
            </Select> : null
          } */}
          <FormControlLabel value={disease} onChange={changeDisease} control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'} }}/>} label="Disease Information" />
          {/* {disease ? 
            <div className={styles.healthEd}>
              <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'}, ml: 4}} />} label="Shoulder" />
              <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'}, ml: 4}} />} label="Neck" />
              <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'}, ml: 4}} />} label="Low Back" />
              <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'}, ml: 4}} />} label="Knee Joint" />
              <FormControlLabel control={<Checkbox sx={{ p: 0.5, '&.Mui-checked': {color: '#B83A4B'}, ml: 4}} />} label="Hip Arthritis" />
            </div> : null
          } */}
        </FormGroup>
        <p className={styles.description3}>
          *If you are unable to find the resources you are looking for, please search Stanford&apos;s <a href="https://www.healthwise.net/stanford/find/search.aspx" target="_blank" rel="noreferrer">HealthWise Knowledgebase</a>.
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