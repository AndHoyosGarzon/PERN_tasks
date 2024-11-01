import pool from "../db.js";

export const getAllTasks = async (req, res, next) => {
  console.log(req.userId);
  //Error handling makes it library EXPRESS-PROMISE-ROUTER...
  const result = await pool.query("SELECT * FROM task WHERE user_id = $1", [
    req.userId,
  ]);
  res.status(200).json(result.rows);
};

export const getTaskId = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result.rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    //added task in database postgress
    const { rows } = await pool.query(
      "INSERT INTO task (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, description, req.userId]
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    console.log(`Error in controller task create routes ${error.message}`);
    if (error.code === "23505") {
      return res.status(409).json({ message: "Task already exists" });
    }
    //We send error to middleware
    next(error);
  }
};

export const updateTaskId = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Id task not found" });
  }

  return res.status(200).json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Id task not found" });
  }
  res.sendStatus(204);
};
