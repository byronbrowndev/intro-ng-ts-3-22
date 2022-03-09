import { getStudentCount } from '../utils/get-student-count';
import { isEven as someFunc } from '../utils/is-even'; // importing just what i needed from just where i needed
import * as OtherUtils from '../utils/other-utils'; // everyting in otherUtils file
// import { AnimeInfo } from "../interfaces/anime-info.interface";
import { Movie } from "../interfaces/movie.interface";
import { MichelleCat, LeeCat, BlairCat, AnimeInfo as Anime } from "../interfaces";
import { addTwoNumbers } from '../utils/add-two-numbers';

describe('variable, data types, typing', () => {
    it('should declare a variable', () => {
        // declaring and initialize
        const name = 'byron'; // string literal
        let role = 'IT Apps Programmer';
        // let taco = new String('bacon taco');

        // const is used when you have a variable that won't change
        // a const is a constant
        // you must initialize when you declare

        // name = 'praveen';
        role = 'IT Apps Programmer, Sr.';

        const bestStudent = 'one of the nicks';

        let studentCount;
        studentCount = getStudentCount();
    });

    it('talk about basic types', () => {

        // number
        const n1 = 12;
        const n2 = 3.1415;
        const n3 = 0xFFF; // Base 16.
        const n4 = 0o111; // base 8 - octal.
        const n5 = 0b11011; // base 2 - binary.
        const n6 = Infinity;
        const n7 = -Infinity;
        const n8 = 1_156_597_879;

        // strings
        const boringString = new String('boooooooooring');
        const single = 'this is a single quote';
        const double = "this is a double quote. it's cool";
        const backticks = `backtick have super powers
        
        wow this is really cool.

        pie is ${n2}

        last power  i have this many students: ${getStudentCount()} !!!!
        
        `;

        // string are iterables
        const iterable = 'goku';
        iterable[0]; // 'g';

        // let isPolicyPro = policyNumber[0]

        // plus op concatenation 
        const plusOp = 'byron is ' + n1 + ' years old';

    });

    it('should be concat practice', () => {
        // name string const
        const name = 'byron';
        // age number let
        let age = 32;
        // template literal
        const intro = `my name is ${name} and i am ${age} years old`
        expect(intro).toBe('my name is byron and i am 32 years old')
    });

    it('should be an object', () => {
        const dudeTeaching = {
            name: 'byron',
            hoursTeaching: 21,
            language: 'TypeScript'
        }

        let car = '19 volkswagen';
        // object literal
        const vehicle = {
            year: 2019,
            make: 'VW',
            model: 'Atlas',
            engine: {
                type: 'vroom',
                displacement: 100
            }
        } //address that


        // dot notation
        let sentence = `${dudeTeaching.name} drives a ${vehicle.model} his engine is a ${vehicle.engine.type}`;
        let randomProperty = 'make';
        // const vehicleMake = vehicle[make]; // atlas 

        const praveen = 'awesome';
        // praveen = 'lee';


        vehicle.model = 'taco';
        // vehicle = {}

    });

    it('should be an array', () => {
        const people = ['lee', 'michelle', 'sam', 'max'];
        const morePeople = new Array<string>();
        morePeople.push('praveen');
        morePeople.push('angel');['praveen', 'angle']

        const empty = [];

        const awesome = people[1]; // michelle;
        const arrLen = people.length // 4
        const lastIndex = people[people.length - 1]; // max

    });

    it('object and array practice', () => {

        // creat a very descriptive object about you
        interface Sibling {
            name: string;
            occupation: string;
        }

        interface humanAwesomeness {
            firstName: string;
            lastName: string;
            age: number;
            isMarried: boolean;
            siblings: {
                name: string;
                occupation: string;
            }[];
            occupation: string;
            vehicle: string;
            catchphrase: string;
        }

        const byron = OtherUtils.instructor;

    });

    it('forgot to talk about booleans', () => {
        // true or false
        const isSuperAwesome = true;
        const wasCalled = false;
        const doesExist = 1;

        let isAwesome: boolean;

        isAwesome = !!doesExist;


        // truthy values
        // if (true)
        // if ({})
        // if ([])
        // if (42)
        // if ("0")
        // if ("false")
        // if (new Date())
        // if (-42)
        // // if (12n)
        // if (3.14)
        // if (-3.14)
        // if (Infinity)
        // if (-Infinity)

        // explicit conversion
        // if (!!doesExist)

        let newWord = 'segue';

        // falsy
        // if (false)
        // if (null)
        // if (undefined)
        // if (0)
        // if (-0)
        // if (0n)
        // if (NaN)
        // if ("")

    });
});

describe('typing in typescript', () => {
    it('should talk about basic typing', () => {
        const someThing: string = 'jibber jabber';
        let someNum: number;

        // someNum = true; // not allowed hippies
        someNum = 41_569_526_156_156; // you can use underscores in numbers

        const anime: { name: string, year: number, isGreatestAnimeEver: boolean } = {
            name: 'yu yu hakusho',
            year: 1992,
            isGreatestAnimeEver: true
        }

        const releaseYear: number = anime.year;
        // anime.isGreatestAnimeEver = 'no'; not allowed

        let faveFoods: string[] = ['taco', 'chicken', 'spinach', 'beer'];
        let peopleWhoScareMe: Array<string> = ['wife', 'daughter', 'mom'];

        // faveFoods.push(75);
    });

    it('should talk interfaces and union types and type alias', () => {


        const dbz: Anime = {
            name: 'dragonball z',
            year: 1989,
            dubs: true
        }



        const userFaves: (Movie | Anime)[] = []
        const userFaves2: Movie[] | Anime[] = []


        const starWars: Movie = {
            title: 'Star Wars',
            director: 'Lucas',
            yearReleased: 1977
        }

        userFaves.push(dbz);
        userFaves.push(starWars);

        // [
        //     {
        //         name: 'dragonball z',
        //         year: 1989,
        //         dubs: true
        //     },
        //     {
        //         title: 'Star Wars',
        //         director: 'Lucas',
        //         yearReleased: 1977
        //     }

        // ]


        let doesByronWantLunch: string | undefined = 'yes';

        // doesByronWantLunch = true;

        type Media = Anime | Movie; // | Music | TvShow

        let faveMedia: Media;


    });

    it('is about enums byron is lazy', () => {
        enum Direction {
            Up = 0,
            Down = 1,
            Left = 2,
            Right = 3,
        }

        let startingDirection = Direction.Left;

        let sum = Direction.Down + 2; // 3
    });

    it('interface practice', () => {
        // define a descriptive cat interface

        



        // const myCat: LeeCat = {
        //     name: 'Fantasia',
        //     age: 3,
        //     color: 'Black',
        //     isFluffy: true,
        //     isChonky: true,
        //     isLong: true,
        // }


        type Cat = MichelleCat | LeeCat | BlairCat;

        let someCreature: Cat; // emily's fault

        // initialize an instance of the cat interface
    });
});

describe('is useful to talk about basic js/ts structures', () => {
    it('should talk about operators', () => {
        // assign op 
        // 1 equal
        let max = 'awesome';
        let kerry = 'cool';

        // comparison
        // == don't use double equal
        // === triple equal
        max === kerry // false

        // MATH!!!

        // Operator	Description
        // +	Addition
        // does normal math w/ 2 numbers
        // if number and string used will convert to string
        let str = max + 7 // 'awesome7'
        // -	Subtraction
        // *	Multiplication
        // /	Division
        // %	Modulus (Division Remainder)
        10 % 7 // 3
        6 % 2 // any mod off 2 w/ 0 result is even
        // ++	Increment
        let num = 0;
        num++; // 1 // do whatever on this line and then increment
        ++num; // 2 // increment then do whatever on this line


        // Operator	Example	Same As
        // =	x = y	x = y
        // +=	x += y	x = x + y
        // -=	x -= y	x = x - y
        // *=	x *= y	x = x * y
        // /=	x /= y	x = x / y
        // %=	x %= y	x = x % y

        num = num + 1;
        num += 1;
        // also works w/ strings

        let inClass = 'luke';
        inClass += max + kerry;
        //lukeawesomecool
    });

    it('conditionals', () => {
        let numOfStudents = 8;
        let condition = true;
        let anotherCondition = true;

        // && and ||

        if (condition && anotherCondition) {
            // both are true
        }

        if (condition || anotherCondition) {
            // one of them has to be true
        }

        if ((condition || anotherCondition) && numOfStudents > 4) {
            //
        }



        if (condition) {
            // positive
        }

        if (condition) {
            // pos
        } else {
            // neg
        }

        if (condition) {
            // pos
            // nested if?? 
        } else if (anotherCondition) {
            // more pos
        } else {
            // this is technically optional
        }


        // ternary
        // short-hand conditional
        let isAwesome: string = condition === true ? 'yup' : 'nope';

        if (condition === true) {
            isAwesome = 'yup';
        } else {
            isAwesome = 'nope';
        }

        const isTurkey = true;

        let isBacon: boolean | string = condition ? true : (isTurkey ? 'no, its turkey' : 'its cardboard');

    });

    it('loop exist', () => {
        const zooAnimals = ['zebra', 'turkeys', 'heffalumps'];

        for (let index = 0; index < zooAnimals.length; index++) {
            zooAnimals[index]
        }

        for (const animal of zooAnimals) {
            console.log(animal)
            // this is where you do something w/ the value
        }

        let student = {
            name: 'byron',
            age: 32,
            isCoffeed: true
        }

        for (const key in student) {
            // key = 'name'
            // key = '32'
            // key = 'isCoffeed'
        }
    });

    it('fun syntatic sugar part 1', () => {
        let grandParent: any | undefined = {
            parent: {
                child: {
                    grandChild: 'dave'
                }
            }
        }
        let grandParent2 = {
            parent: {
                taco: 'what'
            }
        }

        // short circuting
        // if (grandParent2.parent.child.grandChild === 'jeff')
        // cannot read child of undefined
        if (grandParent && grandParent.parent && grandParent.parent.child && grandParent.parent.child.grandChild === 'dave') {

        }

        // elvis operator
        // optional chaining
        if (grandParent?.parent?.child?.grandChild === 'dave') { }

        // let childName = grandParent2?.parent?.child?.grandChild ?? 'bob';
    });
});

