export class Article {

    isOnSale: boolean = false;

    constructor(public name: string,
                public imageUrl: string,
                public price: number,                
                public quantityInCart: number
            ) {}
  
    isOnSaleChange(): boolean {
        return this.isOnSale;
    }
  }