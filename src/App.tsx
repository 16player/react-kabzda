import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function hello() {
    alert("Hello IT-KAMASUTRA")
}

// hello();

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            {/*<OnOff on={true} onClick={(on)=> (alert(on))}/>*/}

            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

            {/*<UnControlledAccordion titleValue={'Menu'}/>*/}
            {/*<UnControlledAccordion titleValue={'User'}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<Rating value={ratingValue}*/}
            {/*onClick={setRatingValue}*/}
            {/*/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
