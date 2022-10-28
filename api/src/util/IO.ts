import * as fsp from 'fs/promises'
import * as fs from 'fs'
import ClassType from '../types/ClassType'
import Converter from '../interfaces/Converter'

export const save = async (identifier: string, type: ClassType, obj: any) => {
  if (!fs.existsSync('db')) {
    await fsp.mkdir('db')
  }
  if (!fs.existsSync(`db/${type}`)) {
    await fsp.mkdir(`db/${type}`)
  }
  
  await fsp.writeFile(`db/${type}/${identifier}`, JSON.stringify(obj))
}

export const load = async (identifier: string, type: ClassType, converter: Converter<any, any>) => {
  const raw = await fsp.readFile(`db/${type}/${identifier}`, { encoding: 'utf-8', flag: 'r' })
  const json = JSON.parse(raw)
  return converter.deserialize({
    id: identifier,
    ...json
  })
}

export const loadMultiple = async (type: ClassType, converter: Converter<any, any>) => {
  const files = await fsp.readdir(`db/${type}`)
  const arr = []
  for (const file of files) {
    arr.push(await load(file, type, converter))
  }
  return arr
}

export const remove = async (identifier: string, type: ClassType) => {
  await fsp.rm(`db/${type}/${identifier}`)
}