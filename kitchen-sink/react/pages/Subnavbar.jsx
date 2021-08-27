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
  const goBack = () => {
    history.back();
  };
  return (
    <Page className="min-h-screen absolute left-0 top-0 w-full h-full overflow-auto">
      <Navbar
        title="Subnavbar"
        className="top-0 sticky"
        left={<NavbarBackLink onClick={goBack} />}
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
