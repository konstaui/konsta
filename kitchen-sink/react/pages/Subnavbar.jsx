import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  Segmented,
  SegmentedButton,
} from 'konsta/react';

export default function SubnavbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Subnavbar"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
        subnavbar={
          <Segmented strong rounded>
            <SegmentedButton active>Button</SegmentedButton>
            <SegmentedButton>Button</SegmentedButton>
            <SegmentedButton>Button</SegmentedButton>
          </Segmented>
        }
      />
      <div className="relative">
        <Block strong inset>
          <p>
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            Subnavbar is useful when you need to put any additional elements
            into Navbar, like Tab Links or Search Bar. It also remains visible
            when Navbar hidden.
          </p>
        </Block>
      </div>
    </Page>
  );
}
SubnavbarPage.displayName = 'SubnavbarPage';
