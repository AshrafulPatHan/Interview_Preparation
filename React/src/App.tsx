import { Link } from "react-router"


function App() {

  return (
    <div className="flex flex-col items-center gap-2">
      <Link to='/calculate'>Calculate</Link>
      <Link to='/sql/login'>SQL Login</Link>
      <Link to='/sql/registration'>SQL Registration</Link>
    </div>
  )
}

export default App
