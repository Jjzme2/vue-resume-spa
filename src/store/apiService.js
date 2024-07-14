// import DevelopmentError from "@/classExtensions/Error/DevelopmentError";
import { db } from "../.firebase/config";
import {
  //   addDoc,
  collection,
  doc,
  getDocs,
  //   serverTimestamp,
  setDoc,
} from "firebase/firestore";

const collections = ["users"];

export default {
  async getDocuments(collectionName, showInConsole = false) {
    if (!collections.includes(collectionName)) {
      console.error("An error has occurred", {
        location: "apiService.js getDocuments()",
        parameters: { collectionName },
        cause:
          "The collection name provided does not exist within the locally defined list of collections.",
      });
      this.$loggerUtils.sendErrorLog(
        "An invalid collection name was provided",
        "[apiService.js, getDocuments()]",
        {
          type: "API Error",
          parameters: { collectionName },
        }
      );
    }

    try {
      const snapshot = await getDocs(collection(db, collectionName));

      if (showInConsole) {
        snapshot.forEach((doc) =>
          this.$loggerUtils.sendInfoLog(
            `${doc.id} => ${JSON.stringify(doc.data())}`
          )
        );
      }

      let documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

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
    this.$loggerUtils.sendInfoLog(
      `Attempting to delete document with ID: ${documentId} from collection: ${collectionName}`
    );
    try {
      await db.collection(collectionName).doc(documentId).delete();
      return true;
    } catch (error) {
      this.$loggerUtils.sendErrorLog(
        `Error deleting document from ${collectionName}:`,
        "apiService.js -- deleteDocument",
        { error: error }
      );
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
    this.$loggerUtils.sendInfoLog(
      `Attempting to ${functionName} a new document to the collection: ${collectionName} with the following data: ${JSON.stringify(
        data
      )}`
    );
  },
};
