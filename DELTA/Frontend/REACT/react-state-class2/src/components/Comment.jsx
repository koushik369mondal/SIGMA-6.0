import { useState } from "react";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@km",
        remarks: "Great job!",
        rating: 5,
    }]);
    return (
        <div>
            <h3>All comments</h3>
            <div className="comment">
                <span>{comments[0].remarks}</span>
                &nbsp;
                <span>(rating ={comments[0].rating})</span>
                <p>- {comments[0].username}</p>
            </div>
        </div>
    );
}
