import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Header from '../InfoLayout/Header';
import styles from './AccountLayout.module.css';
import classNames from 'classnames/bind';
import Button from '../InfoLayout/Button';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function AccountLayout(props) {
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    return (
        <>
            <Header>{props.children}</Header>
            <div className={styles.container}>
                <h1 className={styles.formname}>Thông tin tài khoản</h1>
                <div className={styles.wrap}>
                    <div className={styles.avatarwrap}>
                        <div className={styles.titlewrap}>
                            <p className={styles.lefttext}>Ảnh đại diện</p>
                            <p className={styles.righttext}>Chỉnh sửa</p>
                        </div>
                        <div className={styles.avatar}>
                            {avatar && <img src={avatar.preview} alt={avatar.preview} className={styles.image}></img>}
                            <input id="input" type="file" onChange={handlePreview} hidden></input>
                            <div
                                className={styles.camerawrap}
                                onClick={() => {
                                    document.querySelector('#input').click();
                                }}
                            >
                                <FontAwesomeIcon className={styles.cameraicon} icon={faCamera}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userinfowrap}>
                        <div className={styles.titlewrap}>
                            <p className={styles.lefttext}>Thông tin cá nhân</p>
                            <p className={styles.righttext}>Chỉnh sửa</p>
                        </div>
                        <div className={styles.userformwrap}>
                            <div className={styles.leftform}>
                                <div className={styles.item}>
                                    <p className={styles.label}>Họ và tên</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Địa chỉ</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Ngày sinh</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Giới tính</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                            </div>
                            <div className={styles.rightform}>
                                <div className={styles.item}>
                                    <p className={styles.label}>Số điện thoại</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Email</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>CCCD</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.wrap}>
                    <div className={cx('userinfowrap', 'marright')}>
                        <div className={styles.titlewrap}>
                            <p className={styles.lefttext}>Thông tin tài khoản</p>
                        </div>
                        <div className={styles.userformwrap}>
                            <div className={styles.leftform}>
                                <div className={styles.item}>
                                    <p className={styles.label}>Tên đăng nhập</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Mật khẩu đăng nhập</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Email đăng ký</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('userinfowrap', 'marleft')}>
                        <div className={styles.titlewrap}>
                            <p className={styles.lefttext}>Đổi mật khẩu</p>
                        </div>
                        <div className={styles.userformwrap}>
                            <div className={styles.leftform}>
                                <div className={styles.item}>
                                    <p className={styles.label}>Mật khẩu hiện tại</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Mật khẩu mới</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                                <div className={styles.item}>
                                    <p className={styles.label}>Xác nhận mật khẩu mới</p>
                                    <input className={styles.textbox} type="text"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button info crops></Button>
        </>
    );
}

export default AccountLayout;
