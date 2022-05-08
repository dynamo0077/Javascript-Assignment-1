// 1.	Create Objects in Different Ways
// 2.	Remove a Property from an Object
// 3.	Check if a Key Exists in an Object
// 4.	Clone a JS Object
// 5.	Loop Through an Object
// 6.	Merge Property of Two Objects
// 7.	Count the Number of Keys/Properties in an Object
// 8.	Add Key/Value Pair to an Object
// 9.	Convert Objects to Strings
// 10.	Append an Object to An Array
// 11.	Check if An Object is An Array
// 12.	Sort Array of Objects by Property Values
// 13.	Extract Given Property Values from Objects as Array              
// 14.	Set a Default Parameter Value For a Function
// 15.	Illustrate Different Set Operations
// 16.	Check If a Variable is of Function Type

let selectCase2 = prompt("Please Enter the question number!");

switch (selectCase2) {


    case "1":

        let methods = prompt("Please enter the method you want to try! :D");

        // 1. Create Objects in Different Ways

        switch (methods) {

            case "1":
                // i. simple function
                function vehicle(name, maker, engine) {
                    this.name = name;
                    this.maker = maker;
                    this.engine = engine;
                }
                //new keyword to create an object
                let car = new vehicle('GT', 'BMW', '1998cc');
                //property accessors
                console.log(car.name);
                console.log(car.maker);
                console.log(car['engine']);

                break;

            case "2":
                // ii. Using object literals:
                //creating js objects with object literal
                let car2 = {
                    name: 'GT',
                    maker: 'BMW',
                    engine: '1998cc'
                };
                //property accessor
                console.log(car2.name); //dot notation
                console.log(car2['maker']); //bracket notation

                break;

            case "3":
                // iii. Creating object with Object.create() method:
                const coder = {
                    isStudying: false,
                    printIntroduction: function () {
                        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
                    }
                };
                const me = Object.create(coder);
                me.name = 'Mukul';
                me.isStudying = true;
                me.printIntroduction();

                break;

            case "4":
                // iv. Using es6 classes:

                class Vehicle {
                    constructor(name, maker, engine) {
                        this.name = name;
                        this.maker = maker;
                        this.engine = engine;
                    }
                }

                let car3 = new Vehicle('GT', 'BMW', '1998cc');
                console.log(car3.name); //GT

                break;

            default:
                prompt("Please enter a valid method !")
        }

        break;

    case "2":

        // 2. Remove a Property from an Object

        var person = {
            "first_name": "Scott",
            "last_name": "Johnson"
        };
        delete person.last_name; //delete last_name property
        console.log(person);

        break;

    case "3":

        // 3. Check if a Key Exists in an Object

        var person2 = {
            "name": "Billy",
            "age": 20
        }
        console.log(person2.hasOwnProperty("name")); // true
        console.log(person2.hasOwnProperty("sex")); // false  

        break;

    case "4":

        // 4. Clone a JS Object

        var student = {
            name: "Rahul",
            age: "16",
            hobby: "football"
        };

        //using ES6
        var studentCopy1 = Object.assign({}, student);
        //using spread syntax
        var studentCopy2 = {
            ...student
        };
        //Fast cloning with data loss
        var studentCopy3 = JSON.parse(JSON.stringify(student));

        console.log(student);
        console.log(studentCopy1);
        console.log(studentCopy2);
        console.log(studentCopy3);

        break;
    case "5":

        // 5. Loop Through an Object

        const obj = {
            1: 'a',
            2: 'b',
            3: 'c',
        };

        for (const i in obj)
            console.log(obj[i]);

        //it is a simple way to loop on values of an object
        break;

    case "6":

        // 6. Merge Property of Two Objects

        let person3 = {
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            ssn: '123-456-2356'
        };


        let job = {
            jobTitle: 'JavaScript Developer',
            location: 'USA'
        };

        let employee = {
            ...person3,
            ...job
        };

        console.log(employee);

        break;

    case "7":

        // 7. Count the Number of Keys / Properties in an Object

        let newObject = {
            'key1': 'value1',
            'key2': 'value2',
            'keyn': 'valuen',
        };
        console.log(newObject);

        Object.keys(newObject).length

        break;

    case "8":

        // 8. Add Key / Value Pair to an Object

        // program to add a key/value pair to an object

        const person4 = {
            name: 'Monica',
            age: 22,
            gender: 'female'
        }

        // add a key/value pair
        person4.height = 5.4;

        console.log(person4);
        break;

    case "9":

        // 9. Convert Objects to Strings

        var obj2 = {
            a: "a",
            b: "b" /*...*/
        };
        var string = console.log(JSON.stringify(obj2));
        // OUTPUT:
        // "{'a':'a', 'b':'b'}"

        break;

    case "10":

        // 10. Append an Object to An Array

        var object = "Some Object"
        var array = [];

        array.push(object)
        console.log(array);

        break;

    case "11":

        // 11. Check if An Object is An Array

        // Creating some variables
        var v1 = {
            name: "John",
            age: 18
        };
        var v2 = ["red", "green", "blue", "yellow"];
        var v3 = [1, 2, 3, 4, 5];
        var v4 = null;

        // Testing the variables data type
        typeof (v1); // Returns: "object"
        typeof (v2); // Returns: "object"
        typeof (v3); // Returns: "object"
        typeof (v3); // Returns: "object"

        // Testing if the variable is an array
        console.log(Array.isArray(v1)); // Returns: false
        console.log(Array.isArray(v2)); // Returns: true
        console.log(Array.isArray(v3)); // Returns: true
        console.log(Array.isArray(v4)); // Returns: false

        break;

    case "12":
        // 12. Sort Array of Objects by Property Values

        let list = [{
                name: "world"
            },
            {
                name: "hello",
            },
        ];

        // This doesn't account for if names are the same between objects
        let x = list.sort((a, b) => (a.name > b.name ? 1 : -1));

        console.log(x);


        // output: 
        /*
        [
          {
              name: "hello",
          },
          {
              name: "world"
          },
        ];
        */

        break;

    case "13":

        // 13. Extract Given Property Values from Objects as Array              
        var select = prompt("Please enter the method you want to try! :) ");

        switch (select) {
            case "1":
                // Method 1 -> Extract Value Using map()
                function extractValue(arr, prop) {

                    // extract value from property
                    let extractedValue = arr.map(item => item[prop]);

                    return extractedValue;

                }

                const objArray = [{
                    a: 1,
                    b: 2
                }, {
                    a: 4,
                    b: 5
                }, {
                    a: 8,
                    b: 9
                }];

                // passing an array of objects and property 'a' to extract
                const result7 = extractValue(objArray, 'a');
                console.log(result7);

                break;

            case "2":

                // Method 2 -> Extract Value Using for Loop

                function extractValue(arr, prop) {

                    let extractedValue = [];

                    for (let i = 0; i < arr.length; ++i) {

                        // extract value from property
                        extractedValue.push(arr[i][prop]);
                    }
                    return extractedValue;
                }

                const objArray2 = [{
                    a: 1,
                    b: 2
                }, {
                    a: 4,
                    b: 5
                }, {
                    a: 8,
                    b: 9
                }];

                // passing an array of objects and property 'a' to extract
                const result2 = extractValue(objArray2, 'a');
                console.log(result2);

                break;

            default:
                prompt("Enter a valid case !")
        }

        break;

    case "14":

        // 14. Set a Default Parameter Value For a Function

        // Setting a default value to a function parameter (y = 2).


        function myFunction(x, y) {
            if (y === undefined) {
                y = 2;
            }
            return x * y;
        }

        console.log("Setting a default value to a function parameter (y = 2).");
        console.log(myFunction(4));

        // alternate method: 

        // function multiply(a, b = 4) {
        //     return a * b;
        // }
        // console.log(multiply());

        break;

    case "15":

        // 15. Illustrate Different Set Operations

        var chooseMethod = prompt("Please enter the method you want to try! :)")
        switch (chooseMethod) {
            case "1":

                // i. Set Union Operation

                // perform union operation
                // contain elements of both sets
                function union(a, b) {
                    let unionSet = new Set(a);
                    for (let i of b) {
                        unionSet.add(i);
                    }
                    return unionSet
                }

                // two sets of fruits
                const setA = new Set(['apple', 'mango', 'orange']);
                const setB = new Set(['grapes', 'apple', 'banana']);

                const result3 = union(setA, setB);

                console.log(result3);

                // Output: Set {"apple", "mango", "orange", "grapes", "banana"}


                break;
            case "2":

                // ii. Set Intersection Operation

                // perform union operation
                // contain elements of both sets
                function union(a, b) {
                    let unionSet = new Set(a);
                    for (let i of b) {
                        unionSet.add(i);
                    }
                    return unionSet
                }

                // two sets of fruits
                const setA2 = new Set(['apple', 'mango', 'orange']);
                const setB2 = new Set(['grapes', 'apple', 'banana']);

                const result4 = union(setA2, setB2);

                console.log(result4);

                // Output: Set {"apple"}


                break;

            case "3":

                // iii. Set Difference Operation

                // perform difference operation
                // elements of set a that are not in set b
                function difference(setA3, setB3) {
                    let differenceSet = new Set(setA3)
                    for (let i of setB3) {
                        differenceSet.delete(i)
                    }
                    return differenceSet
                }

                // two sets of fruits
                const setA4 = new Set(['apple', 'mango', 'orange']);
                const setB3 = new Set(['grapes', 'apple', 'banana']);

                const result5 = difference(setA4, setB3);

                console.log(result5);

                // Output: Set {"mango", "orange"}

                break;
            case "4":

                // iv. Set Subset Operation

                // perform subset operation
                // true if all elements of set b is in set a
                function subset(setA5, setB4) {
                    for (let i of setB4) {
                        if (!setA5.has(i)) {
                            return false
                        }
                    }
                    return true
                }

                // two sets of fruits
                const setA5 = new Set(['apple', 'mango', 'orange']);
                const setB4 = new Set(['apple', 'orange']);

                const result6 = subset(setA5, setB4);

                console.log(result6);

                //Output : true

                break;

            default:
                prompt("Enter a valid case !")
        }

        break;

    case "16":
        // 16. Check If a Variable is of Function Type

        // check if a variable is of a certain type
        var myVar = "This is a string";

        if (typeof myVar === "string") {
            console.log("It's a string!");
        } else if (typeof myVar === "number") {
            console.log("It's a number!");
        };
        // would return "It's a string!" in this case
        break;

    default:
        prompt("Enter a valid case !")
}