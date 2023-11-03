import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const auth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("No authorization header");
    }

    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.error(error);
  }
};
