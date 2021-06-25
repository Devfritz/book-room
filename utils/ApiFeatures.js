class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.query.location,
            $options: 'i',
          },
        }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  }
  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
  }
}

export default ApiFeatures;
