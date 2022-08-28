import { useState } from 'react';
import styles from '../styles/Home.module.css'
import SelectReferrals from './views/SelectReferrals'
import CountyLanguage from './views/CountyLanguage'
import PrimaryCare from './views/PrimaryCare'
import Labs from './views/Labs'
import Imaging from './views/Imaging'
import Medications from './views/Medications'
import HealthEd from './views/HealthEd'
import AVS from './avs/AVS'
import Forms from './forms/Forms'
import EMR from './views/EMR_note'

import template from './avs/AVS_template.json'

export default function Welcome() {
  const [view, setView] = useState(0);
  const [screen, setScreen] = useState(0);
  const [screens, setScreens] = useState([]);
  const [county, setCounty] = useState(null);
  const [language, setLanguage] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const [forms, setForms] = useState(new Array(4));

  const selectReferrals = (e) => {
    e.preventDefault();
    setView(view+1);
    let newScreens = []
    for (let i=0; i<e.target.length-1; i++) {
      if (e.target[i].checked) {
        newScreens.push(i);
      }
    }
    setScreens(newScreens);
  }

  const chooseCountyLanguage = (e) => {
    e.preventDefault();
    setCounty(e.target['county'].value);
    setLanguage(e.target['language'].value);
    setView(view+1);
  }

  const prevView = () => {
    setView(view-1);
  }

  const prevScreen = () => {
    if (screen == 0) {
      setView(view-1);
    } else {
      setScreen(screen-1);
    }
  }

  const pcpReferral = (e) => {
    e.preventDefault();
    const site = e.target[0].value;
    let newForms = forms;
    forms[0] = site;
    let newReferrals = referrals;
    newReferrals[screen] = `<br><h2>${template[0].title}</h2><p>${template[0].info}</p><br>
    <p>${template[0][site].description}</p>`;
    newReferrals[screen] += '<br><h3>Next Steps</h3><ul>';
    for (let i=0; i<template[0][site].nextSteps.length; i++) {
      newReferrals[screen] += `<li>${template[0][site].nextSteps[i]}</li>`;
    }
    newReferrals[screen] += '</ul>';
    setForms(newForms);
    setReferrals(newReferrals);
    nextScreen();
  }

  const selectLabs = (e) => {
    e.preventDefault();
    let newReferrals = referrals;
    let newForms = forms;
    forms[1] = "Yes";
    newReferrals[screen] = `<br><h2>${template[1].title}</h2><p>${template[1].info}</p><br>
    <h3>${e.target[0].value}</h3><ul>`;
    for (let i=0; i<template[1].location[e.target[0].value].length; i++) {
      newReferrals[screen] += `<li>${template[1].location[e.target[0].value][i]}</li>`
    }
    newReferrals[screen] += '</ul><br><h3>Instructions</h3><ul>';
    if (e.target[1].checked) {
      newReferrals[screen] += `<li>${template[1].instructions.noFasting}</li>`
    } else {
      newReferrals[screen] += `<li>${template[1].instructions.fasting}</li>`
    }
    for (let i=0; i<template[1].instructions.all.length; i++) {
      newReferrals[screen] += `<li>${template[1].instructions.all[i]}</li>`
    }
    newReferrals[screen] += '</ul><br><img src="/images/labs.png"><br>';
    setForms(newForms);
    setReferrals(newReferrals);
    nextScreen();
  }

  const selectImaging = (e) => {
    e.preventDefault();
    let newReferrals = referrals;
    let newForms = forms;
    forms[2] = "Yes";
    let xray = false;
    let other = [];
    let exams = [];
    if (e.target[1].checked) {
      xray = true;
      exams.push("X-ray")
    }
    if (e.target[1].checked) {
      other.push("CT");
      exams.push("CT")
    }
    if (e.target[2].checked) {
      other.push("MRI");
      exams.push("MRI")
    }
    if (e.target[3].checked) {
      other.push("Ultrasound");
      exams.push("Ultrasound")
    }
    if (e.target[1].checked | e.target[2].checked | e.target[3].checked | e.target[4].checked) {
      newReferrals[screen] = `<br><h2>${template[2].title}</h2><p>${template[2].info[0]} <strong>${exams.join(', ')}</strong>.</p><br>
      <p>${template[2].info[1]}<p><br><h3>${e.target[0].value}</h3><ul>`;
    }
    for (let i=0; i<template[2].location[e.target[0].value].length; i++) {
      newReferrals[screen] += `<li>${template[2].location[e.target[0].value][i]}</li>`
    }
    newReferrals[screen] += '</ul><br><h3>Instructions</h3><ul>';
    if (xray) {
      for (let i=0; i<template[2].instructions.xray.length; i++) {
        newReferrals[screen] += `<li>${template[2].instructions.xray[i]}</li>`
      }
    }
    if (other.length > 0) {
      newReferrals[screen] += `<li><strong>For your ${other.join(', ')}</strong>, ${template[2].instructions.other[0]}</li>`
    }
    for (let i=0; i<template[2].instructions.all.length; i++) {
      newReferrals[screen] += `<li>${template[2].instructions.all[i]}</li>`
    }
    newReferrals[screen] += '</ul><br><img src="/images/imaging.png"><br>';
    setForms(newForms);
    setReferrals(newReferrals);
    nextScreen();
  }

  const getMedications = async (e, medication, link) => {
    e.preventDefault();
    let newReferrals = referrals;
    let newForms = forms;
    forms[3] = medication;
    newReferrals[screen] = `<br><h2>${template[3].title}</h2><br><p>${template[3].info}</p>
    <ol><li><strong>${medication}</strong><ul><li><a href=${link}>GoodRx Coupon link</a></li><li>Pharmacy Location: 
    <span style="color: rgb(230, 0, 0);"><strong><u>PLEASE SPECIFY</u></strong></span></li></ul></li></ol>`;
    setForms(newForms);
    setReferrals(newReferrals);
    nextScreen();
  }

  const nextScreen = () => {
    if (screens.length-2 < screen) {
      setView(view+1);
    } else {
      setScreen(screen+1);
    }
  }

  return (
    <div className={styles.welcome}>
      {view < 1 ?
        <div className={styles.title}>
          <h2>Welcome to</h2>
          <a href='https://med.stanford.edu/arbor.html' rel="noreferrer" target="_blank"><h1>Arbor Free Clinic</h1></a>
        </div> : null
      }
      {view == 0 ? <SelectReferrals screens={screens} selectReferrals={selectReferrals} /> : null}
      {view == 1 ? <div className={styles.countyLanguage}><CountyLanguage chooseCountyLanguage={chooseCountyLanguage} prevView={prevView} /></div> : null}
      {view == 2 ? 
        <div className={styles.referrals}>
          {screens[screen] == 0 ? <PrimaryCare county={county} language={language} prevScreen={prevScreen} pcpReferral={pcpReferral}/> : null}
          {screens[screen] == 1 ? <Labs selectLabs={selectLabs} prevScreen={prevScreen} nextScreen={nextScreen}/> : null}
          {screens[screen] == 2 ? <Imaging selectImaging={selectImaging} prevScreen={prevScreen} /> : null}
          {screens[screen] == 3 ? <Medications getMedications={getMedications} prevScreen={prevScreen}/> : null}
          {screens[screen] == 4 ? <HealthEd selectResources={nextScreen} prevScreen={prevScreen}/> : null}
        </div> : null
      }
      {view == 3 ? <AVS referrals={referrals} prevView={prevView} nextScreen={nextScreen} /> : null}
      {view == 4 ? <Forms forms={forms} prevView={prevView} nextScreen={nextScreen} /> : null}
      {view == 5 ? <EMR county={county} forms={forms} prevView={prevView} nextScreen={nextScreen} /> : null}
    </div>
  )
}