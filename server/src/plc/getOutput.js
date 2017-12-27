const db = require('../models')

export function q00 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q00
}

export function q01 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q01
}
export function q02 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q02
}
export function q03 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q03
}
export function q04 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q04
}
export function q05 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q05
}
export function q06 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q06
}

export function q07 () {
  db.Output
    .find('output').limit(1)
    .where('output').ne(null)
    .sort('-creation')
  return db.Output.q07
}
