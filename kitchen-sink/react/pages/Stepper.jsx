import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Stepper,
  Block,
  BlockTitle,
  List,
  ListItem,
} from 'tailwind-mobile/react';

export default function StepperPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [value, setValue] = useState(1);
  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    setValue(value - 1 < 0 ? 0 : value - 1);
  };

  const [inputValue, setInputValue] = useState(1);
  const increaseInput = () => {
    const v = parseInt(inputValue, 10);
    if (isNaN(v)) setInputValue(0);
    else setInputValue(v + 1);
  };
  const decreaseInput = () => {
    const v = parseInt(inputValue, 10);
    if (isNaN(v)) setInputValue(0);
    setInputValue(v - 1 < 0 ? 0 : v - 1);
  };
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onInputBlur = () => {
    if (isNaN(parseInt(inputValue, 10))) setInputValue(0);
  };
  return (
    <Page>
      <Navbar
        title="Stepper"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Shape and size</BlockTitle>
      <Block strong className="text-center space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block text-xs mb-1">Default</div>
            <Stepper value={value} onPlus={increase} onMinus={decrease} />
          </div>
          <div>
            <div className="block text-xs mb-1">Round</div>
            <Stepper
              value={value}
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Outline</div>
            <Stepper
              value={value}
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Rounded Outline</div>
            <Stepper
              value={value}
              outline
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Small</div>
            <Stepper value={value} onPlus={increase} onMinus={decrease} small />
          </div>
          <div>
            <div className="block text-xs mb-1">Small Round</div>
            <Stepper
              value={value}
              small
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Small Outline</div>
            <Stepper
              value={value}
              small
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Small Outline</div>
            <Stepper
              value={value}
              small
              rounded
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Large</div>
            <Stepper value={value} onPlus={increase} onMinus={decrease} large />
          </div>
          <div>
            <div className="block text-xs mb-1">Large Round</div>
            <Stepper
              value={value}
              large
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Large Outline</div>
            <Stepper
              value={value}
              large
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Large Rounded Outline</div>
            <Stepper
              value={value}
              large
              rounded
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>
      </Block>

      <BlockTitle>Raised</BlockTitle>
      <Block strong className="text-center space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block text-xs mb-1">Default</div>
            <Stepper
              value={value}
              raised
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Round</div>
            <Stepper
              value={value}
              raised
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Outline</div>
            <Stepper
              value={value}
              raised
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Round Outline</div>
            <Stepper
              value={value}
              raised
              outline
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Small</div>
            <Stepper
              value={value}
              raised
              small
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Small Round</div>
            <Stepper
              value={value}
              raised
              small
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Small Outline</div>
            <Stepper
              value={value}
              raised
              small
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Small Rounded Outline</div>
            <Stepper
              value={value}
              raised
              small
              rounded
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Large</div>
            <Stepper
              value={value}
              raised
              large
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Large Round</div>
            <Stepper
              value={value}
              raised
              large
              rounded
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 margin-top">
          <div>
            <div className="block text-xs mb-1">Large Outline</div>
            <Stepper
              value={value}
              raised
              large
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <div className="block text-xs mb-1">Large Rounded Outline</div>
            <Stepper
              value={value}
              raised
              large
              rounded
              outline
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>
      </Block>
      <BlockTitle>With Text Input</BlockTitle>
      <Block strong className="text-center space-y-4">
        <div>
          <Stepper
            value={inputValue}
            input
            onChange={onInputChange}
            onBlur={onInputBlur}
            onPlus={increaseInput}
            onMinus={decreaseInput}
          />
        </div>
        <div>
          <Stepper
            value={inputValue}
            outline
            input
            onChange={onInputChange}
            onBlur={onInputBlur}
            onPlus={increaseInput}
            onMinus={decreaseInput}
          />
        </div>
      </Block>
      <BlockTitle>Only Buttons</BlockTitle>
      <List>
        <ListItem
          title={`Value is ${value}`}
          after={
            <Stepper
              value={value}
              buttonsOnly
              onPlus={increase}
              onMinus={decrease}
            />
          }
        />
        <ListItem
          title={`Value is ${value}`}
          after={
            <Stepper
              value={value}
              outline
              buttonsOnly
              onPlus={increase}
              onMinus={decrease}
            />
          }
        />
        <ListItem
          title={`Value is ${value}`}
          after={
            <Stepper
              value={value}
              raised
              outline
              buttonsOnly
              onPlus={increase}
              onMinus={decrease}
            />
          }
        />
      </List>

      <BlockTitle>Colors</BlockTitle>
      <Block strong className="text-center space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Stepper
              value={value}
              colors={{
                text: 'text-red-500',
                border: 'border-red-500',
                bg: 'bg-red-500',
                activeBg: 'active:bg-red-500',
                activeBgDark: 'active:bg-red-600',
              }}
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <Stepper
              value={value}
              rounded
              colors={{
                text: 'text-green-500',
                border: 'border-green-500',
                bg: 'bg-green-500',
                activeBg: 'active:bg-green-500',
                activeBgDark: 'active:bg-green-600',
              }}
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Stepper
              value={value}
              colors={{
                text: 'text-yellow-500',
                border: 'border-yellow-500',
                bg: 'bg-yellow-500',
                activeBg: 'active:bg-yellow-500',
                activeBgDark: 'active:bg-yellow-600',
              }}
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
          <div>
            <Stepper
              value={value}
              rounded
              colors={{
                text: 'text-pink-500',
                border: 'border-pink-500',
                bg: 'bg-pink-500',
                activeBg: 'active:bg-pink-500',
                activeBgDark: 'active:bg-pink-600',
              }}
              onPlus={increase}
              onMinus={decrease}
            />
          </div>
        </div>
      </Block>
    </Page>
  );
}
StepperPage.displayName = 'StepperPage';
