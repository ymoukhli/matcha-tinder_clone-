
export const Select = (props) => {
    const options = props.options.map((x, i) => <option value={i} key={i}>{x}</option>);
    return (
        <div >
            <label htmlFor="select">{props.label}</label>
            <select name={props.name} id="select">{options}</select>
        </div>
    )
}

export default Select;