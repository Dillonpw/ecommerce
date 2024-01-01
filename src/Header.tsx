import Logo from './logo';
import NavBar from './Nav';
import Cart from './Cart';

const Header: React.FC = () => {
    return (
        <div className=' flex justify-between items-center p-2 shadow-md'>
            <Logo />
            <NavBar />
            <Cart />
        </div>
    );
};
export default Header;
