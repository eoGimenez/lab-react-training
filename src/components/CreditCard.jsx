import logoVisa from "../assets/images/visa.png"
import logoMaster from "../assets/images/master-card.svg"


function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const numberSli = number.slice(-4)
    const yearSli = expirationYear.toString().slice(-2)
    //const month = expirationMonth.toString()
    const backColor = {
        backgroundColor: bgColor,
        color: color
    }
    console.log(expirationMonth)
    
    return (
        <div style={backColor}>
            {type === "Visa" && <img src={logoVisa} className="logoCard" alt="logo"/>}
            {type === "Master Card" && <img src={logoMaster} className="logoCard" alt="logo"/>}
            <p>************{numberSli}</p>
            {expirationMonth > 0 && expirationMonth < 10 && <p>Expires {"0"+expirationMonth}/{yearSli}</p>}
            {expirationMonth > 9 && expirationMonth < 13 && <p>Expires {expirationMonth}/{yearSli}</p>}
            <p>{bank}</p>
            <p>{owner}</p>
            
        </div>
    )
}

export default CreditCard;