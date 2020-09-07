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
  - [Create a controller](#create-a-controller)
  - [Create a middleware](#create-a-middleware)
  - [Create a model](#create-a-model)
- [Contributing](#contributing)
- [License](#license)

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

#only support mysql,mongo,and postgres
DB_CONNECTION=mysql
DB_HOST=localhost
DB_NAME=denovel
DB_USER=root
DB_PASS=
DB_PORT=3306
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

## 🤝 Contributing

Contributions, issues and feature requests are welcome, make sure to read the [contribution guideline](./CONTRIBUTING.md)

## 📝 License

This project is licensed under the terms of the [MIT license](./LICENSE)
