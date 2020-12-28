const algorithm = require('./algorithm');
const assert = require('assert').strict;
const expect = require('chai').expect;

describe("cases with solutions", function() {
  it("should report a distance of 4 with input ++++++++++ ----------", function() {
    const line1 = "++++++++++";
    const line2 = "----------";
    const distance = algorithm.getShortestDistance(line1, line2);
    expect(distance).to.equal(4);
  });

  it("should report a distance of 4 with input ++++++++++ ---+++++++", function() {
    const line1 = "++++++++++";
    const line2 = "---+++++++";
    const distance = algorithm.getShortestDistance(line1, line2);
    expect(distance).to.equal(4);
  });

  it("should report a distance of 18.86 with input ++++-+++++ -++++++++-", function() {
    const line1 = "++++-+++++";
    const line2 = "-++++++++-";
    const distance = algorithm.getShortestDistance(line1, line2);
    expect(distance).to.be.within(18.85, 18.86);
  });
  it("should report a distance of 20.22 with input -+++++++++ -++++++++-", function() {
    const line1 = "-+++++++++";
    const line2 = "-++++++++-";
    const distance = algorithm.getShortestDistance(line1, line2);
    expect(distance).to.be.within(20.21, 20.22);
  });
  it("should report a distance of 18.25 with input -+++++++-+ -++++++++-", function() {
    const line1 = "-+++++++-+";
    const line2 = "-++++++++-";
    const distance = algorithm.getShortestDistance(line1, line2);
    expect(distance).to.be.within(18.24, 18.25);
  });
});

describe("cases causing errors", function() {
  it("should report error when input is malformed", function() {
    const line1 = "++++++++++";
    const line2 = "------";
    const code = () => algorithm.getShortestDistance(line1, line2);
    expect(code).to.throw(Error, "We assume both rows in the bus must have the same number of seats");
  });

  it("should report error when there are no solutions", function() {
    const line1 = "++++++++++";
    const line2 = "-+-+++++++";
    const code = () => algorithm.getShortestDistance(line1, line2);
    expect(code).to.throw(Error, "Less than three avaiable seats in the bus. No solutions exist");
  });
});