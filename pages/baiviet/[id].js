import Head from "next/head";
import firebase from "firebase";
import Layout from "../layout/mylayout";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import Loading from "../api/loading";
import { useState } from "react";
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
const Blog = (props) => {
  const router = useRouter();
  const { asPath, route, query } = useRouter();
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
  }
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.des} />
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.des} />
        <meta property="og:image" content={props.HinhAnh} />
      </Head>

      <div class="mx-auto container ">
        <div className="pl-5 bg-orange-200 rounded-lg mt-2 py-5">
          {ReactHtmlParser(props.noidung)}
        </div>
        <button
          onClick={() => router.push("/baiviet/")}
          type="button"
          class="mt-2 btn btn-info rounded"
        >
          <span class="">Trở về</span>
        </button>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async ({ query }) => {
  const content = {};
  try {
    const data = await fire
      .firestore()
      .collection("baiviet")
      .doc(query.id)
      .get()
      .then((result) => {
        console.log(result.data);
        content["tenBaiViet"] = result.data().tenBaiViet;
        content["tomTat"] = result.data().tomTat;
        content["noiDung"] = result.data().noiDung;
      });
      setLoading(true)
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      title: content.tenBaiViet,
      des: content.tomTat,
      noidung: content.noiDung,
    },
  };
};

export default Blog;
