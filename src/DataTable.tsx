// DataTable.tsx
import React from 'react';
import DataTable from 'react-data-table-component';
import { User, Product, ProductDetail, HomeDecorDetail } from './types';

interface DataTableProps {
    data: User[];
    selectedUser?: string;
    selectedProductType?: string;
    selectedBrandOrItem?: string;
}

const columns = [
    {
        name: 'User Name',
        selector: 'userName',
        sortable: true,
    },
    {
        name: 'Phone Number',
        selector: 'phoneNum',
        sortable: true,
    },
    {
        name: 'Product Type',
        selector: 'productType',
        sortable: true,
    },
    {
        name: 'Brand / Item',
        selector: 'brandOrItem',
        sortable: true,
    },
    {
        name: 'Size / Design',
        selector: 'sizeOrDesign',
        sortable: true,
    },
    {
        name: 'Selling Date',
        selector: 'sellingDate',
        sortable: true,
    },
    {
        name: 'Unique Key',
        selector: 'uniqueKey',
        sortable: true,
    },
];

const transformData = (data: User[]) => {
    return data.flatMap((user) =>
        user.productsBought.flatMap((product) =>
            product.details.map((detail) => ({
                userName: user.userName,
                phoneNum: user.phoneNum,
                productType: product.productType,
                brandOrItem: 'brand' in detail ? (detail as ProductDetail).brand : (detail as HomeDecorDetail).item,
                sizeOrDesign: 'size' in detail ? (detail as ProductDetail).size : (detail as HomeDecorDetail).design,
                sellingDate: detail.sellingDate,
                uniqueKey: detail.uniqueKey,
            }))
        )
    );
};

const DataTableComponent: React.FC<DataTableProps> = ({
                                                          data,
                                                          selectedUser,
                                                          selectedProductType,
                                                          selectedBrandOrItem,
                                                      }) => {
    const filteredData = transformData(data).filter((row) => {
        if (!selectedUser || !selectedProductType || !selectedBrandOrItem) {
            return true;
        }

        return (
            row.userName === selectedUser &&
            row.productType === selectedProductType &&
            row.brandOrItem === selectedBrandOrItem
        );
    });

    return <DataTable columns={columns} data={filteredData} />;
};

export default DataTableComponent;
