import {Character} from "./character";

export interface MarvelData {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}
