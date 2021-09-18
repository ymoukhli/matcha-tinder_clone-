export default function Image(props) {
    return (<img src={props.src} alt={props.alt} className={"w-32 max-w-xs h-44 " + props.className}></img>)
}