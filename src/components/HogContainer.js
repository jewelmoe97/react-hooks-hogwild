import HogTile from "./HogTile";

function HogContainer({ hogs }) {

    const displayHogs = hogs.map((hog) => {
        return <HogTile
                key={hog.name}
                hog={hog}
                />
    })

    return (
        <div className="ui grid container">
            {displayHogs}
        </div>
    )
}

export default HogContainer;