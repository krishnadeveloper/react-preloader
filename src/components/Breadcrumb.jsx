import { NavLink } from "react-router-dom"

const Breadcrumb = () => {
    return <div>
       | <NavLink to="/">Home</NavLink> | 
       | <NavLink to="/app">Main App</NavLink> | 
       | <NavLink to="/about">About</NavLink> | 
    </div>
}

export default Breadcrumb