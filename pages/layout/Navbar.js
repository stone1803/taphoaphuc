import React from "react";

export default function Navbar() {
  return (
    <div>
      <h2 className="mt-2">Chào bạn ! Lão bạch có thể giúp gì cho bạn</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          LAOBACH.COM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">
              Trang chủ <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              Sản Phẩm
            </a>
            <a className="nav-link" href="#">
              Dịch vụ
            </a>
            <a className="nav-link" href="#">
              Liên Hệ
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
