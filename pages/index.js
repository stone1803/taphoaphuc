import Navbar from "./layout/Navbar";

import Head from "next/head";
import Main from "./layout/main";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Layout from "./layout/mylayout";
import Test from "./sanpham/test";

export default function Home() {
  return (
    <div>
       <DefaultSeo {...SEO}
       
        />
     
    <Layout>
      <Main/>
      <Test/>
    </Layout>
    </div>
  );
}
