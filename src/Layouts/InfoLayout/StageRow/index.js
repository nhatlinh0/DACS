import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styles from './StageRow.module.css';
import { Link } from 'react-router-dom';

function StageRow(props) {
    let route = props.crops ? '/stagecropslayout' : '/stageanimalslayout';
    return (
        <div className={styles.container}>
            <div className={styles.headrow1}>
                <p className={styles.stagename}>{props.children}</p>
            </div>
            <div className={styles.iconcontainer}>
                <div className={styles.iconwrap}>
                    <Link to={route}>
                        <FontAwesomeIcon className={styles.icon} icon={faPenToSquare}></FontAwesomeIcon>
                    </Link>
                    <p className={styles.text}>Sửa</p>
                </div>
                <div className={styles.iconwrap}>
                    <a href="#">
                        <FontAwesomeIcon className={styles.icon} icon={faTrashCan}></FontAwesomeIcon>
                    </a>
                    <p className={styles.text}>Xoá</p>
                </div>
            </div>
            <div className={styles.headrow3}></div>
        </div>
    );
}

export default StageRow;
