import { where, query, orderBy, collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, "productos"),
      where("categoryId", "==", idCategory)
    );
  } else {
    q = query(collection(db, "productos"), orderBy("categoryId"));
  }

  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export const firestoreDetailFetch = async (idItem) => {
  const docRef = doc(db, "productos", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
