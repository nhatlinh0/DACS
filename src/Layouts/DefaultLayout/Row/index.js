import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './Row.module.css';
import { Link } from 'react-router-dom';

function Row(props) {
    let route = props.crops ? '/infocropslayout' : '/infoanimalslayout';
    return (
        <div className={styles.container}>
            <div className={styles.headrow1}>
                <p className={styles.name}>{props.name}</p>
            </div>
            <div className={styles.headrow2}>
                <p className={styles.decs}>{props.decs}</p>
            </div>
            <div className={styles.headrow3}>
                <Link to={route}>
                    <FontAwesomeIcon className={styles.icon} icon={faPenToSquare}></FontAwesomeIcon>
                </Link>
                <p className={styles.action}>{props.action}</p>
            </div>
        </div>
    );
}

export default Row;
