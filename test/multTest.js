// testing library is called 'mocha'
// assert is part of that library and required to do the tests?
var assert = require('assert');

function multiplication(a, b){
    return a * b;
}

function add(a, b){
    return a+b;
}

// first describe groups functions together
describe('Math functions', function(){
    // second describe is a specific function in that group
    describe('Multiplication', function(){
        // it is an instance of a test case, can have multiple
        it('should equal 15 when 3 x 5', function(){
            var product = multiplication(3, 5);
            assert.equal(product, 15);
        })

        it('it should equal 50', function(){
            var product = multiplication( 5, 10);
            assert.equal(product, 50);
        })
    });

    describe ('Addition', function(){
        it('it should equal 3', function(){
            var sum = add(1, 2);
            assert.equal(sum, 3);
        });
    });
});

//run by cd into this folder and do: npx mocha multTest.js