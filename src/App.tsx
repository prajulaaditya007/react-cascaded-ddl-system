// App.tsx
import React, { useState } from 'react';
import './App.css';
import MyDataList from './MyDataList';
import DataTableComponent from './DataTable';
import { users } from './data';

const App: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<string | undefined>();
    const [selectedProductType, setSelectedProductType] = useState<string | undefined>();
    const [selectedBrandOrItem, setSelectedBrandOrItem] = useState<string | undefined>();

    const handleUserChange = (selectedData: string[]) => {
        setSelectedUser(selectedData[0]);
        setSelectedProductType(undefined);
        setSelectedBrandOrItem(undefined);
    };

    const handleProductTypeChange = (selectedData: string[]) => {
        setSelectedProductType(selectedData[0]);
        setSelectedBrandOrItem(undefined);
    };

    const handleBrandOrItemChange = (selectedData: string[]) => {
        setSelectedBrandOrItem(selectedData[0]);
    };

    return (
        <div className="App">
            <h1>Cascaded Dropdowns with DataTable</h1>
            <div className="dropdown-container">
                <MyDataList
                    data={users}
                    onChange={handleUserChange}
                    label="Select User"
                    selectedOption={selectedUser}
                />
                {selectedUser && (
                    <MyDataList
                        data={users}
                        onChange={handleProductTypeChange}
                        label="Select Product Type"
                        selectedOption={selectedProductType}
                        cascadeOptions={[selectedUser]}
                    />
                )}
                {selectedUser && selectedProductType && (
                    <MyDataList
                        data={users}
                        onChange={handleBrandOrItemChange}
                        label="Select Brand / Item"
                        selectedOption={selectedBrandOrItem}
                        cascadeOptions={[selectedUser, selectedProductType]}
                    />
                )}
            </div>
            <div className="table-container">
                <DataTableComponent
                    data={users}
                    selectedUser={selectedUser}
                    selectedProductType={selectedProductType}
                    selectedBrandOrItem={selectedBrandOrItem}
                />
            </div>
        </div>
    );
};

export default App;
