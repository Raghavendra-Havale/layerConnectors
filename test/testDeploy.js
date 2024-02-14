
const {ethers} = require("hardhat")
const {assert,expect} = require("chai")


describe("SimpleStorage", function (){
  let simpleStorageFactory,simpleStorage
  beforeEach(async function(){
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })
  it("Should start with favourite number 0",async function (){
    const currentValue=await simpleStorage.retrieve()
    const expectedValue="0"

    assert.equal(currentValue.toString(),expectedValue)
  })

  it("it should update when we call store",async function(){
    const txnResponse =await simpleStorage.store(7)
    await txnResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    const expectedValue = 7
    assert.equal(updatedValue,expectedValue)
  })

}) 