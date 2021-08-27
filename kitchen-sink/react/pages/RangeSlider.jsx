import React, { useState } from 'react';
import {
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  Range,
} from 'tailwind-mobile/react';

import Page from '../components/Page';

export default function RangeSliderPage() {
  const [volume, setVolume] = useState(50);
  const [price, setPrice] = useState(150);
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(75);
  return (
    <Page title="Range Slider">
      <BlockTitle>Volume: {volume}</BlockTitle>
      <BlockHeader>From 0 to 100 with step 10</BlockHeader>
      <List>
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
      <List>
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
      <List>
        <ListItem
          innerChildren={
            <Range
              colors={{
                valueBg: 'bg-red-500',
                thumbBgMaterial: 'range-thumb:bg-red-500',
              }}
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
              colors={{
                valueBg: 'bg-green-500',
                thumbBgMaterial: 'range-thumb:bg-green-500',
              }}
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
              colors={{
                valueBg: 'bg-blue-500',
                thumbBgMaterial: 'range-thumb:bg-blue-500',
              }}
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
