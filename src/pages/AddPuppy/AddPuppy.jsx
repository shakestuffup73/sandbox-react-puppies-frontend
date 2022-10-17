import { useState, useRef, useEffect } from "react"

function AddPuppy(props) {

  const [formData, setFormData] = useState({
		name: '',
		breed: '',
		age: 0
	})

  const handleChange = evt => {
		// console.log(evt)
    setFormData({...formData, [evt.target.name]: evt.target.value})
	}

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = event => {
    event.preventDefault()
    props.handleAddPuppy(formData)
  }

	return (
		<>
			<h1>Add Puppy</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Puppy's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Puppy's Breed (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
            value={formData.breed}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Puppy's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
            value={formData.age}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Puppy
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPuppy