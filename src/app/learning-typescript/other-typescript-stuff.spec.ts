import { addTwoNumbers } from "../utils/add-two-numbers";
import { instructor } from "../utils/other-utils";
import * as randomData from '../array-practice-data';

describe('cool stuff in ts', () => {
    it('should spread arrays like butta', () => {
        // the spread operator
        // ...
        // denotes spreading the indices of an array (or object) 
        // across a new structure
        // in other words used to create a deep copy of an old array




        const myNums: number[] = [1, 5, 3, 9];

        // spread the indexes of myNums across this new array
        let spreadNums: number[] = [...myNums];
        // spreadNums is a deep copy of myNums [1,5,3,9];

        // could us map, but kinda boring
        let boringSpread = myNums.map((eachNum: number) => eachNum);

        let moreNums: number[] = [...myNums, 7, 2, 44];
        // [1, 5, 3, 9, 7, 2, 44]

        let myTwoNumbers: [number, number] = [2, 3];

        addTwoNumbers(...myTwoNumbers); 


    });

    it('spread w/ objects', () => {
        let mildManneredInstructor = {
            ...instructor
        };

        let faveFood = {
            dinner: 'taco'
        }

        console.log(mildManneredInstructor);

        /*
            {
                firstName: 'byron',
                lastName: 'brown',
                age: 32,
                isMarried: true,
                siblings: [
                    {
                        name: 'angel',
                        occupation: 'annoying'
                    }
                ],
                occupation: 'apple sauce dispencer',
                vehicle: 'talking car from that 80s show',
                catchphrase: 'i want to be like michelle when i grow up'
            }
        */

        const superInstructor = {
            ...mildManneredInstructor,
            ...faveFood,
            superPower: 'babbling', // adding a new property
            occupation: 'super Instructor' // overiding a prop that was in the source obj
        }

        /*
            {
                firstName: 'byron',
                lastName: 'brown',
                age: 32,
                dinner: 'taco'
                isMarried: true,
                siblings: [
                    {
                        name: 'angel',
                        occupation: 'annoying'
                    }
                ],
                occupation: 'super Instructor',
                vehicle: 'talking car from that 80s show',
                catchphrase: 'i want to be like michelle when i grow up'
                superPower: 'babbling'
            }
        */

    });


    it('should use the rest', () => {
        // the rest operator 
        // ...

        const myNums: number[] = [1, 5, 3, 9];

        function addSomeNumbers(...theNumbers: number[]) {
            // theNumbers []
            return theNumbers.reduce((acc, current) => acc + current);
        }

        addSomeNumbers(2, 5, 8, 5);
        addSomeNumbers(...myNums);
        addSomeNumbers(3,2);

        function simon(param1: number, param2: number, ...theRest: any[]) {
            console.log(param1) // 7
            console.log(param2) // 4
            console.log(theRest) // ['taco', 'lizard', 'lee-roy']
        }

        simon(7, 4, 'taco', 'lizard', 'lee-roy');



        // function()
    });


    it('destructuring', () => {

        function giveMeTuple(): [number, string] {
            let random = Math.floor(Math.random() * 10) // 0-9
            let students = ['praveen', 'emily', 'samarpita', 'luke', 'aot nick', 'nick 2', 'nelson', 'blair', 'kerry', 'max'];
            return [random, students[random]];
        }

        const [index0, , index2] = randomData.data;

        console.log(index0) // car

        const {firstName:d00d, age} = instructor;
        // const d00d = instructor.firstName;
        // const age = instructor.age;
        console.log(d00d) // byron
        console.log(age) // 32


        
    });
});