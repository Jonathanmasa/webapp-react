const ReviewCard = ({ reviewProp }) => {
     // destruttutiamo la prop
     const { name, text, vote } = reviewProp

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="card-text">
                    {text}
                </div>
                <strong>
                    Vote: {vote}
                </strong>
                <address>
                    <i>
                        By {name}
                    </i>
                </address>
            </div>
        </div>
    )
}

export default ReviewCard