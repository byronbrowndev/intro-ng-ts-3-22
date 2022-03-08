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
        morePeople.push('angel'); ['praveen', 'angle']

        const empty = [];

        const awesome = people[1]; // michelle;
        const arrLen = people.length // 4
        const lastIndex = people[people.length - 1]; // max

    });

    it('object and array practice', () => {

        // creat a very descriptive object about you
        const byron = {
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
