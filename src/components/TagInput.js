import React, { useState } from 'react';

const TagInput = ({ title, value, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            margin: "20px auto",
            width: "80%",
        },
        title: {
            margin: "0 0 10px 0",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "1.17em",  // h3 default size
        },
        inputContainer: {
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            marginBottom: '10px',
            boxSizing: 'border-box',
        },
        tagContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            width: '100%',
        },
        tag: {
            padding: "10px 20px",
            border: "2px solid bisque",
            borderRadius: "5px",
            backgroundColor: "bisque",
            color: "black",
            fontSize: "14px",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        },
        removeButton: {
            background: 'none',
            border: 'none',
            color: '#333',
            cursor: 'pointer',
            padding: '0',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '8px',
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            const newItem = inputValue.trim();
            if (!value.includes(newItem)) {
                onChange([...value, newItem]);
            }
            setInputValue('');
        }
    };

    const removeTag = (tagToRemove) => {
        const newTags = value.filter(tag => tag !== tagToRemove);
        onChange(newTags);
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>{title}</h3>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type and press Enter to add"
                    style={styles.input}
                />
                <div style={styles.tagContainer}>
                    {value.map((tag, index) => (
                        <div key={index} style={styles.tag}>
                            {tag}
                            <button
                                onClick={() => removeTag(tag)}
                                style={styles.removeButton}
                                title="Remove item"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagInput; 