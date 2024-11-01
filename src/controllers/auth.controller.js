import pool from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({ message: "Email not found" });
  }

  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    res.status(400).json({ message: "Error in password" });
  }

  const token = await createAccessToken({ id: result.rows[0].id });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, //the date is format milliseconds
  });

  return res.status(200).json(result.rows[0]);
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;

    const result = await pool.query(
      "INSERT INTO users(name, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    //We use the cookies
    res.cookie("token", token, {
      httpOnly: true, //Not access with code javascript
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, //the date is format milliseconds
    });

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res
        .status(400)
        .json({ message: "Email already exists in database" });
    }
    return next(error);
  }
};

export const signout = async (req, res) => {
  //cleaning cookie
  res.clearCookie("token");
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    req.userId,
  ]);
  console.log(req.userId);
  return res.status(200).json(result.rows[0]);
};
