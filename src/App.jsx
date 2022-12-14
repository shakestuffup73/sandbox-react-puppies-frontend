import { useState, useEffect } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import AddPuppy from './pages/AddPuppy/AddPuppy'
import PuppyList from './pages/PuppyList/PuppyList'
import * as puppyService from './services/puppyService'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])

  const navigate = useNavigate()

  const handleAddPuppy = async newPuppyData => {
    //formData is newPuppyData...that is being sent
    // send the puppy data to the back end
    const newPuppy = await puppyService.create(newPuppyData)
    // wait for a response
    // set the resulting data in state
    setPuppies([...puppies, newPuppy])
    navigate('/')
  }

  const handleDeletePuppy = async id => {
    const deletedPuppy = await puppyService.deleteOne(id)
    setPuppies(puppies.filter(puppy => puppy._id !== deletedPuppy._id))
  }

  useEffect(() => {
    const fetchAllPuppies = async () => {
      const puppyData = await puppyService.getAll()
      setPuppies(puppyData)
    }
    fetchAllPuppies()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        React Puppies CRUD
        <nav>
          <Link to='/'>Puppy List</Link>
          <Link className='m-left' to='/add'>Add Puppy</Link>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path='/add' element={<AddPuppy handleAddPuppy={handleAddPuppy}/>} />
        <Route path='/' element={<PuppyList puppies={puppies} handleDeletePuppy={handleDeletePuppy}/>} />
      </Routes>
      </main>
    </div>
  )
}

export default App