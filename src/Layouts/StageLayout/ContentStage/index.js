import styles from './ContentStage.module.css';

function ContentStage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nội dung giai đoạn</h2>
      <div className={styles.wrap}>
        <input className={styles.content} type="text"></input>
      </div>
    </div>
  );
}

export default ContentStage;
