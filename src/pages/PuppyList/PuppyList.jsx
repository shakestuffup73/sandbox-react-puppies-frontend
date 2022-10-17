import styles from './PuppyList.module.css'

const PuppyList = (props) => {
  return ( 
    <>
      <h1>All Dem Puppies!</h1>
      <div className={styles.container}>
        {props.puppies.map(puppy =>
          <div key={puppy._id}>
            <p>Puppy Name: {puppy.name}</p>
            <p>Breed: {puppy.breed}</p>
            <p>Age: {puppy.age}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PuppyList;