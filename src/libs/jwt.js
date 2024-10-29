import jwt from "jsonwebtoken";

//generate token type promise...
export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "andres123",
      {
        expiresIn: "1d",
      },
      (error, token) => {
        //if exists error, send Reject()
        if (error) reject(error);
        //Not exists error, send Resolver(token)
        resolve(token);
      }
    );
  });
};
