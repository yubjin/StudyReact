import { Link } from "react-router-dom"

const RouteNav = () => {
  return (
    <nav>
        <ul>
            <li><strong>라우팅연습</strong></li>
        </ul>
        <ul>
            <li><Link to='/' pole='button'>Home</Link></li>
            <li><Link to='/page1' pole='button'>Page1</Link></li>
            <li><Link to='/page2?item=2' pole='button'>Page2</Link></li>
        </ul>
    </nav>
  )
}

export default RouteNav
