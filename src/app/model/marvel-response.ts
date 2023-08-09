import {MarvelData} from "./marvel-data";

export interface MarvelResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: MarvelData
}
