import {Item} from "./item";

export interface Resource {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}
