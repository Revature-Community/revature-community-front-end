import { Locations } from "./locations";

export class Posts {
    constructor(
    // public id: number,
    public title: string,
    public content: string,
    public location: Locations, //change to location type later
    public categoryType: string //change to category type later
)
{}}