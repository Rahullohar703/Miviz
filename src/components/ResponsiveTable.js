// ResponsiveTable.js
import React from 'react';
import { motion } from 'framer-motion';
import './ResponsiveTable.css';

const data = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publisher: 'Scribner', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J.B. Lippincott & Co.', year: 1960 },
    { title: '1984', author: 'George Orwell', publisher: 'Secker & Warburg', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J.B. Lippincott & Co.', year: 1960 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J.B. Lippincott & Co.', year: 1960 },
    { title: 'To Kill a Mockingbird To Kill a Mockingbird To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J.B. Lippincott & Co.', year: 1960 },
];

const ResponsiveTable = () => (
    <motion.div
        className="table-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {data.map((book, index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </motion.div>
);

export default ResponsiveTable;
