// import select from '../styles/Select.module.css'


export const Select = (props) => {
    const options = props.options.map((x, i) => <option value={i} key={i}>{x}</option>);
    return (
        <div >
            <label htmlFor="select">{props.label}</label>
            <select id="select" /*className={select.normal} */>{options}</select>
        </div>
    )
}

export default Select;