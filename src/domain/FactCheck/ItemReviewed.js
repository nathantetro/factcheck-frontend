class ItemReviewed {
    constructor(author, datePublished, appearance) {
        this["@context"] = "https://schema.org";
        this.author = author;
        this.datePublished = datePublished;
        this.appearance = appearance;
    }
}

export default ItemReviewed;