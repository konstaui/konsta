import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Toolbar,
  Link,
  Block,
  Button,
  ToolbarPane,
} from 'konsta/react';

export default function ToolbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [isTop, setIsTop] = useState(false);
  return (
    <Page className="flex flex-col">
      <Navbar
        title="Toolbar"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      {isTop && (
        <Toolbar
          top
          className={`left-0 ios:top-safe-15 ios:mt-1 material:top-safe-16 sticky w-full`}
        >
          <ToolbarPane>
            <Link>Link 1</Link>
            <Link>Link 2</Link>
          </ToolbarPane>
          <ToolbarPane>
            <Link>Link 3</Link>
          </ToolbarPane>
        </Toolbar>
      )}

      <Block strong inset className="space-y-4 mb-0 shrink-0">
        <p>
          Toolbar supports both top and bottom positions. Click the following
          button to change its position.
        </p>
        <p>
          <Button
            rounded
            onClick={() => {
              setIsTop(!isTop);
            }}
          >
            Toggle Toolbar Position
          </Button>
        </p>
      </Block>
      <Block strong inset className="space-y-4 shrink-0">
        <p>
          Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus,
          ornare tellus eu, euismod mauris. In porta turpis at semper convallis.
          Duis adipiscing leo eu nulla lacinia, quis rhoncus metus condimentum.
          Etiam nec malesuada nibh. Maecenas quis lacinia nisl, vel posuere
          dolor. Vestibulum condimentum, nisl ac vulputate egestas, neque enim
          dignissim elit, rhoncus volutpat magna enim a est. Aenean sit amet
          ligula neque. Cras suscipit rutrum enim. Nam a odio facilisis,
          elementum tellus non, tortor. Pellentesque felis eros, dictum vitae
          lacinia quis, lobortis vitae ipsum. Cras vehicula bibendum lorem quis
          imperdiet.
        </p>
        <p>
          In hac habitasse platea dictumst. Etiam varius, ante vel ornare
          facilisis, velit massa rutrum dolor, ac porta magna magna lacinia
          nunc. Curabitur cursus laoreet. Aenean vel tempus augue. Pellentesque
          in imperdiet nibh. Mauris rhoncus nulla id sem suscipit volutpat.
          Pellentesque ac arcu in nisi viverra pulvinar. Nullam nulla orci,
          bibendum sed ligula non, ullamcorper iaculis mi. In hac habitasse
          platea dictumst. Praesent varius at nisl eu luctus. Cras aliquet porta
          est. Quisque elementum quis dui et consectetur. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
          sed laoreet purus. Pellentesque eget ante ante.
        </p>
        <p>
          Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat
          venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam
          vitae lacinia neque. Aliquam nisi purus, interdum in arcu sed,
          ultrices rutrum arcu. Nulla mi turpis, consectetur vel enim quis,
          facilisis viverra dui. Aliquam quis convallis tortor, quis semper
          ligula. Morbi ullamcorper massa at accumsan. Etiam purus odio, posuere
          in ligula vitae, viverra ultricies justo. Vestibulum nec interdum
          nisi. Aenean ac consectetur velit, non malesuada magna. Sed pharetra
          vehicula augue, vel venenatis lectus gravida eget. Curabitur lacus
          tellus, venenatis eu arcu in, interdum auctor nunc. Nunc non metus
          neque. Suspendisse viverra lectus sed risus aliquet, vel accumsan
          dolor feugiat.
        </p>
      </Block>
      {!isTop && (
        <Toolbar className={`left-0 sticky bottom-0 w-full mt-auto`}>
          <ToolbarPane>
            <Link>Link 1</Link>
            <Link>Link 2</Link>
          </ToolbarPane>
          <ToolbarPane>
            <Link>Link 3</Link>
          </ToolbarPane>
        </Toolbar>
      )}
    </Page>
  );
}
ToolbarPage.displayName = 'ToolbarPage';
