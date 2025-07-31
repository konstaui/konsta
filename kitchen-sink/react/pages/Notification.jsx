import React, { useState, useEffect } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  Notification,
  Button,
  Dialog,
  DialogButton,
} from 'konsta/react';
import DemoIcon from '../components/DemoIcon';

export default function NotificationPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [notificationFull, setNotificationFull] = useState(false);
  const [notificationWithButton, setNotificationWithButton] = useState(false);
  const [notificationCloseOnClick, setNotificationCloseOnClick] =
    useState(false);
  const [notificationCallbackOnClose, setNotificationCallbackOnClose] =
    useState(false);
  const [alertOpened, setAlertOpened] = useState(false);

  const openNotification = (setter) => {
    setNotificationFull(false);
    setNotificationWithButton(false);
    setNotificationCloseOnClick(false);
    setNotificationCallbackOnClose(false);
    setter(true);
  };

  useEffect(() => {
    let timer;
    if (notificationFull) {
      timer = setTimeout(() => {
        setNotificationFull(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [notificationFull]);

  return (
    <Page>
      <Navbar
        title="Notification"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      <Notification
        opened={notificationFull}
        icon={<DemoIcon />}
        title="Konsta UI"
        titleRightText="now"
        subtitle="This is a subtitle"
        text="This is a simple notification message"
      />
      <Notification
        opened={notificationWithButton}
        icon={<DemoIcon />}
        title="Konsta UI"
        button
        onClick={() => setNotificationWithButton(false)}
        subtitle="Notification with close button"
        text="Click (x) button to close me"
      />
      <Notification
        opened={notificationCloseOnClick}
        icon={<DemoIcon />}
        title="Konsta UI"
        titleRightText="now"
        subtitle="Notification with close on click"
        text="Click me to close"
        onClick={() => setNotificationCloseOnClick(false)}
      />
      <Notification
        opened={notificationCallbackOnClose}
        icon={<DemoIcon />}
        title="Konsta UI"
        titleRightText="now"
        subtitle="Notification with close on click"
        text="Click me to close"
        onClick={() => {
          setNotificationCallbackOnClose(false);
          setAlertOpened(true);
        }}
      />
      <Dialog
        opened={alertOpened}
        onBackdropClick={() => setAlertOpened(false)}
        title="Konsta UI"
        content="Notification closed"
        buttons={
          <DialogButton onClick={() => setAlertOpened(false)}>Ok</DialogButton>
        }
      />
      <Block inset strong className="space-y-4">
        <p>
          Konsta UI comes with simple Notifications component that allows you to
          show some useful messages to user and request basic actions.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button rounded onClick={() => openNotification(setNotificationFull)}>
            Full layout notification
          </Button>
          <Button
            rounded
            onClick={() => openNotification(setNotificationWithButton)}
          >
            With Close Button
          </Button>
          <Button
            rounded
            onClick={() => openNotification(setNotificationCloseOnClick)}
          >
            Click to Close
          </Button>
          <Button
            rounded
            onClick={() => openNotification(setNotificationCallbackOnClose)}
          >
            Callback on Close
          </Button>
        </div>
      </Block>
    </Page>
  );
}

NotificationPage.displayName = 'NotificationPage';
