import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PieChartIcon from '@mui/icons-material/PieChart';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Header() {
    return (
        <>
          <header>
            <div className="header_bar">
                <div className="header_contain">
                    <div className="logo"></div>
                    <div className="title">
                        <h1>ZIZI.AM</h1>
                    </div>
                    <div className="bar_options">
                        <ul>
                            <li><a className="aTag" href="#"><LogoutIcon/></a></li>
                            <li><a className="aTag" href="#"><PersonAddAltIcon/></a></li>
                            <li><a className="aTag" href="#"><LocalAtmIcon/>price: 1560$</a></li>
                            <li><a className="aTag" href="#"><PieChartIcon/>quantity: 4</a></li>
                            <li><a className="yellow" href="#"><ShoppingCartIcon/>view cart</a></li>
                        </ul>
                        <div className="phone_number">
                            <h2><PhoneInTalkIcon sx={{ fontSize: 35 }}/> +374-XX-XX-XX-XX</h2>
                        </div>
                    </div>
                </div>
                <nav className="menu_nav">
                    <ul className="menu_options">
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Best Rates</a></li>
                        <li><a href="#">Best Newest</a></li>
                    </ul>
                    <div className="cart_btn">
                        <button className="cart">Cart item <ShoppingCartIcon sx={{ fontSize: 35 }}/></button>
                    </div>
                </nav>
            </div>
          </header>
        </>
    )
}

export default Header