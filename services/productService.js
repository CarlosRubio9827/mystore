const faker = require('faker')
const boom = require('@hapi/boom')

class ProductsService {

    constructor(){
        this.products = [];
        this.generate()
    }

    async generate(){
        const limit =  100
        for (let i = 0; i <limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                nombre: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            })            
        }
    }

    async create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }   
        this.products.push(newProduct)
        return newProduct
    }

     find(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.products);  
            }, 2000)
        })
    }

    async findOne(id){
        const product = this.products.find(item => item.id === id);
        if(!product){
            throw boom.notFound('product not found')
        }if(product.isBlock){
            throw boom.conflict('product is blocled')
        }
        return product
    }

    async update(id, changes){
        const index = this.product.findIndex(item=>item.id === id);
        if(index === -1){
            throw boom.notFound('product not found');
        }else{
            const product = this.products[index]
            this.products[index] = {
                ...product,
                ...changes
            }
            return this.products[index];
        }
    }
    
    async delete(id){
        const index = this.product.findIndex(item=>item.id === id);
        if(index === -1){
            throw boom.notFound('product not found');
        }else{
            this.products.splice(index, 1);
            return {id}
        }
    }

}

module.exports = ProductsService;
