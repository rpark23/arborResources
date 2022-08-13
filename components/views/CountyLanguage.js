import styles from '../../styles/Home.module.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CountyLanguage(props) {
  const {prevView, chooseCountyLanguage} = props;

  return (
    <div className={styles.view}>
      <p className={styles.description1}>
        Select your county of residence:
      </p>
      <form onSubmit={e => chooseCountyLanguage(e)}>
        <RadioGroup
          className={styles.radioGroup}
          defaultValue="Santa Clara"
          name="county"
        >
          <FormControlLabel value="Santa Clara" control={<Radio sx={{ p: 0.5 }}/>} label="Santa Clara" />
          <FormControlLabel value="San Mateo" control={<Radio sx={{ p: 0.5 }}/>} label="San Mateo" />
          <FormControlLabel value="Alameda" control={<Radio sx={{ p: 0.5 }}/>} label="Alameda" />
        </RadioGroup>
        <p className={styles.description2}>
          Select your preferred language:
        </p>
        <RadioGroup
          className={styles.radioGroup}
          defaultValue="English"
          name="language"
        >
          <FormControlLabel value="English" control={<Radio sx={{ p: 0.5 }}/>} label="English" />
          <FormControlLabel value="Mandarin" control={<Radio sx={{ p: 0.5 }}/>} label="Mandarin" />
          <FormControlLabel value="Spanish" control={<Radio sx={{ p: 0.5 }}/>} label="Spanish" />
        </RadioGroup>
        <div className={styles.control}>
          {/* <Button variant="contained" className={styles.left} onClick={prevView}><ArrowBackIcon/></Button> */}
          <Button variant="contained" className={styles.next} type="submit">
            <p>Next</p>
            <ArrowForwardIcon className={styles.right}/>
          </Button>
        </div>    
      </form>
    </div>
  )
}