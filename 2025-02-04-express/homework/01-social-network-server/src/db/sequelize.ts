import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import config from "config";
import Post from "../models/Post";
import Comment from "../models/Comment";
import Follow from "../models/Follow";

const logging = config.get<boolean>('app.logging');

const sequelize = new Sequelize({
    models: [ User, Post, Comment, Follow ],
    logging: logging ? console.log : false,
    dialect: 'mysql',
    ...config.get('db')
})

export default sequelize;