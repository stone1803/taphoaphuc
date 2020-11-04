import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <h2 className="mt-2">Chào bạn ! Lão bạch có thể giúp gì cho bạn</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link active" href="/">
              <a className="nav-link active" >LAOBACHSHOP</a>
            </Link>
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
            <a onClick={() => router.push("/")} className="nav-link active">
              Trang chủ <span className="sr-only">(current)</span>
            </a>
            <Link className="nav-link active" href="/sanpham">
              <a className="nav-link active" >Sản Phẩm </a>
            </Link>
            <Link className="nav-link active" href="/baiviet">
              <a className="nav-link active" >Bài Viết</a>
            </Link>

            <Link className="nav-link active" href="/lienhe">
              <a className="nav-link active" >Liên Hệ</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
