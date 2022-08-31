import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  Range,
} from 'konsta/react';

export default function RangeSliderPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [volume, setVolume] = useState(50);
  const [price, setPrice] = useState(150);
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(75);
  return (
    <Page>
      <Navbar
        title="Range Slider"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Volume: {volume}</BlockTitle>
      <BlockHeader>From 0 to 100 with step 10</BlockHeader>
      <List strong insetMaterial outlineIos>
        <ListItem
          innerClassName="flex space-x-4"
          innerChildren={
            <>
              <span>0</span>
              <Range
                value={volume}
                step={10}
                onChange={(e) => setVolume(e.target.value)}
              />
              <span>100</span>
            </>
          }
        />
      </List>

      <BlockTitle>Price: ${price}</BlockTitle>
      <BlockHeader>From 0 to 1000 with step 1</BlockHeader>
      <List strong insetMaterial outlineIos>
        <ListItem
          innerClassName="flex space-x-4"
          innerChildren={
            <>
              <span>$0</span>
              <Range
                value={price}
                step={1}
                min={0}
                max={1000}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span>$1000</span>
            </>
          }
        />
      </List>

      <BlockTitle>
        Color: rgb({red}, {green}, {blue})
      </BlockTitle>
      <List strong insetMaterial outlineIos>
        <ListItem
          innerChildren={
            <Range
              className="k-color-brand-red"
              value={red}
              step={1}
              min={0}
              max={255}
              onChange={(e) => setRed(e.target.value)}
            />
          }
        />
        <ListItem
          innerChildren={
            <Range
              className="k-color-brand-green"
              value={green}
              step={1}
              min={0}
              max={255}
              onChange={(e) => setGreen(e.target.value)}
            />
          }
        />
        <ListItem
          innerChildren={
            <Range
              className="k-color-brand-blue"
              value={blue}
              step={1}
              min={0}
              max={255}
              onChange={(e) => setBlue(e.target.value)}
            />
          }
        />
      </List>
    </Page>
  );
}
RangeSliderPage.displayName = 'RangeSliderPage';
