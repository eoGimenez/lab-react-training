function Rating ({children}) {
    let number = Math.round(children)
    //console.log(typeof children)
    return (
        <div>
            {number === 0 && <p>☆☆☆☆☆</p>}
            {number === 1 && <p>★☆☆☆☆</p>}
            {number === 2 && <p>★★☆☆☆</p>}
            {number === 3 && <p>★★★☆☆</p>}
            {number === 4 && <p>★★★★☆</p>}
            {number === 5 && <p>★★★★★</p>}
        </div>
    )
}

export default Rating;