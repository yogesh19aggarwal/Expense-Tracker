const { UnAuthenticated } = require("../errors/users");
const requestAsyncHandler = require("../handlers/async.handler");
const EncDec = require("../repository/encdec.repository");
/**
 * 
 * @type {import("express").Handler}
 */
const authenticationMiddleware = requestAsyncHandler((req, res, next) => {
    const authorization = req.headers.authorization;
    const [bearer, token] = (authorization || "").split(" ");
    if (bearer !== "Bearer" || !token) {
        throw new UnAuthenticated();
    }
    const jwtPayload = EncDec.decryptToken(token);
    req.user = jwtPayload;
    next();
})
module.exports = authenticationMiddleware;