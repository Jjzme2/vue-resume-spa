import { db } from "../.firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export default {
  async getDocuments(collectionName, showInConsole = false) {
    // const snapshot = await db.collection(collectionName).get();
    try {
      const snapshot = await getDocs(collection(db, collectionName));

      if (showInConsole) {
        snapshot.forEach((doc) => {
          // Use this to see the data in the console
          console.log(doc.id, " => ", doc.data());
        });
      }
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(error);
    }
  },

  async addDocument(collectionName, data) {
    this.announce(collectionName, data, "add");
    try {
      await addDoc(collection(db, collectionName), {
        ...data,
        created_on: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.error(error);
    }
  },

  async setDocument(collectionName, documentId, data) {
    this.announce(collectionName, data, "set");
    try {
      const docRef = doc(db, collectionName, documentId);
      await setDoc(docRef, data, { merge: true });
      return true;
    } catch (error) {
      console.error(error);
    }
  },

  announce(collectionName, data, functionName) {
    console.log(
      "Attempting to " +
        functionName +
        " a new document to the collection: " +
        collectionName +
        " with the following data: " +
        JSON.stringify(data)
    );
  },
};
