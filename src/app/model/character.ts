import {Thumbnail} from "./thumbnail";
import {Resource} from "./resource";

export interface Character {
  id: number
  title: string
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: Resource
  series: Resource
  stories: Resource
  events: Resource
}
