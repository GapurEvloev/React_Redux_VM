import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions";


function Title(props) {
    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log("handle change >> ", e.target.value);
        dispatch(inputText(e.target.value));
    }

    return (
        <div className="cart-title">
            <div className="cart-title-top">
                <input type="text" onChange={handleChange} value={text}/>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Title;