import styles from './DefaultLayout.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

function DefaultLayout(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar {...props}></Sidebar>
                </div>
                <div className={styles.content}>
                    <Header></Header>
                    <Content {...props}></Content>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default DefaultLayout;
