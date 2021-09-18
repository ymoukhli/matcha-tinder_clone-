import React , {useState} from 'react'
import Button from './Button'

export const Passions = () => {

    const changeDisplay = (e) => {
        SetDisplay(!display);
        
    }

    function HandleChange(value) 
    {
        console.log(value);
    }

    function allHandler(event) {
        console.log('allHandler', event.target, event.currentTarget)
        if (event.target !== event.currentTarget)
        {
            SetDisplay(false);
        }
    }
    const push = (e) => {
        
        let tmpArra = [...displayPassions];
        let tmpArraPassion = [...passionArray];
        let tmpArraPassions = passionArray.filter(x => x.tag === e.currentTarget.textContent);
        if (tmpArraPassions[0].selected == true)
        {
            tmpArra = tmpArra.filter(x => x.tag !== e.currentTarget.textContent);
        }
        else
        {
            tmpArra.push({tag: e.currentTarget.textContent, selected: true});
        }
        tmpArraPassions[0].selected = !tmpArraPassions[0].selected;
        setCurrent(tmpArra);
        setPassions(tmpArraPassion);
    }

    let [displayPassions, setCurrent] = useState([]);
    let [passionArray, setPassions] = useState([{tag: 'music', selected: false}, {tag: 'wine', selected: false}, {tag: 'travel', selected: false}, {tag: 'sex', selected: false}, {tag: 'shopping', selected: false}, {tag: 'talking', selected: false}, {tag: 'running', selected: false}, {tag: 'dancing', selected: false}, {tag: 'gaming', selected: false}])
    let [display, SetDisplay] = useState(false);

    let allPassions = passionArray.map((x, i) => <div Key={i + 'passions'}>
                                                    <Button onClick={push} text={x.tag} style={x.selected ? "selected" : "normal"}></Button>
                                                </div>);

    let currentPassions = displayPassions.map((x, i) => <div Key={i + 'current'}>
                                                            <Button onClick={push} text={x.tag} style="normal"></Button>
                                                        </div>);
   
    let currentPassionsDisplay = '';
   
    if (currentPassions.length < 1)
    {
         currentPassionsDisplay = (<div /*className={passions.currents}*/ onClick={changeDisplay}> pick your passion tags </div>);
    }
    else
    {
        currentPassionsDisplay = 
        (<div /*className={passions.currents}*/ onClick={changeDisplay}>
            {currentPassions}
        </div>);
    }

    return (
        <div /*className={passions.root}*/ onChange={HandleChange}>
            {display && <div>pick passion</div>}
            {display && <div /*className={passions.outsideClick}*/ onClick={changeDisplay} id="passionOutsideClick"></div>}
            {display && <div /*className={passions.overlay}*/>{allPassions}</div>}
            {!display && <div>Passions</div>}
            {!display && currentPassionsDisplay}
        </div>
        );
}

export default Passions;