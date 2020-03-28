#!/bin/sh
yarn sequelize db:migrate:undo:all
yarn sequelize db:migrate
yarn dev
