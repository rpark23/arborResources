import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

//import htmlDocx from 'html-docx-js'

import { Document, Packer, Paragraph, HeadingLevel } from 'docx'
import { saveAs } from 'file-saver'

import template from "./AVS_template.json";

export default function AVS(props) {
  const { referrals, prevView, nextScreen} = props;

  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const [value, setValue] = useState('');
  const [doc, setDoc] = useState(null);  

  useEffect(() => {
    setValue('<h1>After Visit Summary of Referrals</h1><br>'+referrals.join('<br>'));
    let children = [new Paragraph({ text: "After Visit Summary (AVS) of Referrals", heading: HeadingLevel.TITLE })];
    // for(let category in template) {
    //   console.log(template[category].title);
    //   children.push(new Paragraph({ text: template[category].title, heading: HeadingLevel.HEADING_1 }));
    //   children.push(new Paragraph({ text: template[category].info }))
    // }
    let doc = new Document({ sections: [
      {
        children: children
      }
    ]});
    setDoc(doc);
  }, [])

  const saveDocumentToFile = (doc, fileName) => {
    const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    Packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType)
      saveAs(docblob, fileName)
    })
  }

  const printAVS = (e) => {
    e.preventDefault();
    let div = document.createElement('div');
    div.innerHTML = value.trim();
    console.log(div);
    //console.log(QuillNoSSRWrapper.getContents());
    //console.log(htmlDocx.asBlob(div));
    saveDocumentToFile(doc, 'AVS.docx');
  }

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
    <div className={styles.avs}>
      <QuillNoSSRWrapper className={styles.quill} modules={modules} formats={formats} theme="snow" value={value} onChange={onChange} id="quill"/>
      <form>
        <div className={styles.control}>
          {/* <Button variant="contained" className={styles.left} onClick={prevView}><ArrowBackIcon/></Button> */}
          <Button variant="contained" className={styles.next} onClick={nextScreen}>
            <p>Next</p>
            <ArrowForwardIcon className={styles.right}/>
          </Button>
        </div>
      </form>
    </div>
  )
}




