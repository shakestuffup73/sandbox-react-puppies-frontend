const PuppyCard = (props) => {
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/${props.randDogImgId}/640/480`} 
        alt="A happy puppy"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text">{props.puppy.name}</h2>
        <p className="card-text">A {props.puppy.age}-year-old {props.puppy.breed}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-danger m-left" onClick={() => props.handleDeletePuppy(props.puppy._id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

// can destructure props by replacing = (props) with = ({puppy}) --> this will allow you to use {puppy.name} instead of {props.puppy.name} etc. above!
// can also destructure for randDogImgId and pass that in with ({puppy, randDogImgId}) so that don't need props.randDogImgId...
// can also destructure handleDeletePuppy now in PuppyList's <PuppyCard handleDeletePuppy={props.handleDeletePuppy} /> by passing in handleDeletePuppy above the same way

export default PuppyCard