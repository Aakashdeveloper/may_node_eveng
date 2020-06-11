let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Rest Api',() => {
    it('Should test / endpoint',(done) => {
        chai
        .request('http://localhost:9900')
        .get('/')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('Should test /user endpoint',(done) => {
        chai
        .request('http://localhost:9900')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('Should test  post /addUser endpoint',(done) => {
        chai
        .request('http://localhost:9900')
        .post('/addUser')
        .send({"_id":543,"name":"Zoe"})
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
})