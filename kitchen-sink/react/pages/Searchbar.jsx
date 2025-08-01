import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Searchbar,
  List,
  ListItem,
} from 'konsta/react';

const items = [
  { title: 'FC Ajax' },
  { title: 'FC Arsenal' },
  { title: 'FC Athletic' },
  { title: 'FC Barcelona' },
  { title: 'FC Bayern München' },
  { title: 'FC Bordeaux' },
  { title: 'FC Borussia Dortmund' },
  { title: 'FC Chelsea' },
  { title: 'FC Galatasaray' },
  { title: 'FC Juventus' },
  { title: 'FC Liverpool' },
  { title: 'FC Manchester City' },
  { title: 'FC Manchester United' },
  { title: 'FC Paris Saint-Germain' },
  { title: 'FC Real Madrid' },
  { title: 'FC Tottenham Hotspur' },
  { title: 'FC Valencia' },
  { title: 'FC West Ham United' },
];

export default function SearchbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleClear = () => {
    setSearchQuery('');
  };
  const handleDisable = () => {
    console.log('Disable');
  };
  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <Page>
      <Navbar
        title="Searchbar"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
        subnavbar={
          <Searchbar
            onInput={handleSearch}
            value={searchQuery}
            onClear={handleClear}
            disableButton
            disableButtonText="Cancel"
            onDisable={handleDisable}
          />
        }
      />
      <List strong inset>
        {filteredItems.length === 0 ? (
          <ListItem title="Nothing found" className="text-center" />
        ) : (
          filteredItems.map((item) => (
            <ListItem key={item.title} title={item.title} />
          ))
        )}
      </List>
    </Page>
  );
}
SearchbarPage.displayName = 'SearchbarPage';
