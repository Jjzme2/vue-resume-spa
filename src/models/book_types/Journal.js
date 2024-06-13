import BaseBook from "./BaseBook";

class Journal extends BaseBook {
  constructor(sample_link, ...args) {
    super(...args);
    this.sample_link = sample_link;
  }
}

export default Journal;
