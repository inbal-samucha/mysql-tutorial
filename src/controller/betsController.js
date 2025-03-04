import { pool as db } from '../config/db.js';


const getAllBetsController = (req, res) => {
  res.send('getAllBetssController')
}

const createNewBetController = async (req, res) => {
  const { user_id, bet_amount, bet_type } = req.body;

  const sql = `INSERT INTO bets (user_id, bet_amount, bet_type) VALUES (?,?,?)`;

  const [result] = await db.execute(sql, [user_id, bet_amount, bet_type])

  res.status(201).json(result)
}

export { getAllBetsController, createNewBetController }