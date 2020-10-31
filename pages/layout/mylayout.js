import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Head from "next/head";
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Lão Bạch Shop</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
          integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
          crossorigin="anonymous"
        ></script>{" "}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CKQ5QZF0QR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-CKQ5QZF0QR', {
                      page_path: window.location.pathname,
                    });
                  `,
          }}
        />
 

      </Head>
      {/* <div id="fb-root"></div>
      <script
          dangerouslySetInnerHTML={(function(d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0];
            js = d.createElement(s);
            js.id = id;
            js.src =
              "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, "script", "facebook-jssdk")}
        />
      <div
        class="fb-customerchat"
        page_id="ledanghongphuc"
        theme_color="#44bec7"
        logged_in_greeting="Xin chào, tôi có thể hổ trợ gì cho bạn không?"
        logged_out_greeting="Xin chào, tôi có thể hổ trợ gì cho bạn không?"
      ></div> */}
      <Navbar />
      {props.children}
      <MessengerCustomerChat
    pageId="102625614969628"
    appId="EAAEEzYL73UkBAG5ljD9NWOZASDxNuUBn0il6ZBGsO2ReeqVbboWT8aJISkXK3IV0YlISF6edDBnqPv6KGrNHxkmsw03M7VFBvs9b6EJU08ZAJdfVeRXlx7pukeGHsns677VSt4ZAfwxbP4r5EVyiUzJt2g7q16Mvr3ixS1bZCGwHjzWxJgIsvX13mOYLFUW8ZD"
    htmlRef="<REF_STRING>"
  />,
      <Footer />
    </div>
  );
}
