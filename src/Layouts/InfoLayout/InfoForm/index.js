import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './InfoForm.module.css';
import ContentStage from '../env';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function InfoForm({ info, name, content }) {
    let Layout = content ? ContentStage : Fragment;

    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{info}</h1>
                <div className={styles.wrap}>
                    <p className={styles.name}>{name}</p>
                    <input className={styles.add} type="text"></input>
                    <div className={styles.imagewrap}>
                        <p
                            className={styles.text}
                            onClick={() => {
                                document.querySelector('#input').click();
                            }}
                        >
                            Thêm ảnh
                        </p>
                        <input type="file" id="input" className={styles.file} onChange={handlePreview} hidden></input>

                        {avatar && <img className={styles.image} src={avatar.preview} alt={avatar.preview}></img>}
                    </div>
                </div>
                <Layout></Layout>
            </div>
        </>
    );
}

export default InfoForm;
