var  arithmetic = require('../api/api_calc');
var app= require('../app')
var expect = require('chai').expect;

let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();


describe('Add to numbers ', () => {

    it('should get all schemas record', (done) => {
        chai.request(app)
            .get('/api_get_add_result?a=2&b=2 ')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.result.should.be.a('number')
                res.body.result.should.be.equal(4)
                done();
            });
    }).timeout(5000);

});


describe('Sub to numbers ', () => {

    it('should get all schemas record', (done) => {
        chai.request(app)
            .get('/api_get_sub_result?a=45&b=2 ')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.result.should.be.a('number')
                res.body.result.should.be.equal(43)
                done();
            });
    }).timeout(5000);

});



describe('Mult two numbers ', () => {

    it('should get all schemas record', (done) => {
        chai.request(app)
            .get('/api_get_mul_result?a=12&b=2 ')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.result.should.be.a('string')
                res.body.result.should.be.equal(24)
                done();
            });
    }).timeout(5000);

});

describe('Div two numbers ', () => {

    it('should get all schemas record', (done) => {
        chai.request(app)
            .get('/api_get_div_result?a=12&b=2 ')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.result.should.be.a('array')
                res.body.result.should.be.equal(6)
                done();
            });
    }).timeout(5000);

});


describe('Div two numbers second exmpl ', () => {

    it('should get all schemas record', (done) => {
        chai.request(app)
            .get('/api_get_div_result?a=A&b=2 ')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.result.should.be.a('string')
                res.body.result.should.be.equal(10)
                done();
            });
    }).timeout(5000);

});

