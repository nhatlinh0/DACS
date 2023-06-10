import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Content.module.css';
import Row from '../Row';
import { Link } from 'react-router-dom';

function Content(props) {
    let route = props.crops ? '/infocropslayout' : '/infoanimalslayout';
    return (
        <div className={styles.container}>
            <div className={styles.titlewrap}>
                <p className={styles.title}>{props.children}</p>
                <Link to={route}>
                    <button className={styles.btnadd}>+ Thêm</button>
                </Link>
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
            <Row crops={props.crops} name="Cây khoai tây" decs="Xem thêm" action="Sửa"></Row>
            <Row crops={props.crops} name="Cây cà phê" decs="Xem thêm" action="Sửa"></Row>
        </div>
    );
}

export default Content;
