import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './Row.module.css';

function Row(props) {
    return (
        <div className={styles.container}>
            <div className={styles.headrow1}>
                <p className={styles.name}>{props.name}</p>
            </div>
            <div className={styles.headrow2}>
                <p className={styles.decs}>{props.decs}</p>
            </div>
            <div className={styles.headrow3}>
                <FontAwesomeIcon className={styles.icon} icon={faPenToSquare}></FontAwesomeIcon>
                <p className={styles.action}>{props.action}</p>
            </div>
        </div>
    );
}

export default Row;
