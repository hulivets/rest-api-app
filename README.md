# REST API
An example REST API for [Movie Library App](https://github.com/hulivets/movies-library) built on Express web framework for Node.js. Connecting and working with MongoDB Atlas

## Features

- REST routing
- Model with proper relationship
- REST errors

## Routes List:

### Movies

| Method     | URI                              | Parameter
|----------- |----------------------------------|---------------------------
| `POST`     | `/movies`                        |
| `GET`      | `/movies`                        | `sort_direction (asc/desc)`
| `GET`      | `/movies/{id}`                   |
| `DELETE`   | `/movies/{id}`                   |

## Instructions for launching the App.

### `npm install`

installs all packages and the dependencies in the local node_modules folder

### `npm start`

Runs the app on [http://localhost:3012](http://localhost:3012)