describe('functions', () => {
    it('basic function stuff', () => {
        let sum = addTwoNumbers(2, 4); // 6

        // hoisted
        
        const numero = 5
        addTwoNumbers(7, numero);

        const addToSeven = (firstNum: number) => {
            // if you have more than one executable line you need curlies
            return firstNum + 7;
        }

        const logNumber = (someNum: number): void => {
            console.log(someNum);
        }

        const addNumbers = (num1: number, num2: number = 5, num3?: number) => num1 + num2 + (num3 ? num3 : 0);

        addNumbers(7) // 12
        addNumbers(7, 2); // 9
        addNumbers(7, 2, 1); // 10

        const pizzaFunction = function (toppings: string[]) {

        }

        let fifteen = addToSeven(8) // 15
    });

    it('function and stuff practice', () => {
        // write a function 
        // that take a number
        // reuturns true of fals if the numb is even
        const isEven = (num: number) => !(num % 2);
    });

    type functionThatTakesNothingAndGivesNothing = () => void;

    it('should be a higher order function', () => {
        function doSomethingThenSomethingElse(someThingElseToDo: functionThatTakesNothingAndGivesNothing) {
            // do something
            // bunch of lines of programmers
            // stuff that makes us look super smarterest
            someThingElseToDo()
        }

        doSomethingThenSomethingElse(() => console.log('hey buddy, did the thing'))

        function doSomethingWithResult(callBackFromUser: (taco: string) => void) {
            //  pretent we made an api call that returned a pokemon name
            let pokemonName = 'pikachu' // pretend it was the call

            callBackFromUser(pokemonName);
        }

        doSomethingWithResult((data) => console.log(data));
    });

    it('uses array functions', () => {
        const array1 = [1, 4, 9, 16];

        // this was awful what was he thinking
        // let fakeMap = (arr: any[], mutater: any) => {
        //     let copy = [...arr]
        //     for (const index of copy) {
        //         index = mutater(index);
        //     }
        //     return copy;
        // }

        // pass a function to map
        // create a copy, manipulate each element in the copied array
        // passed on the function i provided
        // and return the mutated copy
        const map1 = array1.map(x => x * 2); // expected output: Array [2, 8, 18, 32];
        let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        words = words.filter(word => word.length > 6);
    })

    it('map practice', () => {
        let numeros = [1,6,3,8,6,9,9];

        let arrOfBools: boolean[];
        // isEven()
        // const isEven = (num: number):boolean => !(num % 2);

        // using a named anon func
        arrOfBools = numeros.map(someFunc);

        // using an anon func
        arrOfBools = numeros.map((i: number) => !(i%2));

        let pie = OtherUtils.PI;

        // use map to take numeros initialze and array of booleans determining if the numbers are even or not
    });
});


