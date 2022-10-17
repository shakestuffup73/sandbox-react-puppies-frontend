const PuppyCard = (props) => {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{props.puppy.name}</h2>
        <p className="card-text">A {props.puppy.age}-year-old {props.puppy.breed}</p>
      </div>
    </div>
  )
}

// can destructure props by replacing = (props) with = ({puppy}) --> this will allow you to use {puppy.name} instead of {props.puppy.name} etc. above!

export default PuppyCard