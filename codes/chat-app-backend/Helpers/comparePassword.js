const bcrypt = require("bcrypt");
const comparePassword = async (password, hashedPassword) => {
  const compare = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return compare;
};

module.exports = comparePassword;
