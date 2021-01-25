import * as _ from 'lodash';

async function hello() {
    return 'Hello TS'
}

//Declaring types
let lucky:Number;
lucky = 23

//creating a type

type Text= 'text';

let name:Text;

name= 'name'
name=1
name='text'

//interface
interface Person {
    first: string,
    second: number,
    [ key:string ]: any
}

const person:Person ={
    first: 1,
    second: 'Second',
    is:true
}

//function

function pow(x:number, y:number) {
    return Math.pow(x,y)
}
pow(5,9)

//array
const num:number[]= [];

num.push(1)
num.push('Two')

//tuples
type list= [String,Number,Boolean,String?]

let shoppingList:list;
shoppingList=['Mac','$1000',true]

//Generics
class Observable<T> {
    constructor(public value:T) {
    }

}

let x:Observable<number>

