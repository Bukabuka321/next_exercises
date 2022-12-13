export default function handler(req, res) {
    const database = require('../../../database.json');
    res.status(200).json(database);
  }