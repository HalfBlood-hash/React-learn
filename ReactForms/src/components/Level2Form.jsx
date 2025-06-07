import React from "react";

function Level2Form({ label, handleChange, handleSubmit, formdata }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={label}>{label}</label>
                    <input 
                        type="text" 
                        name={label.toLowerCase()} 
                        placeholder={`Enter ${label}`} 
                        value={formdata[label.toLowerCase()] || ""} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Level2Form;
