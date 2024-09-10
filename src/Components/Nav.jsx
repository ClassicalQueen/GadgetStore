import React from "react";

function Nav() {
  return (
    <header className="header">
      <div className="logo">
        Gadget<span className="store">Store</span>
      </div>
      <nav>
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="nav-list" id="nav-list">
          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
      <div className="search">
        <svg
          className="s-icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="fluent:search-48-filled">
            <path
              id="Vector"
              d="M8.54167 2.5C5.205 2.5 2.5 5.205 2.5 8.54167C2.5 11.8783 5.205 14.5833 8.54167 14.5833C9.92854 14.5855 11.2736 14.1084 12.3492 13.2329L16.4329 17.3167C16.4906 17.3764 16.5595 17.424 16.6358 17.4567C16.712 17.4895 16.7941 17.5067 16.877 17.5074C16.96 17.5082 17.0423 17.4924 17.1191 17.4609C17.1959 17.4295 17.2657 17.3831 17.3244 17.3244C17.3831 17.2657 17.4295 17.1959 17.4609 17.1191C17.4924 17.0423 17.5082 16.96 17.5074 16.877C17.5067 16.7941 17.4895 16.712 17.4567 16.6358C17.424 16.5595 17.3764 16.4906 17.3167 16.4329L13.2333 12.3492C14.1087 11.2735 14.5856 9.92849 14.5833 8.54167C14.5833 5.205 11.8783 2.5 8.54167 2.5ZM3.75 8.54167C3.75 5.89542 5.89542 3.75 8.54167 3.75C11.1879 3.75 13.3333 5.89542 13.3333 8.54167C13.3333 11.1879 11.1879 13.3333 8.54167 13.3333C5.89542 13.3333 3.75 11.1879 3.75 8.54167Z"
              fill="white"
            />
          </g>
        </svg>
        <input type="text" placeholder="    Search" />
      </div>
    </header>
  );
}

export default Nav;