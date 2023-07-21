// data.ts
import { User } from './types';

export const users: User[] = [
    {
        userName: 'John Doe',
        phoneNum: '123-456-7890',
        productsBought: [
            {
                productType: 'jeans',
                details: [
                    {
                        brand: "Levi's",
                        size: '32x32',
                        sellingDate: '2023-07-21',
                        uniqueKey: 'JEANS12345',
                    },
                    {
                        brand: 'Wrangler',
                        size: '34x30',
                        sellingDate: '2023-07-20',
                        uniqueKey: 'JEANS67890',
                    },
                ],
            },
            {
                productType: 'shirt',
                details: [
                    {
                        brand: 'Nike',
                        size: 'L',
                        sellingDate: '2023-07-19',
                        uniqueKey: 'SHIRT54321',
                    },
                    {
                        brand: 'Adidas',
                        size: 'M',
                        sellingDate: '2023-07-18',
                        uniqueKey: 'SHIRT09876',
                    },
                ],
            },
            {
                productType: 'shoes',
                details: [
                    {
                        brand: 'Nike',
                        size: '9',
                        sellingDate: '2023-07-17',
                        uniqueKey: 'SHOES54321',
                    },
                    {
                        brand: 'Adidas',
                        size: '10',
                        sellingDate: '2023-07-16',
                        uniqueKey: 'SHOES09876',
                    },
                ],
            },
        ],
    },
    {
        userName: 'Jane Smith',
        phoneNum: '987-654-3210',
        productsBought: [
            {
                productType: 'shirt',
                details: [
                    {
                        brand: 'Puma',
                        size: 'S',
                        sellingDate: '2023-07-15',
                        uniqueKey: 'SHIRT13579',
                    },
                    {
                        brand: 'Tommy Hilfiger',
                        size: 'M',
                        sellingDate: '2023-07-14',
                        uniqueKey: 'SHIRT24680',
                    },
                ],
            },
            {
                productType: 't-shirt',
                details: [
                    {
                        brand: 'H&M',
                        size: 'XS',
                        sellingDate: '2023-07-13',
                        uniqueKey: 'TSHIRT97531',
                    },
                    {
                        brand: 'Forever 21',
                        size: 'S',
                        sellingDate: '2023-07-12',
                        uniqueKey: 'TSHIRT08642',
                    },
                ],
            },
            {
                productType: 'homeDecor',
                details: [
                    {
                        item: 'Wall Clock',
                        design: 'Vintage',
                        sellingDate: '2023-07-11',
                        uniqueKey: 'CLOCK75319',
                    },
                    {
                        item: 'Throw Pillow',
                        design: 'Geometric',
                        sellingDate: '2023-07-10',
                        uniqueKey: 'PILLOW86420',
                    },
                ],
            },
        ],
    },
    {
        userName: 'Michael Johnson',
        phoneNum: '555-123-4567',
        productsBought: [
            {
                productType: 'jeans',
                details: [
                    {
                        brand: 'Lee',
                        size: '36x32',
                        sellingDate: '2023-07-09',
                        uniqueKey: 'JEANS97531',
                    },
                    {
                        brand: 'Calvin Klein',
                        size: '34x30',
                        sellingDate: '2023-07-08',
                        uniqueKey: 'JEANS86420',
                    },
                ],
            },
            {
                productType: 'shoes',
                details: [
                    {
                        brand: 'Reebok',
                        size: '11',
                        sellingDate: '2023-07-07',
                        uniqueKey: 'SHOES75319',
                    },
                    {
                        brand: 'Vans',
                        size: '10.5',
                        sellingDate: '2023-07-06',
                        uniqueKey: 'SHOES08642',
                    },
                ],
            },
            {
                productType: 'homeDecor',
                details: [
                    {
                        item: 'Framed Art',
                        design: 'Abstract',
                        sellingDate: '2023-07-05',
                        uniqueKey: 'ART97531',
                    },
                    {
                        item: 'Decorative Vase',
                        design: 'Modern',
                        sellingDate: '2023-07-04',
                        uniqueKey: 'VASE86420',
                    },
                ],
            },
        ],
    },
];
