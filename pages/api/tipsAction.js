export const actionTip = data => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(data)

    // async database

    const firestore = getFirestore();
    firestore
      .collection("baiviet").doc("data.so")
      .set({
        ...data,
  
      })
      .then(() => {
        dispatch({ type: "ADD_TIPS", data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actionNew = data => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(data)

    // async database

    const firestore = getFirestore();
    firestore
      .collection("baiviet").doc(data.url)
      .set({
        ...data,
  
      })
      .then(() => {
        dispatch({ type: "ADD_TIPS", data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actionBook = data => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(data)

    // async database

    const firestore = getFirestore();
    firestore
      .collection("tailieu").doc(data.url)
      .set({
        ...data,
  
      })
      .then(() => {
        dispatch({ type: "ADD_TIPS", data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

