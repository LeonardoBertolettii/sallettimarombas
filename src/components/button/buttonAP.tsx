import "./button.css"

export default function buttonAP({height,width,text,font,onClick}:any){
    return(
        <button
        className="body"
        style={{height:height, width:width, fontSize:font}}
        onClick={onClick}>
            {text}
        </button>
    )
}