import {
  db,
  DataTypes,
  Model,
} from "../../vendor/Denovel/Support/Facades/DB.ts";

class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  };
}

db.link([User]);

export default User;
