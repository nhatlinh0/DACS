import { Fragment } from 'react';
import styles from './InfoForm.module.css';
import camera from './camera1.png';
import ContentStage from '../env';

function InfoForm({ info, name, content }) {
  let Layout = content ? ContentStage : Fragment;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{info}</h1>
        <div className={styles.wrap}>
          <p className={styles.name}>{name}</p>
          <input className={styles.add} type="text"></input>
          <img className={styles.image} src={camera} alt=""></img>
        </div>
        <Layout></Layout>
      </div>
    </>
  );
}

export default InfoForm;
