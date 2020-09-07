<p align="center"><img src="./denovel.jpg" width="400">

<p align="center">

[![tag](https://img.shields.io/github/tag/fauzan121002/validasaur.svg)](https://github.com/fauzan121002/denovel)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/fauzan121002/denovel/blob/master/LICENSE)
[![tag](https://img.shields.io/badge/deno-1.3.0,1.3.1-green.svg)](https://github.com/denoland/deno)

</p>

Denovel is Web Based Framework made by <a href="https://github.com/fauzan121002"> Muhammad Fauzan </a>. Denovel is Inspired by [Laravel](https://laravel.com).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Denomand](#denomand)
    - [Help](#help)
    - [Create a controller](#create-a-controller)
    - [Create a middleware](#create-a-middleware)
    - [Create a model](#create-a-model)
    - [Create a provider](#create-a-provider)
  - [Model](#model)
    - [Model Example](#model-example)
    - [Model Field Options](#model-field-options)
    - [Model Datatypes](#model-datatypes)
    - [Model Relationship](#model-relationship)
- [🤝 Contributing](#contributing)
- [📝 License](#license)

## Installation

1. **Clone Repository**

```bash
git clone https://github.com/fauzan121002/denovel.git
cd denovel
```

2. **Open `.env` then change it by your database information**

```
PORT=8000
BASE_URL=http://localhost:8000

#only support mysql,mongo,sqlite, and postgres
#you may experience some trouble in mariaDB (mysql)
#see the problem here https://github.com/manyuanrong/deno_mysql/issues/29
DB_CONNECTION=postgres
DB_HOST=localhost
DB_NAME=denovel
DB_USER=username
DB_PASS=password
DB_PORT=5432
```

3. **Run the server**

```bash
deno run -A --unstable server.ts
```

or you can use denon (make sure you already install denon in your local computer , see the [guide here](https://deno.land/x/denon@2.3.3))

```bash
denon run -A --unstable server.ts
```

## Usage

### Denomand
Denomand is official command-line interface for [Denovel](https://github.com/fauzan121002/denovel)

### Help

```bash
deno run -A --unstable denomand.ts help
```

#### Create a controller

```bash
deno run -A --unstable denomand.ts controller --name </YourControllerName>
```

#### Create a middleware

```bash
deno run -A --unstable denomand.ts middleware --name </YourMiddlewareName>
```

#### Create a model

```bash
deno run -A --unstable denomand.ts model --name </YourModelName>
```

#### Create a provider

```bash
deno run -A --unstable denomand.ts provider --name </YourProviderName>
```

### Model

[DenoDB](https://github.com/eveningkid/denodb) is MySQL, SQLite, MariaDB, PostgreSQL and MongoDB ORM for Deno currently used by [Denovel](https://github.com/fauzan121002/denovel)

#### Model Example

```ts
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
}
```
#### Model Field Options

```ts
  static fields = {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
  };
```

Field Options :
| Option  | Usage |
| ------------- | ------------- |
| type  | [Datatypes List](#datatypes-list)  |
| unique  | **boolean**  |
| allowNull  | **boolean**  |
| length  | **integer**  |

#### Model Datatypes

Example usage of boolean and integer:
```ts
class BlockedUsers extends Model {
    static table = "blocked_users";
    static timestamps = false;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
        }
    };
}
```

##### Datatypes List
More datatypes:
| Types  |
| ------------- |
| BIG_INTEGER  |
| INTEGER  |
| DECIMAL  |
| FLOAT  |
| UUID  |
| BOOLEAN  |
| BINARY  |
| ENUM  |
| STRING  |
| TEXT  |
| DATE  |
| DATETIME  |
| TIME  |
| TIMESTAMP  |
| JSON  |
| JSONP  |

#### Model Relationship

##### One to One : 
```ts
import {db, DataTypes, Model} from "../../vendor/Denovel/Support/Facades/DB.ts";

import { Relationships } from 'https://deno.land/x/denodb/mod.ts';

class Owner extends Model {
  // ...

  // Fetch a business binded to this owner
  static business() {
    return this.hasOne(Business);
  }
}

class Business extends Model {
  // ...

  // Fetch an owner binded to this business
  static owner() {
    return this.hasOne(Owner);
  }
}

Relationships.oneToOne(Business, Owner);

db.link([Owner, Business]);
```

##### One to Many

```ts
import {db, DataTypes, Model} from "../../vendor/Denovel/Support/Facades/DB.ts";

import { Relationships } from 'https://deno.land/x/denodb/mod.ts';

class Owner extends Model {
  static table = 'owners';

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  };

  static businesses() {
    return this.hasMany(Business);
  }
}

class Business extends Model {
  static table = 'businesses';

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    ownerId: Relationships.belongsTo(Owner),
  };

  static owner() {
    return this.hasOne(Owner);
  }
}

db.link([Owner, Business]);

```
##### Many to Many

```ts
import {db, DataTypes, Model} from "../../vendor/Denovel/Support/Facades/DB.ts";

import { Relationships } from 'https://deno.land/x/denodb/mod.ts';

class Owner extends Model {
  static table = 'owners';

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  };

  static businesses() {
    return this.hasMany(Business);
  }
}

class Business extends Model {
  static table = 'businesses';

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  };

  static owners() {
    return this.hasMany(Owner);
  }
}

const BusinessOwner = Relationships.manyToMany(Business, Owner);

db.link([BusinessOwner, Business, Owner]);
```

Further informations :
- [One To One](https://eveningkid.github.io/denodb-docs/docs/guides/one-to-one)
- [One To Many](https://eveningkid.github.io/denodb-docs/docs/guides/one-to-many)
- [Many To Many](https://eveningkid.github.io/denodb-docs/docs/guides/many-to-many)
## 🤝 Contributing

Contributions, issues and feature requests are welcome, make sure to read the [contribution guideline](./CONTRIBUTING.md)

## 📝 License

This project is licensed under the terms of the [MIT license](./LICENSE)
