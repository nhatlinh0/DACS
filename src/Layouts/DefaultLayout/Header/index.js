import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
    const [toggle, setToggle] = useState(false);
    let classNames;

    const handleToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    };

    if (toggle) {
        classNames = '';
    } else {
        classNames = 'none';
    }

    return (
        <div className={cx('wraper')}>
            <div className={cx('admin-wraper')}>
                <div className={cx('admin-icon')}>
                    <p className={cx('A')}>A</p>
                </div>
                <p className={cx('admin-text')}>Admin</p>
                <div className={cx('admin-arrow')} onClick={handleToggle}></div>
                <div className={cx('settingwrap', classNames)}>
                    <div className={cx('setting')}>
                        <Link to="/accountlayout">
                            <p className={cx('text')}>Cài đặt</p>
                        </Link>
                    </div>
                    <div className={cx('logout')}>
                        <p className={cx('text')}>Đăng xuất</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
