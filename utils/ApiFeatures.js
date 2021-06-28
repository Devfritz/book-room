class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: 'i',
          },
        }
      : {};
    console.log(location);

    this.query = this.query.find({ ...location });
    return this;
  }
  filter() {
    let query;

    // copy object of req.query
    const copyQuery = { ...this.queryStr };

    const removeFields = ['select', 'sort', 'page', 'limit', 'location'];

    removeFields.forEach((params) => delete copyQuery[params]);

    this.query = this.query.find(copyQuery);

    return this;
  }
  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    console.log(currentPage);
  }
}

export default ApiFeatures;
