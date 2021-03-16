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
    <PageComponent className="min-h-screen absolute left-0 top-0 w-full h-full overflow-auto">
      {title && (
        <Navbar
          title={title}
          className="top-0"
          position="sticky"
          left={backLink && <NavbarBackLink onClick={goBack} />}
          right={navRight}
        />
      )}
      <div className="relative">{children}</div>
    </PageComponent>
  );
}
