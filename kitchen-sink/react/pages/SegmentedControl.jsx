import React, { useState } from 'react';

import {
  Page,
  Navbar,
  NavbarBackLink,
  Segmented,
  SegmentedButton,
  Block,
  BlockTitle,
} from 'konsta/react';

export default function SegmentedControlPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [activeSegmented, setActiveSegmented] = useState(1);
  return (
    <Page>
      <Navbar
        title="Segmented Control"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Default Segmented</BlockTitle>
      <Block strong inset className="space-y-4">
        <Segmented>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>

        <Segmented rounded>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>
      </Block>

      <BlockTitle>Raised Segmented</BlockTitle>
      <Block strong inset className="space-y-4">
        <Segmented raised>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>
        <Segmented raised rounded>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>
      </Block>

      <BlockTitle>Outline</BlockTitle>
      <Block strong inset className="space-y-4">
        <Segmented outline>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>
        <Segmented rounded outline>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>
      </Block>

      <BlockTitle>Strong Segmented</BlockTitle>
      <Block strong inset className="space-y-4">
        <Segmented strong>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>

        <Segmented strong rounded>
          <SegmentedButton
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
          >
            Button
          </SegmentedButton>
          <SegmentedButton
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
          >
            Button
          </SegmentedButton>
        </Segmented>
      </Block>
    </Page>
  );
}
SegmentedControlPage.displayName = 'SegmentedControlPage';
