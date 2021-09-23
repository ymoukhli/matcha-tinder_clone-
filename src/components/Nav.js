// import button from '../styles/buttons.module.css'
// import nav from '../styles/Nav.module.css'
import Button from './Button'

export const Nav = (props) => {
    
    return (
        <nav className="flex justify-between">
            <p /*className={nav.text} */>{props.msg}</p>
            <Button text="done" type="button" form={props.form} onClick={props.onClick} id={props.id}></Button>
        </nav>
)}

export default Nav