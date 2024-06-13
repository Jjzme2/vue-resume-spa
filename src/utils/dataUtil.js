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

  dataExists(store, namespace) {
    const items = store.getters[`${namespace}/getAll`];
    return items && items.length > 0;
  },

  retrieve(store, namespace) {
    if (!store.getters[`${namespace}/getAll`]) {
      console.warn(`No data available in the store for ${namespace}, please `);
    }
    return this.mapArray(store.getters[`${namespace}/getAll`]);
  },

  // Get By

  getDataByID(store, collectionName, id) {
    try {
      const item = store.getters[`${collectionName}/getByField`]("id", id);

      if (Array.isArray(item) && item.length > 1) {
        this.handleError(
          store,
          "Too many items have been found with the same id",
          collectionName
        );
      }

      return item;
    } catch (error) {
      this.handleError(store, error, collectionName);
    }
  },

  getDataByActivity(store, collectionName, isActive) {
    try {
      isActive = Boolean(isActive);
      const items = store.getters[`${collectionName}/getAll`].filter(
        (item) => item.active === isActive
      );
      console.table(items);
      return items.length > 0 ? this.mapArray(items) : [];
    } catch (error) {
      this.handleError(store, error, collectionName);
    }
  },

  // Data Util functions

  mapArray(arrayToMap) {
    if (!Array.isArray(arrayToMap)) return arrayToMap;

    return arrayToMap.map((item) => {
      return { ...item };
    });
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
