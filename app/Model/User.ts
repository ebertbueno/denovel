import {db, DataTypes, Model} from "../../vendor/Denovel/Support/Facades/DB.ts";

class User extends Model {
    static table = "users";
    static timestamps = false;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING
    };

    // Add this when you have problem like https://github.com/eveningkid/denodb/issues/86
    // eachFieldNameWithAnExclamationMark!: string;
    // username!: string;
    // password!: string;
    // ... (etc)

}

db.link([User]);

export default User;
