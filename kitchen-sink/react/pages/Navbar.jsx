import React from 'react';
import { Page, Navbar, NavbarBackLink, Link, Block } from 'konsta/react';

export default function NavbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Navbar"
        subtitle="Subtitle"
        className="top-0 sticky"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
        right={<Link navbar>Right</Link>}
      />
      <div className="relative">
        <Block strong>
          <p>
            Navbar is a fixed area at the top of a screen that contains Page
            title and navigation elements.
          </p>
        </Block>
      </div>
    </Page>
  );
}
NavbarPage.displayName = 'NavbarPage';
