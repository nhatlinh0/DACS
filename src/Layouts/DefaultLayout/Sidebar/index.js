import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logo from './logo.jpg';

const cx = classNames.bind(styles);

function Sidebar({ crops, animal }) {
    let classCrops = crops ? 'active' : '';
    let classAnimals = animal ? 'active' : '';
    return (
        <div className={styles.container}>
            <div className={styles.logowrap}>
                <a href="https://dlu.edu.vn/">
                    <img className={styles.logo} src={logo} alt={logo}></img>
                </a>
            </div>
            <div className={styles.wrap}>
                <div className={cx('crops', classCrops)}>
                    <Link to="/crops" className={styles.text}>
                        Cây trồng
                    </Link>
                </div>
                <div className={cx('animals', classAnimals)}>
                    <Link to="/animals" className={styles.text}>
                        Vật nuôi
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
