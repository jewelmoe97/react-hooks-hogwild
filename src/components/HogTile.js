import { useState } from "react";

function HogTile ({ hog }) {
    const [hide, setHide] = useState(false)
    const { name, specialty, greased, weight, image } = hog

    function toggleDisplay() {
        setHide(!hide)
    }

    function addInfo() {
        return (
            <div>
                <li className="achievementText">Specialty: {specialty}</li>
                <li >Greased: {greased.toString()}</li>
                <li>Weight: {weight}</li>
            </div>
        )
    }

    return (
        <div onClick={toggleDisplay} className="pigTile">
            <ul className="nomralText">
                <li className="hoggyText"><h3>{name}</h3></li>
                <li className="indexWrapper"><img className="minPigTile" src={image} alt="cute pig"></img></li>
                {hide ? addInfo() : null}
            </ul>
        </div>
    )
}

export default HogTile