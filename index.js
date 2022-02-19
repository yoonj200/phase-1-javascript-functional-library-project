// CAN'T GET TEST TO RECOGNIZE OBJECT w/FUNCTION OBJECTS

// const fi = function() { 
//     return {
//         libraryMethod: function() {
//             return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b'
//         },

//         myEach: function(collection, callback) {
//             for (let accessor in collection) {  // calls alert with each element passed
//                 callback(collection[accessor]) // calls alert properly on object values
//             }
//             return collection // returns original collection
//         },

//         myMap: function(collection, callback) {
//             // successfully returns a correctly populated array
//             // does not modify original array
//             // successfully returns a correctly populated array from modified object values
//             // does not modify the original object
//             let modifiedArray = []
//             for (let accessor in collection) {
//                 modifiedArray.push(callback(collection[accessor]))
//             }
//             return modifiedArray;
//         },

//         myReduce: function(collection, callback, acc) {
//             // returns correct reduced value when passed an initial value
//             // returns correct reduced value when not passed an initial value
//             // does not modify original array
//             // returns correct reduced value from object values
//             // does not modify original object
//             let collectionCopy = Object.values(collection)
//             acc = acc || collectionCopy.shift()

//             for(let accessor in collectionCopy) {
//                 acc = callback(acc, collectionCopy[accessor], collectionCopy)
//             }
//             return acc
//         },

//         myFind: function(collection, predicate) {
//         // returns value if found
//         // does not traverse whole array if value is found early
//         // returns undefined if value is not present
//             for(let accessor in collection) {
//                 let element = collection[accessor]
//                 if(predicate(element)) {
//                     return element;
//                 }
//             }
//         },

//         myFilter: function(collection, predicate) {
//         // correctly filters for values that callback evaluates as true
//         // correctly returns empty array if no matching values are found
//             let selectedArray = [];

//             for(let accessor in collection) {
//                 let element = collection[accessor];
//                 if(predicate(element)) {
//                     selectedArray.push(element)
//                 }
//             }       
//             return selectedArray
//         },

//         mySize: function(collection) {
//         // correctly returns size of collection when an array is passed
//         // correctly returns size of collection (amount of keys) when an object is passed
//             return Object.keys(collection).length
//         },

//         myFirst: function(array, [n] ) {
//         // returns first element of collection
//         // returns first n elements of collection when second optional argument (n) is provided
//             let count = 1
//             let array = []
//             for (let accessor in collection) {
//                 if (count <= n) {
//                 array.push(collection[accessor])
//                 count++
//                 }
//             }
//             return array.length > 1 ? array : array[0]
//         },

//         myLast: function(array, [n]) {
//         // returns last element of collection
//         // returns last n elements of collection when second optional argument (n) is provided
//             let startingIndex = collection.length - n

//             return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
//         },

//     /* ---------- BONUS (enable tests...) ----------

//         function mySortBy() {

//         }

//         function myFlatten() {

//         }

//     */

//        myKeys: function(object) {
//        // retrieves all names of object's own enumerable properties
//        // does not modify original object
//         return Object.getOwnPropertyNames(object)
//        },

//         myValues: function(object) {
//         // retrieves all values of object's own properties
//         // does not modify original object            
//            return Object.values(object) 
//         },
//     }
// }()

// fi.libraryMethod()
// -------------------------------------------------------------------------------------------------------------------------------------------
function myEach(collection, callback) {
    for (let accessor in collection) { 
        callback(collection[accessor]) 
    }
    return collection
}

function myMap(collection, callback) {
    let modifiedArray = []
        for (let accessor in collection) {
            modifiedArray.push(callback(collection[accessor]))
        }
        return modifiedArray;
}

function myReduce(collection, callback, acc) {
// returns correct reduced value when passed an initial value
// returns correct reduced value when not passed an initial value
// does not modify original array
// returns correct reduced value from object values***********
// does not modify original object
    let collectionCopy = Object.values(collection)
    acc = acc || collectionCopy.shift()

    for(let accessor in collectionCopy) {
        acc = callback(acc, collectionCopy[accessor], collectionCopy)
    }
    return acc
}

function myFind(collection, predicate) {
        for(let accessor in collection) {
        let element = collection[accessor]
        if(predicate(element)) {
            return element;
        }
    }
}

function myFilter(collection, predicate) {
    let selectedArray = [];

    for(let accessor in collection) {
        let element = collection[accessor];
        if(predicate(element)) {
            selectedArray.push(element)
        }
    }
    return selectedArray
}

/* ---------- BONUS (enable tests...) ----------

function mySortBy() {

}

function myFlatten() {

}

*/

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(collection, n = 1) {
    let count = 1
    let array = []
    for (let accessor in collection) {
        if (count <= n) {
            array.push(collection[accessor])
            count++
        }
    }
    return array.length > 1 ? array : array[0]
}

function myLast(collection, n = 1) {
    let startingIndex = collection.length - n

    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
}

function myKeys(object) {
    return Object.getOwnPropertyNames(object)
}

function myValues(object) {
    return Object.values(object)
}