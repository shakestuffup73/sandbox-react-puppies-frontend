import PuppyCard from '../../components/PuppyCard/PuppyCard';
import styles from './PuppyList.module.css'

const PuppyList = (props) => {
  return ( 
    <>
      <h1>All Dem Puppies!</h1>
      <div className={styles.container}>
        {props.puppies.map(puppy =>
          <PuppyCard puppy={puppy} key={puppy._id} />
        )}
      </div>
    </>
  );
}

export default PuppyList;