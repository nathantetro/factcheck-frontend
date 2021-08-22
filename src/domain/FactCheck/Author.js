class Author {
    constructor(type = "Organization", name, sameAs) {
      this["@type"] = type;
      this.name = name;
      this.sameAs = sameAs;
    }
  }

  export default Author;