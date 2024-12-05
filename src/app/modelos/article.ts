export class Article {

//ng g interface mi-interface


    constructor(
        public uid: number,
        public name: string,
        public imageUrl: string,
        public price: number, 
        public isOnSale: boolean,               
        public quantityInCart: number        
    ) {}

    
  
  }