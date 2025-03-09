import { NavLink } from "react-router-dom"

// const routes = [
//   { path: "/", name: "首頁" },
//   { path: "/products", name: "旅途行程" },
//   { path: "/cart", name: "購物車" },
// ];

export default function Navbar () {
  return (
    <>
      {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <ul className="navbar-nav flex-row gap-5 fs-5">
            {routes.map((route)=>(
              <li key={route.path} className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={route.path}>{route.name}</NavLink>
            </li>
            ))}
          </ul>
        </div>
      </nav> */}
      <header className="bg-grey-000">
        <nav className="container d-flex justify-content-between align-items-center p-3">
          <NavLink to="/" className="logoImg"><img src="./icon/logo_green.png" className=".img-fluid" alt="logo"/></NavLink>
          <ul className="d-flex justify-content-between gap-4 align-items-center">
            <li><NavLink to='/TourList' className="text-primary-700">旅途行程</NavLink></li>
            <li><a href="#" className="text-primary-700">拾光日誌</a></li>
            <li><a href="#" className="text-primary-700">關於我們</a></li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <NavLink to="/cart" className="cart-icon d-flex justify-content-center align-items-center" >
              <span className="material-symbols-outlined text-primary-700">
                shopping_cart
              </span>
            </NavLink>
            <NavLink to="/login"><span className="log-in text-primary-700 px-3 py-2">登入</span></NavLink></div>
        </nav>
      </header>
    </>
  )
}

