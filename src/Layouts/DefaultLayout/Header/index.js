import styles from './Header.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wraper')}>
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
