import React from 'react';
import {
  Page as PageComponent,
  Navbar,
  NavbarBackLink,
} from 'tailwind-mobile/react';

export default function Page(props) {
  const { title, backLink = true, children } = props;
  const goBack = () => {
    history.back();
  };
  return (
    <PageComponent className="min-h-screen relative pb-0.5">
      {title && (
        <Navbar
          title={title}
          className="top-0"
          position="sticky"
          left={backLink && <NavbarBackLink onClick={goBack} />}
        />
      )}
      {children}
    </PageComponent>
  );
}
