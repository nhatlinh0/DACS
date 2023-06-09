import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Content.module.css';
import Row from '../Row';

function Content(props) {
    return (
        <div className={styles.container}>
            <div className={styles.titlewrap}>
                <p className={styles.title}>{props.children}</p>
                <button className={styles.btnadd}>+ Thêm</button>
            </div>
            <div className={styles.searchwrap}>
                <input className={styles.searchbox} placeholder="Tìm kiếm" type="text"></input>
                <FontAwesomeIcon className={styles.searchicon} icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>
            <div className={styles.headrowwrap}>
                <div className={styles.headrow1}>
                    <p className={styles.headrowtext}>{props.type}</p>
                </div>
                <div className={styles.headrow2}>
                    <p className={styles.headrowtext}>Mô tả</p>
                </div>
                <div className={styles.headrow3}>
                    <p className={styles.headrowtext}>Tác vụ</p>
                </div>
            </div>
            <Row name="Cây khoai tây" decs="Xem thêm" action="Sửa"></Row>
            <Row name="Cây cà phê" decs="Xem thêm" action="Sửa"></Row>
        </div>
    );
}

export default Content;
