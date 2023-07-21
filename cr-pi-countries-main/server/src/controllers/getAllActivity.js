const { Activity } = require("../db");

const getAllActivity = async (req, res) => {
  try {
    
    const allActivity = await Activity.findAll();

    return res.status(200).json(allActivity);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = getAllActivity;
