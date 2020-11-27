module.exports = function (request, response, next) {
  request.user ? next() : response.sendStatus(401);
};
