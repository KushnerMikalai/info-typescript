interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

type User = {
  _id: number
  name: string
  email: string
  createdAd: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAd'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta1 = 'name';
// u1 = '_id';