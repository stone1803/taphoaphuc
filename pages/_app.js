import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "../styles/globals.css";
import "antd/dist/antd.css";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import { createWrapper } from "next-redux-wrapper";
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
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, useSelector } from "react-redux";
import rootReducer from "./api/rootReducer";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded,
} from "react-redux-firebase";
import Loading from "./api/loading";
import * as gtag from "./api/gtag"
import Router from 'next/router'
import MessengerChat from "./api/MessengerChat"
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebaseReducer.auth);
  if (!isLoaded(auth))
    return (
      <div className="container mt-4">
        <Loading/>
      </div>
    );
  return children;
}
const middleWare = [thunk.withExtraArgument({ getFirestore, getFirebase })];
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWare), reduxFirestore(firebase))
);
// cho store o tren moi chay vi cap store truoc sau do moi config firebase get database
const rrfConfig = {
  userProfile: "user",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  //enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
const makestore = () => store;
const wrapper = createWrapper(makestore);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <Component {...pageProps} />{" "}

        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
export default wrapper.withRedux(MyApp);
