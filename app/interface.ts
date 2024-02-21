export interface simpleProduct {
    name: string;
    imageUrl: string;
    price: number;
    categoryName: string;
    _id : string;
    slug : string;
}
export interface singleProduct {
    name: string;
    images: Array<string >;
    price: number;
    categoryName: string;
    _id : string;
    slug : string;
    description : string;
    price_id : string;
}