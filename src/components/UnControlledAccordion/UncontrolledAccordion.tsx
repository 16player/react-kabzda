import {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean;
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(true)

        return <div>
            <AccordionTitle title={props.titleValue} onClick={()=>(setCollapsed(!collapsed))}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    }
type AccordionTitlePropsType = {
    title: string;
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h2 onClick={props.onClick}>-- {props.title} --</h2>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default UnControlledAccordion;