import { Sequelize } from "sequelize-typescript";
import User from "../models/user";
import config from "config";
import Post from "../models/post";
import Comment from "../models/comment";
import Follow from "../models/follow";

const logging = config.get<boolean>('app.logging');

const sequelize = new Sequelize({
    models: [ User, Post, Comment, Follow ],
    logging: logging ? console.log : false,
    dialect: 'mysql',
    ...config.get('db')
})

export default sequelize;