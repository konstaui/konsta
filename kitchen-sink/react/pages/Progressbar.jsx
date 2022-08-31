import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockTitle,
  Progressbar,
  Segmented,
  SegmentedButton,
} from 'konsta/react';

export default function ProgressbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [progress, setProgress] = useState(0.1);
  return (
    <Page>
      <Navbar
        title="Progressbar"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Determinate Progress Bar</BlockTitle>
      <Block strong insetMaterial outlineIos>
        <div className="my-4">
          <Progressbar progress={progress} />
        </div>
        <Segmented raised>
          <SegmentedButton
            active={progress === 0.1}
            onClick={() => setProgress(0.1)}
          >
            10%
          </SegmentedButton>
          <SegmentedButton
            active={progress === 0.3}
            onClick={() => setProgress(0.3)}
          >
            30%
          </SegmentedButton>
          <SegmentedButton
            active={progress === 0.5}
            onClick={() => setProgress(0.5)}
          >
            50%
          </SegmentedButton>
          <SegmentedButton
            active={progress === 1.0}
            onClick={() => setProgress(1.0)}
          >
            100%
          </SegmentedButton>
        </Segmented>
      </Block>

      <BlockTitle>Colors</BlockTitle>
      <Block strong insetMaterial outlineIos className="space-y-4">
        <Progressbar className="k-color-brand-red" progress={0.25} />
        <Progressbar className="k-color-brand-green" progress={0.5} />
        <Progressbar className="k-color-brand-yellow" progress={0.75} />
        <Progressbar className="k-color-brand-purple" progress={1} />
      </Block>
    </Page>
  );
}
ProgressbarPage.displayName = 'ProgressbarPage';
