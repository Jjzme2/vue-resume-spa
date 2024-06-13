import dataUtils from "@/utils/dataUtil";

class BaseBook {
  constructor(
    name,
    listing_link,
    image_link,
    description,
    created_on,
    content_style,
    isActive
  ) {
    this.name = name;
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
export default BaseBook;
