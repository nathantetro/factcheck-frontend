class ReviewRating {
    constructor(ratingValue, bestRating, worstRating, alternateName) {
      this["@type"] = "Rating";
      this.ratingValue = ratingValue;
      this.bestRating = bestRating;
      this.worstRating = worstRating;
      this.alternateName = alternateName;
    }
  }

  export default ReviewRating;