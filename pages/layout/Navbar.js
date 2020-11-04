import React from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <h2 className="mt-2">Chào bạn ! Lão bạch có thể giúp gì cho bạn</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a onClick={() => router.push("/")} className="navbar-brand" href="#">
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
            <a
              onClick={() => router.push("/")}
              className="nav-link active"
              href="#"
            >
              Trang chủ <span className="sr-only">(current)</span>
            </a>
            <a onClick={() => router.push("/sanpham/")} className="nav-link">
              Sản Phẩm
            </a>
            <a onClick={() => router.push("/baiviet/")} className="nav-link">
              
              
              Bài Viết</a>
            <a className="nav-link"
            onClick={() => router.push("/lienhe/")} 
            
            >Liên Hệ</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
