var a;

describe("What Is This?", function() {
  var assert = chai.assert;

  beforeEach(function() {
    a = {
      thingToDo: function() {
        this.a = "thing";
      }
    };
  });

  it ("is the simple object context on method invocation", function() {
    a.thingToDo();

    assert.equal(a.a, "thing");
  });

  it("is the owning object context in a callback", function(done) {
    setTimeout(a.thingToDo, 1);

    setTimeout(function() {
      assert.equal(a, "thing");
      done();
    }, 5);
  });

  it("does something in an anonymous function", function(done) {
    setTimeout(function() {
      a.thingToDo();
    }, 1);

    setTimeout(function() {
      assert.equal(a.a, "thing");
      done();
    }, 5);
  });
});
