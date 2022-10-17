import PuppyCard from '../../components/PuppyCard/PuppyCard';
import styles from './PuppyList.module.css'

const PuppyList = (props) => {

  const dogIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]

  return ( 
    <>
      <h1>All Dem Puppies!</h1>
      <div className={styles.container}>
        {props.puppies.map(puppy =>
          <PuppyCard puppy={puppy} key={puppy._id} randDogImgId={dogIds[Math.floor(Math.random()*(dogIds.length))]} handleDeletePuppy={props.handleDeletePuppy}/>
        )}
      </div>
    </>
  );
}

export default PuppyList;