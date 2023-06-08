import Header from '../InfoLayout/Header';
import InfoForm from '../InfoLayout/InfoForm';
import Button from '../InfoLayout/Button';
import styles from './StageLayout.module.css';

function StageLayout(props) {
  return (
    <>
      <Header>{props.children}</Header>
      <InfoForm {...props}></InfoForm>
      <Button></Button>
    </>
  );
}

export default StageLayout;
