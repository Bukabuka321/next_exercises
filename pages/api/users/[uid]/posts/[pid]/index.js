import users from "/database.json";

export default function handler(req, res) {
    const { uid } = req.query;
    const { pid } = req.query;
    res.json(users[uid].posts[pid])
  }