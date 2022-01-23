const BCRYPT = require("bcrypt");
const comparePassword = async (hashedPassword, password) => {
  const compare = await new Promise((resolve, reject) => {
    BCRYPT.compare(password, hashedPassword, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });

  return compare;
};

module.exports = comparePassword;