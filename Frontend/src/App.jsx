import Header from "./components/Header"
import {ToastContainer} from 'react-toastify'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <>
        <Header/>
        <ToastContainer />
        <div>
          <Outlet />
        </div>
      </>
    </div>
  )
}

export default App