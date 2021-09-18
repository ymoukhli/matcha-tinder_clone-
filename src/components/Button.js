export default function Button(props) 
{
    let className;

    switch (props.style){
        case "alert":
            className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" + props.class;
            break;
        case "normal":
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full" + props.class;
            break;
        case "selected":
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" + props.class;
            break;
        default:
            className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" + props.class;
            break;
    }
    return (
        <button onClick={props.onClick} class={className}>
            {props.text}
        </button>
    )
}   