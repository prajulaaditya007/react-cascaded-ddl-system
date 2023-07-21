// typeahead.styles.ts
const typeaheadStyles = {
    // Customize your styles here
    // For example, you can override the default styles
    // by adding CSS properties here.

    // Example style overrides:
    input: {
        width: '300px',
        height: '38px',
        fontSize: '16px',
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
    },
    menu: {
        width: '300px',
        maxHeight: '200px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ced4da',
        zIndex: 9999,
    },
    option: {
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
        '&:active': {
            backgroundColor: '#e0e0e0',
        },
    },
    selectedItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '4px',
        marginRight: '4px',
    },
    clearButton: {
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        // marginLeft: '8px',
        outline: 'none', // Remove focus outline
    }// ,
};

export default typeaheadStyles;
