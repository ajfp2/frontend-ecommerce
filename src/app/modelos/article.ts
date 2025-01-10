// SE pueden usar cualquiera de las dos formas, si tuvieramos que obtener los datos desde una BD es mejor usar una interfaz pero de momento da igual.
// He optado por utilizar una clase.
/*
export class Article {
    constructor(
        public id: number,
        public name: string,
        public imageUrl: string,
        public price: number, 
        public isOnSale: boolean,               
        public quantityInCart: number        
    ) {}
}
*/

export interface Article {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
}