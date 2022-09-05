function SearchBar({ updateFilter, updateSort }) {
    return (
        <div>
            <form onChange={updateFilter}>
                <input type="radio" name="greased-filter" value="all" />
                <label for="all">All Piggies</label>
                <br/>
                <br/>
                <input type="radio" name="greased-filter" value="greased" />
                <label for="greased">Greased Piggies</label>
                <br/>
                <br/>
                <input type="radio" name="greased-filter" value="not-greased" />
                <label for="not-greased">Un-Greased Piggies</label>
                <br/>
                <br/>
                <br/>
            </form>
            <form >
                <select  onChange={updateSort}>
                <option value="none">Please choose an option...</option>
                 <option value="name">Sort by name</option>
                 <option value="weight">Sort by weight</option>
                </select>
                <br/>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default SearchBar