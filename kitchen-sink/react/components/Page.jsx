import React from 'react';
import {
  Page as PageComponent,
  Navbar,
  NavbarBackLink,
} from 'tailwind-mobile/react';

export default function Page(props) {
  const { title, backLink = true, navRight, children } = props;
  const goBack = () => {
    history.back();
  };
  return (
    <PageComponent>
      {title && (
        <Navbar
          title={title}
          left={backLink && <NavbarBackLink onClick={goBack} />}
          right={navRight}
        />
      )}
      <div className="relative">{children}</div>
    </PageComponent>
  );
}
