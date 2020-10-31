import React from "react";
import Layout from "../layout/mylayout";
import { useSelector } from "react-redux";
import Link from "next/link";

import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
export default function IndexProduct() {
  const todosQuery = {
    collection: "sanpham",
    orderBy: ["tenSanPham"],
    // orderBy: 'state' // string notation can also be used
  };
  useFirestoreConnect(() => [todosQuery]); // sync tips collection from Firestore into redux
  firebaseConnect("sanpham");
  const sanpham = useSelector(
    (state) => state.firestoreReducer.ordered.sanpham
  );
  let data = sanpham;
  return (
    <Layout>
      <div className="container">
        <br />
        <h4>Sản phẩm mà chúng tôi cung cấp !</h4>
        <br />
        <div className="row" id="ads">
          {data &&
            data.map((data, index) => {
              return (
                <div className="col-md-4 mb-4">
                  <div className="card rounded">
                    <div className="card-image">
                      <span className="card-notify-badge">{data.id}</span>
                      <img
                        className="img-fluid"
                        src={data.hinhAnh}
                        alt={data.tenSanPham}
                      />
                    </div>
                    <div className="card-image-overlay m-auto">
                      <span className="card-detail-badge">{data.gia} VNĐ</span>
                      <span className="card-detail-badge ml-2">Lượt xem </span>
                    </div>
                    <div className="card-body text-center">
                      <div className="ad-title m-auto">
                        <h5>{data.tenSanPham}</h5>
                      </div>
                      <Link href="/sanpham/[id]" as={"/sanpham/" + data.id}>
                        <button
                          type="button"
                          class="block px-2 py-1 text-gray-500 rounded hover:bg-orange-300 focus:text-white focus:outline-none"
                        >
                          <span class="">Xem chi tiết</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
    
          ,
        </div>
      </div>
    </Layout>
  );
}
