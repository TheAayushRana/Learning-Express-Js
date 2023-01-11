class ErrorHandling {
  constructor(status, message) {
    (this.status = status), (this.message = message);
  }

  static validationError(message = "All fields are necessary") {
    return new ErrorHandling(442, message);
  }

  static serverError(message = "Server Error") {
    return new ErrorHandling(500, message);
  }

  static notFoundError(message = "404 Error") {
    return new ErrorHandling(404, message);
  }

  static forBidden(message = "Not Allowed") {
    return new ErrorHandling(403, message);
  }
}

module.exports = ErrorHandling;
