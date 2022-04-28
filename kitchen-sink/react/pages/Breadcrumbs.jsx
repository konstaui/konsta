import React, { useRef, useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  BlockHeader,
  Block,
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsSeparator,
  BreadcrumbsCollapsed,
  Popover,
  List,
  ListItem,
  Link,
} from 'konsta/react';

export default function BreadcrumbsPage() {
  const isPreview = document.location.href.includes('examplePreview');

  const popoverTargetRef = useRef(null);
  const [popoverOpened, setPopoverOpened] = useState(false);
  return (
    <Page>
      <Navbar
        title="Breadcrumbs"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strong>
        Breadcrumbs allow users to keep track and maintain awareness of their
        locations within the app or website. They should be used for large sites
        and apps with hierarchically arranged pages.
      </Block>

      <BlockTitle>Basic</BlockTitle>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Home</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Catalog</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>Phones</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>

      <BlockTitle>Scrollable</BlockTitle>
      <BlockHeader>
        Breadcrumbs will be scrollable if they don't fit the screen
      </BlockHeader>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Home</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Catalog</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Phones</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Apple</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>

      <BlockTitle>Collapsed</BlockTitle>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link colors={{ text: 'text-inherit' }}>Home</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsCollapsed
            ref={popoverTargetRef}
            onClick={() => setPopoverOpened(true)}
          />
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>

      <Popover
        opened={popoverOpened}
        className="breadcrumbs-popover"
        style={{ width: '120px' }}
        target={popoverTargetRef.current}
        onBackdropClick={() => setPopoverOpened(false)}
      >
        <List nested hairlines={false} colors={{ bg: 'bg-transparent' }}>
          <ListItem
            link
            title="Catalog"
            onClick={() => setPopoverOpened(false)}
          />
          <ListItem
            link
            title="Phones"
            onClick={() => setPopoverOpened(false)}
          />
          <ListItem
            link
            title="Apple"
            onClick={() => setPopoverOpened(false)}
          />
        </List>
      </Popover>
    </Page>
  );
}
BreadcrumbsPage.displayName = 'BreadcrumbsPage';
