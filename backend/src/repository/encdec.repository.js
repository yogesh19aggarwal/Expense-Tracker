const argon2 = require("argon2");
const { sign, verify } = require("jsonwebtoken");
const { getJwt } = require("../config");
const jwt = getJwt();
module.exports = class {
    /**
     * 
     * @param {string} password 
     * @param {string} hashedPassword 
     */
    static checkIfPasswordAndHashedPasswordSame(password, hashedPassword) {
        return argon2.verify(hashedPassword, password);
    }


    /**
     * @returns {string}
     * @param {{email : string; name;string; _id : string, avatar?:string}} jwtPayload 
     */
    static getToken(jwtPayload) {
        return sign(jwtPayload, jwt.JWT_SECRET, {
            expiresIn: "1h",
            notBefore: "0",
            algorithm: "HS256",
            audience: jwt.JWT_AUDIENCE,
            issuer: jwt.JWT_ISSUER
        })
    }


    /**
     * @param {string} 
     * @returns {{email : string; name;string; _id : string, avatar?:string}} jwtPayload 
     */
    static decryptToken(token) {
        return verify(token, jwt.JWT_SECRET, {
            expiresIn: "1y",
            notBefore: "0",
            algorithm: "HS256",
            audience: jwt.JWT_AUDIENCE,
            issuer: jwt.JWT_ISSUER
        })
    }
}