import classNames from 'classnames/bind';
import styles from './Header.module.css';
import logo from './logo.jpg';

const cx = classNames.bind(styles);
function Header({ children }) {
  return (
    <div className={cx('wraper')}>
      <img className={cx('image')} src={logo} alt="logo-DaiHocDalat"></img>
      <h1 className={cx('title')}>{children}</h1>
      <div className={cx('admin-wraper')}>
        <div className={cx('admin-icon')}>
          <p className={cx('A')}>A</p>
        </div>
        <p className={cx('admin-text')}>Admin</p>
        <div className={cx('admin-arrow')}></div>
      </div>
    </div>
  );
}

export default Header;
