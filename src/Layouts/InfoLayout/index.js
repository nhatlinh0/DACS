import './InfoLayout.module.css';
import Header from './Header';
import InfoForm from './InfoForm';
import Button from './Button';
import Stage from './StageForm';

function InfoLayout(props) {
    return (
        <>
            <Header>{props.children}</Header>
            <InfoForm {...props}></InfoForm>
            <Stage crops={props.crops} animals={props.animals}>
                {props.stage}
            </Stage>
            <Button info crops={props.crops} animals={props.animals}></Button>
        </>
    );
}

export default InfoLayout;
