import { db } from "../.firebase/config";
import {
  //   addDoc,
  collection,
  doc,
  getDocs,
  //   serverTimestamp,
  setDoc,
} from "firebase/firestore";

const collections = ["users", "games"];

export default {
  async getDocuments(collectionName, showInConsole = false) {
    if (!collections.includes(collectionName)) {
      console.error(
        `Collection ${collectionName} not found in the database. Please try one of the following: ${collections.join(
          ", "
        )}`
      );
      return;
    }

    try {
      const snapshot = await getDocs(collection(db, collectionName));

      if (showInConsole) {
        snapshot.forEach((doc) =>
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
        );
      }

      let documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Normalize paths in each document
      documents.forEach(this.normalizePaths);

      return documents;
    } catch (error) {
      console.error(`Error fetching documents from ${collectionName}:`, error);
    }
  },

  async setDocument(collectionName, documentId, data) {
    this.announce(collectionName, data, "set");
    try {
      const docRef = doc(db, collectionName, documentId);
      await setDoc(docRef, data, { merge: true });
      return true;
    } catch (error) {
      console.error(`Error setting document in ${collectionName}:`, error);
    }
  },

  async deleteDocument(collectionName, documentId) {
    console.log(
      `Attempting to delete document with ID: ${documentId} from collection: ${collectionName}`
    );
    try {
      await db.collection(collectionName).doc(documentId).delete();
      return true;
    } catch (error) {
      console.error(`Error deleting document from ${collectionName}:`, error);
    }
  },

  normalizePaths(data) {
    for (let key in data) {
      if (typeof data[key] === "string") {
        data[key] = data[key].replace(/\\/g, "/");
      } else if (typeof data[key] === "object") {
        this.normalizePaths(data[key]);
      }
    }
  },

  announce(collectionName, data, functionName) {
    console.log(
      `Attempting to ${functionName} a new document to the collection: ${collectionName} with the following data: ${JSON.stringify(
        data
      )}`
    );
  },
};
