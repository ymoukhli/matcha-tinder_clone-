export const TextArea = (props) => {

    return (
        <div>
            <label htmlFor="bio">biography</label>
            <textarea name={props.name} id="bio" rows="4"></textarea>
        </div>
    );
}

export default TextArea