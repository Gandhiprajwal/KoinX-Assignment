const welcomeController = async (req, res) => {
  res.status(200).json({
    "message": "Welcome to the Crypto Stats API",
    "task1": "To get the stats of a crypto, make a GET request to /stats?coin=coinId",
    "task2": "To get the deviation of a crypto, make a GET request to /deviation?coin=coinId"
  });
};

export default welcomeController;
