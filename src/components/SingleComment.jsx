import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate } from "../redux/actions";

function SingleComment({ data }) {
    const [commentText, setCommentText] = useState("");
    const { text, id } = data;
    const dispatch = useDispatch();
    
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id))
    }

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    return (
        <form onSubmit={handleUpdate} action="" className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput} />
            <input type="submit" hidden />
        </form>
    );
}

export default SingleComment;
