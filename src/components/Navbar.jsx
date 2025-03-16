import { NavLink } from "react-router-dom"
import Logo from "./Logo";

const navMenu = [
  { path: "/tourList", name: "旅途行程" },
  { path: "/tourList", name: "拾光日誌" },
  { path: "/tourList", name: "關於我們" },
];

const memberMenu = [
  { path: "/tourList", name: "會員資訊", img: "/icon/user.png" },
  { path: "/tourList", name: "我的收藏", img: "/icon/bookmark.png" },
  { path: "/tourList", name: "訂單管理", img: "/icon/shipping_truck.png" },
  { path: "/tourList", name: "會員登出", img: "/icon/logout.png" },
];

function Navbar () {
  return (
    <>
      <header className="bg-grey-000">
        <nav className="container d-flex justify-content-between align-items-center py-3">
          <NavLink to="/" className="logoImg"><Logo/></NavLink>
          <ul className="d-flex justify-content-between gap-4 align-items-center">
            {navMenu.map((item)=>{
              return (<li key={item.name}><NavLink to={item.path} className="text-primary-700">{item.name}</NavLink></li>)
            })}            
          </ul>
          <div className="d-flex align-items-center gap-2">
            <NavLink to="/cart" className="cart-icon d-flex justify-content-center align-items-center" >
              <img src="/icon/cart.png" alt="" />
            </NavLink>
            <NavLink to="/login"><span className="log-in text-primary-700 px-3 py-2">登入</span></NavLink>
              <div className="dropdown">
                <button className="btn dropdown-toggle text-center p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="me-2" src="/icon/avatar.png" alt="" />
                  <span className="me-2 text-primary-700 fw-semibold">Jennie</span>
                  <img src="/icon/arrow_down.png" alt="" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end text-primary-700 bg-grey-000 py-2">
                  {memberMenu.map(item => {
                    return ( <li key={item.name} className="d-flex flex-column gap-2">
                      <NavLink className="dropdown-item text-primary-700 text-center d-flex align-items-center gap-3 px-8 py-6" 
                      to={item.path}><img src={item.img} alt="" /><span>{item.name}</span></NavLink>
                      </li> )
                  })}
                </ul>
              </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;

