import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Button,
  Toast,
  Block,
} from 'konsta/react';

export default function ToastPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [toastLeftOpened, setToastLeftOpened] = useState(false);
  const [toastCenterOpened, setToastCenterOpened] = useState(false);
  const [toastRightOpened, setToastRightOpened] = useState(false);

  const openToast = (setter) => {
    // close other toast
    setToastLeftOpened(false);
    setToastCenterOpened(false);
    setToastRightOpened(false);
    setter(true);
  };
  return (
    <Page>
      <Navbar
        title="Toast"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strong className="space-y-4">
        <Toast
          position="left"
          opened={toastLeftOpened}
          button={
            <Button clear inline onClick={() => setToastLeftOpened(false)}>
              Close
            </Button>
          }
        >
          <div className="shrink">Hello this is left toast!</div>
        </Toast>
        <Toast
          position="center"
          opened={toastCenterOpened}
          button={
            <Button clear inline onClick={() => setToastCenterOpened(false)}>
              Close
            </Button>
          }
        >
          <div className="shrink">Hello this is center toast!</div>
        </Toast>
        <Toast
          position="right"
          opened={toastRightOpened}
          button={
            <Button clear inline onClick={() => setToastRightOpened(false)}>
              Close
            </Button>
          }
        >
          <div className="shrink">Hello this is right toast!</div>
        </Toast>
        <p>
          Toasts provide brief feedback about an operation through a message on
          the screen.
        </p>
        <p>
          <Button onClick={() => openToast(setToastLeftOpened)}>
            Toast on Left
          </Button>
        </p>
        <p>
          <Button onClick={() => openToast(setToastCenterOpened)}>
            Toast on Center
          </Button>
        </p>
        <p>
          <Button onClick={() => openToast(setToastRightOpened)}>
            Toast on Right
          </Button>
        </p>
      </Block>
    </Page>
  );
}
ToastPage.displayName = 'ToastPage';
