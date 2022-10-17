import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AddPuppy from './pages/AddPuppy/AddPuppy'
import * as puppyService from './services/puppyService'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])

  const handleAddPuppy = async newPuppyData => {
    setPuppies([...puppies, newPuppyData])
    //formData is newPuppyData...that is being sent
    // send the puppy data to the back end
    const newPuppy = await puppyService.create(newPuppyData)
    // wait for a response
    // set the resulting data in state
    setPuppies([...setPuppies, newPuppy])
  }

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
      </Routes>
      </main>
    </div>
  )
}

export default App