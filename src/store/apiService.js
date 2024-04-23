import { db } from "../.firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const collections = [{ name: "users" }, { name: "games" }];

export default {
  async getDocuments(collectionName, showInConsole = false) {
    // const snapshot = await db.collection(collectionName).get();
    if (!collections.find((c) => c.name === collectionName)) {
      console.error(
        `Collection ${collectionName} not found in the database. Please try one of the following: ${collections
          .map((c) => c.name)
          .join(", ")}`
      );
      return;
    }

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
      console.error(error, collectionName);
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
