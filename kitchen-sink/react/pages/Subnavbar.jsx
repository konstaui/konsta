import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  Segmented,
  SegmentedButton,
} from 'tailwind-mobile/react';

export default function SubnavbarPage() {
  return (
    <Page>
      <Navbar
        title="Subnavbar"
        left={<NavbarBackLink onClick={() => history.back()} />}
        subnavbar={
          <Segmented strong>
            <SegmentedButton small strong active>
              Button
            </SegmentedButton>
            <SegmentedButton small strong>
              Button
            </SegmentedButton>
            <SegmentedButton small strong>
              Button
            </SegmentedButton>
          </Segmented>
        }
      />
      <div className="relative">
        <Block strong>
          <p>
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
