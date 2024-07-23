const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).send({ message: "Not authorised as an admin" });
  }
};
module.exports = admin;