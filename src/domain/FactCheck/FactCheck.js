class FactCheck {
    constructor(datePublished, url, claimReviewed, itemReviewed, author, reviewRating) {
      this["@context"] = "https://schema.org";
      this["@type"] = "ClaimReview";
      this.datePublished = datePublished;
      this.url = url;
      this.claimReviewed = claimReviewed;
      this.itemReviewed = itemReviewed;
      this.author = author;
      this.reviewRating = reviewRating;
    }
  }


  export default FactCheck;