// MyDataList.tsx
import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css';
import typeaheadStyles from './typeahead.styles';
import {User, Product, HomeDecorDetail, ProductDetail} from './types';

interface MyDataListProps {
    data: User[];
    onChange: (selectedData: string[]) => void;
    label: string;
    selectedOption?: string;
    cascadeOptions?: string[]; // Options for cascading dropdown
}

const MyDataList: React.FC<MyDataListProps> = ({
                                                   data,
                                                   onChange,
                                                   label,
                                                   selectedOption,
                                                   cascadeOptions = [],
                                               }) => {
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        if (cascadeOptions.length > 0) {
            // If cascading dropdowns are available (user is already selected)
            const selectedUser = data.find((user) => user.userName === cascadeOptions[0]);
            if (selectedUser) {
                if (cascadeOptions.length === 1) {
                    // Second dropdown (Product Type)
                    const productTypes = selectedUser.productsBought.map(
                        (product: Product) => product.productType
                    );
                    setOptions(productTypes);
                } else if (cascadeOptions.length === 2) {
                    // Third dropdown (Brand/Item)
                    const selectedProductType = cascadeOptions[1];
                    const selectedProduct = selectedUser.productsBought.find(
                        (product: Product) => product.productType === selectedProductType
                    );
                    if (selectedProduct) {
                        const brandsOrItems = selectedProduct.details.map((detail) =>
                            'brand' in detail ? (detail as ProductDetail).brand : (detail as HomeDecorDetail).item
                        );
                        setOptions(brandsOrItems);
                    }
                }
            }
        } else {
            // First dropdown (User)
            const userNames = data.map((user) => user.userName);
            setOptions(userNames);
        }
    }, [cascadeOptions, data]);

    return (
        <div>
            <h4>{label}</h4>
            <Typeahead
                id={label}
                options={options}
                onChange={onChange}
                selected={selectedOption ? [selectedOption] : []}
                // clearButton
                style={typeaheadStyles}
            />
        </div>
    );
};

export default MyDataList;
