import NavBar from "../NavBar/NavBar"
import './Layout.css'
// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div className="h-96 layout">
        <NavBar/>
        {children}
    </div>
  )
}

export default Layout