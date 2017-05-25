var concourse=require('../src/concourse-testApp.js')

describe("I am testing from concourse",function(){
	it("should pass",function(){
		concourse.testHelloWorld();
	})
})