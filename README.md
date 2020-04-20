# Lattice Movie Database

A simple client-server for accessing a movie database.

## Requirements

Node 10 LTS (10.16.0) or later.

## Installation

To install the dependencies, simply run `npm install` in the main directory
of this repository. This will install all the sub-packages as well.

## Running the system

To run the Lattice Movie Database, from the main directory simply run
```shell
$ npm run start:all
```

## Server

The server us a [fastify](https://www.fastify.io/) HTTP REST server. To start it
on its own, run
```shell
$ npm run start:server
```

## Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The original bootstrapped README can be found [here](client/README.md). To start
it on its own, run
```shell
$ npm run start:client
```
