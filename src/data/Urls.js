import {DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
     [DataTypes.ITEMS] : `${protocol}://${hostname}:${port}/api/items`,
     [DataTypes.CATEGORIES] : `${protocol}://${hostname}:${port}/api/categories`
}