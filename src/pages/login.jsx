import '../styles/form.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/UserReducer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialState } from '../app/initialState'

const Test = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [isAdmin, setAdmin] = useState(false)

	const Login =(e) =>{
		e.preventDefault()
		

		initialState.filter(user => {
			if (user.email == e.target[0].value && user.password == e.target[1].value){
				dispatch(login(true))
			  navigate(`/home/`)
			}
		
		
		
	})}


  return (
    <div className="main">  
    	<label htmlFor="chk"  id="labelchk">Do you Don't have account click here</label>
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="login" onSubmit={(e) =>Login(e)}>
				<form className="form">
					<label htmlFor="chk" aria-hidden="true">Log in</label>
					<input className="input" type="email" name="email" placeholder="Email" required="" />
					<input className="input" type="password" name="password" placeholder="Password" required=""  />
				
					<button>Log in</button>
				</form>
			</div>

      <div className="register ">
				<form className="form registerform">
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input className="input" type="text" name="txt" placeholder="Username" required="" />
					<input className="input" type="email" name="email" placeholder="Email" required="" />
					<input className="input" type="password" name="pswd" placeholder="Password" required="" />
					<label htmlFor="isAdmin" id='isadmin' aria-hidden="true">User Admin</label>
					<input type="checkbox" name="isAdmin" id="isAdmin" onChange={() => setAdmin(!isAdmin)}/>
					<button>Register</button>
				</form>
			</div>
	</div>
  )
}
export default Test