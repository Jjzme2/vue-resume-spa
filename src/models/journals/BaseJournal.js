import dataUtils from "@/utils/dataUtil";

class BaseJournal {
  constructor(
    name,
    sample_link,
    listing_link,
    image_link,
    description,
    created_on,
    content_style,
    isActive
  ) {
    this.name = name;
    this.sample_page_link = sample_link;
    this.listing_link = listing_link;
    this.image_link = image_link;
    this.description = description;
    this.created_on = created_on;
    this.content_style = content_style;
    this.isActive = isActive;
  }

  getContentStyle(store) {
    const allStyles = dataUtils.retrieve(store, "content_styles");

    return allStyles.find((style) => style.id === this.content_style);
  }
}
export default BaseJournal;
