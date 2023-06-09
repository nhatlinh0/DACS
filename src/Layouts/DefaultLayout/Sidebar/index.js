import styles from './Sidebar.module.css';
import logo from './logo.jpg';

function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.logowrap}>
                <img className={styles.logo} src={logo} alt={logo}></img>
            </div>
            <div className={styles.wrap}>
                <div className={styles.crops}>
                    <p className={styles.text}>Cây trồng</p>
                </div>
                <div className={styles.animals}>
                    <p className={styles.text}>Vật nuôi</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
