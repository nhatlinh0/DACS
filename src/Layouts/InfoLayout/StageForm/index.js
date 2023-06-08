import styles from './StageForm.module.css';

function StageForm({ children }) {
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
          <button className={styles.btn}>Thêm giai đoạn</button>
        </div>
      </div>
    </div>
  );
}

export default StageForm;
