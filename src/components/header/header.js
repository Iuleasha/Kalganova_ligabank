import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import UserButton from '../user-button/user-button';
import './header.scss';


function Header() {
    return (
        <header className="page__header">
            <div className="page__header-wrapper">
                <Logo/>
                <Navigation/>
            </div>
            <UserButton/>
        </header>
    );
}

export default Header;
