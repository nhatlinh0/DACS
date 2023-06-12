import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ info, stage, crops, animals }) {
    let route = '';
    if (info && crops) {
        route = '/crops';
    } else if (info && animals) {
        route = '/animals';
    } else if (stage && crops) {
        route = '/infocropslayout';
    } else if (stage && animals) {
        route = '/infoanimalslayout';
    }

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={route}>
                <button className={styles.btnThoat}>X Thoát</button>
            </Link>
            <button className={styles.btnLuu}>+ Lưu</button>
        </div>
    );
}

export default Button;
