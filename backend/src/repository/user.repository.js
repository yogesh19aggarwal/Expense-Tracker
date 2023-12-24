const argon2 = require("argon2");
const EncDec = require("./encdec.repository");
module.exports = class {
  /**
   *
   * @param {string} email
   */
  static async getUserByEmail(email) {
    const user = await this.findOne({ email });
    return user;
  }

  /**
   *
   * @param {{email:string;password : string;name : string: avatar:string}} param0
   */
  static async makeUser({ email, password, name, avatar }) {
    const hashedPassword = await argon2.hash(password);
    const user = await this.create({ email, password: hashedPassword, name, avatar });
    return user;
  }
};
