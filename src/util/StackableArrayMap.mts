import { TypedMap } from 'io/github/sayakie/hakase/util/TypedMap.mjs'

export class StackableArrayMap<K, V extends any[]> extends TypedMap<K, V> {
  public set(key: K, value: V): this {
    if (this.has(key)) {
      super.set(key, this.get(key)!.concat(value) as V)
    } else {
      super.set(key, value)
    }

    return this
  }
}