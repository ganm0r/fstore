import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { fstoreTheme } from '../theme';

const Search = ({ products }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const onSubmit = event => {
        event.preventDefault();

        if (searchQuery.length > 0) {
            setSearchResults(products.filter(product => product.title.toLowerCase().startsWith(searchQuery.toLowerCase()) || product.title.toLowerCase().includes(searchQuery.toLowerCase())))
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={onSubmit} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '25%'
                }}>
                    <Input type="text" placeholder="Search our store" name="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
                    <Button bgColor={fstoreTheme.colors.black} fontColor={fstoreTheme.colors.yellow} marginBottom="0px" type="submit">GO!</Button>
                </form>
            </div>
            <div style={{ display: 'flex', overflowX: 'scroll', overflowY: 'hidden', height: "max-content" }}>
                {searchResults && searchResults.map(product =>
                    <Card key={product.title} image={product.image} title={product.title.split(' ').slice(0, 3).join(' ')} price={product.price} bgColor={fstoreTheme.colors.yellow} fontColor={fstoreTheme.colors.black} />
                )}
            </div>
        </div>
    )
};

export { Search };