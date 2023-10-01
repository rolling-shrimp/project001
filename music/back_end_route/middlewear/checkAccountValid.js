const checkAccountAvailability = (account, connection, callback) => {
  const query = "SELECT COUNT(*) AS count FROM account WHERE account = ?";
  connection.query(query, [account], (error, results) => {
    if (error) {
      console.error("Error checking account availability:", error);
      callback(error, null);
    } else {
      const count = results[0].count;
      const isAccountAvailable = count === 0;
      callback(null, isAccountAvailable);
    }
  });
};

module.exports = checkAccountAvailability;
