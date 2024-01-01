import { Link } from "react-router-dom"
const NavBar: React.FC = () => {


    return(
        <div className="p-4">
            <Link className='m-2 hover:underline' to="/store">Store</Link>
            <Link className='m-2 hover:underline' to="/cart">Cart</Link>
        </div>
    )
}
export default NavBar