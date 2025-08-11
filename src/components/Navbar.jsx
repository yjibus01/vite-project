// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <header className="Navbar">
        {/* 왼쪽: 로고 */}
        <div className="nav-logo">
          <a href="/">JI'S HOUSE</a>
        </div>
  
        {/* 오른쪽: 메뉴 + 아이콘 */}
        <div className="nav-right">
          <nav className="nav-menu">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">MENU</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </nav>
          <div className="nav-icons">
            <a href="#"><span className="material-symbols-outlined">search</span></a>
            <a href="#"><span className="material-symbols-outlined">person</span></a>
            <a href="#"><span className="material-symbols-outlined">shopping_cart</span></a>
          </div>
        </div>
      </header>
    );
  }
  