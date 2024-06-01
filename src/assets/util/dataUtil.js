const storeData = {
  async fetch(store, namespace) {
    const items = store.getters[`${namespace}/getAll`];
    if (!items || items.length === 0) {
      try {
        await store.dispatch(`${namespace}/fetchAll`);
      } catch (error) {
        this.handleError(store, error, namespace);
      }
    }
  },

  getDataByID(store, collectionName, id) {
    try {
      return store.getters[`${collectionName}/getByField`]("id", id);
    } catch (error) {
      this.handleError(store, error, collectionName);
    }
  },

  dataExists(store, namespace) {
    const items = store.getters[`${namespace}/getAll`];
    return items && items.length > 0;
  },

  retrieve(store, namespace) {
    if (!store.getters[`${namespace}/getAll`]) {
      console.warn(`No data available in the store for ${namespace}, please `);
    }

    return store.getters[`${namespace}/getAll`];
  },

  logError(error, context = "") {
    console.error(`Error${context ? " in " + context : ""}:`, error);
  },

  handleError(store, error, namespace, dispatchErrorAction = false) {
    this.logError(error, namespace);
    if (dispatchErrorAction) {
      store.dispatch(`${namespace}/handleError`, error);
    }
  },
};

export default storeData;
