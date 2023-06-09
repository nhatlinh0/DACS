import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './InfoForm.module.css';
import ContentStage from '../env';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function InfoForm({ info, name, content }) {
    let Layout = content ? ContentStage : Fragment;
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{info}</h1>
                <div className={styles.wrap}>
                    <p className={styles.name}>{name}</p>
                    <input className={styles.add} type="text"></input>
                    <div className={styles.image}>
                        <p className={styles.addimage}>Thêm ảnh</p>
                        <FontAwesomeIcon className={styles.icon} icon={faCamera} />
                    </div>
                </div>
                <Layout></Layout>
            </div>
        </>
    );
}

export default InfoForm;
