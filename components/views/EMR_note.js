import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export default function EMR(props) {
  const { county, forms, prevView, nextScreen} = props;

  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(`
    <p><strong>County</strong>: ${county}</p>
    <p><strong>PCP</strong>: ${forms[0]}</p>
    <p><strong>Specialty</strong>: </p>
    <p><strong>Social Needs</strong>: </p>
    <p><strong>Labs</strong>: ${forms[1] ? forms[1]: "No"}</p>
    <p><strong>Imaging</strong>: ${forms[2] ? forms[2]: "No"}</p>
    <p><strong>Medication</strong>: ${forms[3] ? forms[1]: "None"}</p>
    <p><strong>Other</strong>: </p>
    `);
  }, []);

  const onChange = (e) => {
    console.log(e);
  }

  const modules = {
    toolbar: [
      [{ size: [] }],
      ['bold', 'italic', 'underline', {'background': []}, {'color': []}],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    }
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'background',
    'color'
  ]

  return (
    <div className={styles.emr}>
      <h2>EMR Note</h2>
      <QuillNoSSRWrapper className={styles.quill} modules={modules} formats={formats} theme="snow" value={value} onChange={onChange} id="quill"/>
      <div className={styles.congratulations}>
        <h3 >Congratulations on completing all referrals!</h3>
        <p>To help another patient, save the AVS, referral forms, EMR note, and refresh this page.</p>
      </div>
      <form>
        <div className={styles.control}>
          <Button variant="contained" className={styles.left} onClick={prevView}><ArrowBackIcon/></Button>
          {/* <Button variant="contained" className={styles.next} onClick={nextScreen}>
            <p>Next</p>
            <ArrowForwardIcon className={styles.right}/>
          </Button> */}
        </div>
      </form>
      
    </div>
  )
}




