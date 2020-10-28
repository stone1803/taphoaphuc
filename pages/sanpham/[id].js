import React from "react";
import Link from "next/link";
import Layout from "../layout/mylayout";
import firebase from "firebase";
import Head from "next/head";
import { ProductJsonLd } from 'next-seo';

const firebaseConfig = {
  apiKey: "AIzaSyCmcq8_D6LB5bK49rENMle7XoN1GAWcaMw",
  authDomain: "phucmap.firebaseapp.com",
  databaseURL: "https://phucmap.firebaseio.com",
  projectId: "phucmap",
  storageBucket: "phucmap.appspot.com",
  messagingSenderId: "36915617776",
  appId: "1:36915617776:web:779fa53e6fb3b48b76c735",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default function ProductID(props) {
  return (
    <Layout>
       <Head>
        <title>Lão bạch Shop - {props.tenSanPham}</title>
        <meta name="description" content={props.totTat} />
        <meta name="thumbnail" content={props.hinhAnh}/>
        <meta property="og:title" content={props.tenSanPham} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.totTat} />
        <meta property="og:image" content={props.hinhAnh} />
        <meta  name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <ProductJsonLd
      productName={props.tenSanPham}
      images={[
        'https://firebasestorage.googleapis.com/v0/b/phucmap.appspot.com/o/121638426_103259701572886_5718697555251716310_n-min.jpg?alt=media&token=98324002-173d-405f-9e73-686266f931df',
        'https://firebasestorage.googleapis.com/v0/b/phucmap.appspot.com/o/121638426_103259701572886_5718697555251716310_n-min.jpg?alt=media&token=98324002-173d-405f-9e73-686266f931df',
        'https://firebasestorage.googleapis.com/v0/b/phucmap.appspot.com/o/121638426_103259701572886_5718697555251716310_n-min.jpg?alt=media&token=98324002-173d-405f-9e73-686266f931df',
      ]}      description={props.tomTat}
      brand="LAZU"
      reviews={[
        {
          author: {
            type: 'Person',
            name: 'Ta là lão bạch',
          },
          datePublished: '2020-10-06T03:37:40Z',
          reviewBody:
            'Sản phầm đúng nhập khẩu 100%. lão bạch đáng tin dùng',
          name: 'So awesome!!!',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1',
          },
          publisher: {
            type: 'Organization',
            name: 'TwoVit',
          },
        },
      ]}
      aggregateRating={{
        ratingValue: '4.4',
        reviewCount: '89',
      }}
      offers={[
        {
          price: props.gia,
          priceCurrency: 'VND',
          priceValidUntil: '2020-11-05',
          itemCondition: 'http://schema.org/UsedCondition',
          availability: 'http://schema.org/InStock',
          url: `https://laobach.com/${props.id}`,
          seller: {
            name: 'Lão Bạch',
          },
        },
  
      ]}
      mpn="925872"
    />
      <div class="container mt-3">
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img src={props.hinhAnh} />
                  </div>
                  <div class="tab-pane" id="pic-2">
                    <img src={props.hinhAnh1} />
                  </div>
                  <div class="tab-pane" id="pic-3">
                    <img src={props.hinhAnh2} />
                  </div>
                  <div class="tab-pane" id="pic-4">
                    <img src={props.hinhAnh3} />
                  </div>
                  <div class="tab-pane" id="pic-5">
                    <img src={props.hinhAnh4} />
                  </div>
                </div>
                <ul class="preview-thumbnail nav nav-tabs">
                  <li class="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={props.hinhAnh} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src={props.hinhAnh2} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src={props.hinhAnh3} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src={props.hinhAnh4} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src={props.hinhAnh5} />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="details col-md-6">
                <h3 class="product-title mt-2">{props.tenSanPham}</h3>
                <div class="rating">
                  <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <span class="review-no">1368 Lượt xem</span>
                </div>
                <p class="product-description">{props.totTam}</p>
                <h4 class="price">
                  Giá sản phẩm : <span>{props.gia} - VNĐ</span>
                </h4>
                <p class="vote">
                  <strong>⬇ 10%</strong> Giảm khi bạn mua tại đây{" "}
                </p>
                <h5 class="sizes">
                  🚀: Miến phí ship nội thành HCM và Vũng Tàu
                  <span class="size" data-toggle="tooltip" title="small"></span>
                </h5>
                <h5 class="colors">📱 Liên Hệ: 0937895335</h5>
                <div class="action">
                  <button
                    class="add-to-cart btn btn-danger mr-2 mb-2"
                    type="button"
                  >
                    MUA HÀNG
                  </button>
                  <button class="like btn btn-info mr-2 mb-2" type="button">
                    <span class="fa fa-facebook">
                      {" "}
                      Share cho người thân bạn dùng nhé !
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card container mt-2">
        <h1>Nội dung cật nhật</h1>
      </div>
    </Layout>
  );
}
export const getServerSideProps = async ({ query }) => {
  const content = {};
  await fire
    .firestore()
    .collection("sanpham")
    .doc(query.id)
    .get()
    .then((result) => {
      console.log(result.data);
      content["tenSanPham"] = result.data().tenSanPham;
      content["tomTat"] = result.data().tomTat;
      content["hinhAnh"] = result.data().hinhAnh;
      content["hinhAnh1"] = result.data().hinhAnh1;
      content["hinhAnh2"] = result.data().hinhAnh2;
      content["hinhAnh3"] = result.data().hinhAnh3;
	  content["hinhAnh4"] = result.data().hinhAnh4;
	  content["hinhAnh5"] = result.data().hinhAnh5;


      content["gia"] = result.data().gia;
    });
  return {
    props: {
      tenSanPham: content.tenSanPham,
      totTam: content.tomTat,
      gia: content.gia,
      hinhAnh: content.hinhAnh,
      hinhAnh1: content.hinhAnh1,
      hinhAnh2: content.hinhAnh2,
      hinhAnh3: content.hinhAnh3,
	  hinhAnh4: content.hinhAnh4,
	  hinhAnh5: content.hinhAnh5

    },
  };
};
