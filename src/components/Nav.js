// import button from '../styles/buttons.module.css'
// import nav from '../styles/Nav.module.css'
import Button from './Button'

export const Nav = (props) => {
    
    return (
        <nav className="flex justify-between">
            <p /*className={nav.text} */>{props.msg}</p>
            <Button text="done" /*form={props.form}*/></Button>
        </nav>
    )
}

export default Nav