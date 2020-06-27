const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const nun: number = 3e10;

const message: string = 'Hello typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Nick', 1234567];

// Any
let variable: any = 42;
// ...
variable = 'New Strong';
variable = [];

// =====

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Hasenberg');

// Never
function throwError(message: string): never {
    throw new Error(message)
}

// Type
type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '123123';


type SomeType = string | null | undefined;


