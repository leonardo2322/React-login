import '../styles/form.css'
import { useNavigate} from 'react-router-dom'
import RouterSecurity from '../components/RouterSecurity'
import { useDispatch } from 'react-redux'
import { login } from '../features/UserReducer'
const Test = () => {
	const dispatch = useDispatch()
	const db = [{
		id:1,
		user:'leonardo030397@hotmail.com',
		password: 222
	},{
		id:2,
		user:"elmorenito_030397@hotmail.com",
		password:5563
	}]

	const navigate  = useNavigate()

	const Login =(e) =>{
		e.preventDefault()
		const email = e.target[0].value
		const password = e.target[1].value
		dispatch(login('parametercounter'))
		db.filter(User=>{
			if(email == User.user && password == User.password){
				 navigate(`/home/${User.id} `)
			}
			
		})
		

	}


  return (
    <div className="main">  
    	<label htmlFor="chk"  id="labelchk">Do you Don't have account click here</label>
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="login" onSubmit={(e) =>Login(e)}>
				<form className="form">
					<label htmlFor="chk" aria-hidden="true">Log in</label>
					<input className="input" type="email" name="email" placeholder="Email" required="" />
					<input className="input" type="password" name="pswd" placeholder="Password" required="" />
					<button>Log in</button>
				</form>
			</div>

      <div className="register">
				<form className="form registerform">
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input className="input" type="text" name="txt" placeholder="Username" required="" />
					<input className="input" type="email" name="email" placeholder="Email" required="" />
					<input className="input" type="password" name="pswd" placeholder="Password" required="" />
					<button>Register</button>
				</form>
			</div>
	</div>
  )
}
export default Test