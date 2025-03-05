import { pool as db } from '../config/db.js';

export default class Bet {

  static async createBet (user_id, bet_amount, bet_type){

    const sql = `INSERT INTO bets (user_id, bet_amount, bet_type) VALUES (?,?,?)`;

    const [result] = await db.execute(sql, [user_id, bet_amount, bet_type])
    return { id: result.insertId, bet_amount, bet_type };

  }

}