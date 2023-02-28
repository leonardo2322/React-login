import { useRouteError } from 'react-router-dom'

const ControlErrors = () => {

    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <h1>Unexpedted Error</h1>
        <h2>{error.status} </h2>
        <p>{error.statusText} </p>
    </div>
  )
}

export default ControlErrors