

import React from 'react'

export default function Level4ChildForm({ label, formdata, currencylist ,handleChange }) {
    return (
        <>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            {label}
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-md placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 border border-red-500"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}
