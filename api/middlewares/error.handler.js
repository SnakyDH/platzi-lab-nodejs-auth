const logErrors = (err, req, res, next) => {
  console.error(err);
  next(err);
};
const userErrors = (err, req, res, next) => {};
const passwordErrors = (err, req, res, next) => {};

export { logErrors, userErrors, passwordErrors };
