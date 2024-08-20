function Country(props) {
      
      return (
            <div className="country">
                  <h1>{props.name}</h1>
                  <h2>{props.capital}</h2>
                  <h3>{props.population}</h3>
            </div>
      )
}

export default Country;