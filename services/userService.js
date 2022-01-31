const faker = require('faker')

class UsersService {

    constructor(){
        this.users = [];
        this.generate()
    }

    generate(){
        const limit =  10
        for (let i = 0; i <limit; i++) {
            this.users.push({
                id: faker.datatype.uuid(),
                nombre: faker.name.firstName(),
                lastName: faker.name.lastName(),
                date: faker.date.past()
            })            
        }
    }

    create(){
        
    }

    find(){
        return this.users;
    }

    findOne(id){
        return this.users.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }

}

module.exports = UsersService;