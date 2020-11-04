import React, { useState, useEffect } from "react";
import Layout from "../layout/mylayout";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
const todosQuery = {
  collection: "baiviet",
  orderBy: ["tenBaiViet"],
  // orderBy: 'state' // string notation can also be used
};
import { usePromiseTracker } from "react-promise-tracker";

export default function IndexQueDich() {
  useFirestoreConnect(() => [todosQuery]); // sync tips collection from Firestore into redux
  firebaseConnect("baiviet");
  const que64 = useSelector((state) => state.firestoreReducer.ordered.baiviet);

  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await que64;
      setData(res);
    };

    fetchPosts();
  }, []);

 
  if (que64 === undefined) {
    return <p>Loading</p>;
  }
  return (
    <Layout>
      <Head>
        <title>Tổng hợp bài viết đặc sắc về sức khỏe của Lão Bạch</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tổng hợp những bài viết về sức khỏe trải nghiệm của shop lão bạch " />

      </Head>
      <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {" "}
              📣 Mến chào !
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-base">
              Dưới đây tập hợp những bài viết hay rất từ nhiều nguồn và cũng chính tác giả viết .Sẽ giúp ít cho bạn rất nhiều trong vấn đề sức khỏe  🙏{" "}
            </p>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
   

            {data &&
              data.map((data, index) => {
                return (
                  <div class="card">
                    <div class="">
                      <img
                        className=""
                        src={data.HinhAnh}
                      />
                    </div>

                    <div class="">
                      <div class="">
                        <div class="">
                          <div class=""></div>
                        </div>
                  
                      </div>
                      <div class="h4 mt-2">{data.tenBaiViet}</div>

                      <div class="summary-post text-base text-justify">
                        {data.tomTat.length > 150
                          ? data.tomTat.substr(0, 150) + "..."
                          : data.tomTat}
                        <Link
                          href="/baiviet/[id]"
                          as={"/baiviet/" + data.id}
                        >
                          <button
                            type="button"
                            class="btn btn-info ml-2"
                          >
                            <span class="">Xem chi tiết</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

