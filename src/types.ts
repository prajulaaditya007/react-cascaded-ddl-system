// types.ts
export interface ProductDetail {
    brand: string;
    size: string;
    sellingDate: string;
    uniqueKey: string;
}

export interface HomeDecorDetail {
    item : string;
    design: string
    sellingDate: string;
    uniqueKey: string;
}

export interface Product {
    productType: string;
    details: ProductDetail[] | HomeDecorDetail;
}

export interface User {
    userName: string;
    phoneNum: string;
    productsBought: Product[];
}
