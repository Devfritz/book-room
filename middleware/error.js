import ErrorHandler from '../utils/errorHandler';

const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };
  error.message = err.message;

  if (err.name === 'CastError') {
    const message = `Ressource not found. Invalid ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    isSuccess: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export default onError;
