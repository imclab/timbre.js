var T = require("./timbre.debug.js");
var assert = require("chai").assert;


describe('iterator', function() {
    describe("ListSequenceIterator", function() {
        it("new", function() {
            var iter = new timbre.modules.ListSequenceIterator([]);
            assert.instanceOf(iter, timbre.modules.ListSequenceIterator);
        });
        it("create()", function() {
            var list = [1,2,3];
            var iter = timbre.modules.ListSequenceIterator.create({
                list:list, length:100, offset:5
            });
            assert.equal(iter.list  , list);
            assert.equal(iter.length,  100);
            assert.equal(iter.offset,    5);
        });
        it("next()", function() {
            var iter = timbre.modules.ListSequenceIterator.create({
                list:[0,1,2,3], length:8, offset:1
            });
            assert.equal(iter.next(), 1);
            assert.equal(iter.next(), 2);
            assert.equal(iter.next(), 3);
            assert.equal(iter.next(), 0);
            assert.equal(iter.next(), 1);
            assert.equal(iter.next(), 2);
            assert.equal(iter.next(), 3);
            assert.equal(iter.next(), 0);
            assert.equal(iter.next(), null);
            assert.equal(iter.next(), null);
        });
    });
    describe("ListShuffleIterator", function() {
        it("new", function() {
            var iter = new timbre.modules.ListShuffleIterator([]);
            assert.instanceOf(iter, timbre.modules.ListShuffleIterator);
        });
        it("create()", function() {
            var list = [1,2,3];
            var iter = timbre.modules.ListShuffleIterator.create({
                list:list, length:100
            });
            assert.equal(iter.list.length, list.length);
            assert.include(iter.list, list[0]);
            assert.include(iter.list, list[1]);
            assert.include(iter.list, list[2]);
            assert.equal(iter.length,  100);
            
        });
        it("next()", function() {
            var iter = timbre.modules.ListShuffleIterator.create({
                list:[0,1,2,3], length:8
            });
            var list = iter.list;
            assert.equal(iter.next(), list[0]);
            assert.equal(iter.next(), list[1]);
            assert.equal(iter.next(), list[2]);
            assert.equal(iter.next(), list[3]);
            assert.equal(iter.next(), list[0]);
            assert.equal(iter.next(), list[1]);
            assert.equal(iter.next(), list[2]);
            assert.equal(iter.next(), list[3]);
            assert.equal(iter.next(), null);
            assert.equal(iter.next(), null);
        });
        it("seed", function() {
            var iter1 = timbre.modules.ListShuffleIterator.create({
                list:[0,1,2,3,4,5,6,7,8,9], seed:103
            });
            var iter2 = timbre.modules.ListShuffleIterator.create({
                list:[0,1,2,3,4,5,6,7,8,9], seed:103
            });
            assert.deepEqual(iter1.list, iter2.list);
        });
    });
    describe("ListChooseIterator", function() {
        it("new", function() {
            var iter = new timbre.modules.ListChooseIterator([]);
            assert.instanceOf(iter, timbre.modules.ListChooseIterator);
        });
        it("create()", function() {
            var list = [1,2,3];
            var iter = timbre.modules.ListChooseIterator.create({
                list:list, length:100
            });
            assert.equal(iter.list  , list);
            assert.equal(iter.length,  100);
        });
        it("next()", function() {
            var iter = timbre.modules.ListChooseIterator.create({
                list:[0,1,2,3], length:8
            });
            var list = iter.list;
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.include(iter.list, iter.next());
            assert.equal(iter.next(), null);
            assert.equal(iter.next(), null);
        });
    });
    describe("ArithmeticIterator", function() {
        it("new", function() {
            var iter = new timbre.modules.ArithmeticIterator();
            assert.instanceOf(iter, timbre.modules.ArithmeticIterator);
        });
        it("create()", function() {
            var iter = timbre.modules.ArithmeticIterator.create({
                start:100, grow:2, length:8
            });
            assert.equal(iter.start ,  100);
            assert.equal(iter.grow  ,    2);
            assert.equal(iter.length,    8);
        });
        it("next()", function() {
            var iter = timbre.modules.ArithmeticIterator.create({
                start:100, grow:2, length:8
            });
            assert.equal(iter.next(), 100);
            assert.equal(iter.next(), 102);
            assert.equal(iter.next(), 104);
            assert.equal(iter.next(), 106);
            assert.equal(iter.next(), 108);
            assert.equal(iter.next(), 110);
            assert.equal(iter.next(), 112);
            assert.equal(iter.next(), 114);
            assert.equal(iter.next(), null);
            assert.equal(iter.next(), null);
        });
    });
    describe("GeometricIterator", function() {
        it("new", function() {
            var iter = new timbre.modules.GeometricIterator();
            assert.instanceOf(iter, timbre.modules.GeometricIterator);
        });
        it("create()", function() {
            var iter = timbre.modules.GeometricIterator.create({
                start:1, grow:2, length:8
            });
            assert.equal(iter.start , 1);
            assert.equal(iter.grow  , 2);
            assert.equal(iter.length, 8);
        });
        it("next()", function() {
            var iter = timbre.modules.GeometricIterator.create({
                start:1, grow:2, length:8
            });
            assert.equal(iter.next(), 1);
            assert.equal(iter.next(), 2);
            assert.equal(iter.next(), 4);
            assert.equal(iter.next(), 8);
            assert.equal(iter.next(), 16);
            assert.equal(iter.next(), 32);
            assert.equal(iter.next(), 64);
            assert.equal(iter.next(), 128);
            assert.equal(iter.next(), null);
            assert.equal(iter.next(), null);
        });
    });
    describe("DrunkIterator", function() {
        it("new", function() {
            var iter = new timbre.modules.DrunkIterator();
            assert.instanceOf(iter, timbre.modules.DrunkIterator);
        });
        it("create()", function() {
            var iter = timbre.modules.DrunkIterator.create({
                start:1, step:2, length:8, min:0, max:9
            });
            assert.equal(iter.start , 1);
            assert.equal(iter.step  , 2);
            assert.equal(iter.length, 8);
            assert.equal(iter.min   , 0);
            assert.equal(iter.max   , 9);
        });
    });    
});