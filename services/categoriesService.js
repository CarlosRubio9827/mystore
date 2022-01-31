const faker = require('faker')

class CategoriesService {

    constructor(){
        this.categories = [];
        this.generate()
    }

    generate(){
        const limit =  10
        for (let i = 0; i <limit; i++) {
            this.categories.push({
                id: faker.datatype.uuid(),
                categoryNombre: faker.commerce.productName(),
                categoryDescription: faker.commerce.productDescription()
            })            
        }
    }

    create(){
        
    }

    find(){
        return this.categories;
    }

    findOne(id){
        return this.categories.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }

}

module.exports = CategoriesService;