import { db } from "../.firebase/config";
import { getDocs, collection } from "firebase/firestore";

export default {
  async getDocuments(collectionName, showInConsole = false) {
    // const snapshot = await db.collection(collectionName).get();
    const snapshot = await getDocs(collection(db, collectionName));

    if (showInConsole) {
      snapshot.forEach((doc) => {
        // Use this to see the data in the console
        console.log(doc.id, " => ", doc.data());
      });
    }
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};
