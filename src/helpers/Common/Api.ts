import axios from 'axios'
import { toQs } from './String'

export type Param = { [key: string]: any }

export const fetcher = async (url: string, param: Param = {}) => {
  const res = await axios.get(toQs(param, url))
  return res.data
}
