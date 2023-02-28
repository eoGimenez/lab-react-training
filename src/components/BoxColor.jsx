function BoxColor ({r, g, b}) {
    const color = `rgb(${r},${g},${b})`
    const boxColor = {
        backgroundColor: color,
    }
    /* console.log(boxColor) */
    return (
        <div style={boxColor} className="boxcolor">
        probando
        </div>
    )
}

export default BoxColor;