import { Link } from 'react-router-dom';
import styles from './StageForm.module.css';
import StageRow from '../StageRow';

function StageForm({ children, crops, animals }) {
    let route = crops ? '/stagecropslayout' : '/stageanimalslayout';
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{children}</h1>
            <div className={styles.headrowwrap}>
                <div className={styles.stagerow}>
                    <p className={styles.text}>Tên giai đoạn</p>
                </div>
                <div className={styles.managerow}>
                    <p className={styles.text}>Tác vụ</p>
                </div>
                <div className={styles.btnrow}>
                    <Link to={route}>
                        <button className={styles.btn}>+ Thêm giai đoạn</button>
                    </Link>
                </div>
            </div>
            <StageRow crops={crops}>Giai đoạn 1</StageRow>
            <StageRow crops={crops}>Giai đoạn 2</StageRow>
        </div>
    );
}

export default StageForm;
