import styles from './Button.module.css';

function Button() {
  return (
    <div className={styles.container}>
      <button className={styles.btnThoat}>X Thoát</button>
      <button className={styles.btnLuu}>+ Lưu</button>
    </div>
  );
}

export default Button;
