import React, { useState } from 'react';
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
import { XmarkCircleFill } from 'framework7-icons/react';
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
      >
        <div className="shrink">This is a simple notification message</div>
      </Notification>
      <Notification
        opened={notificationWithButton}
        icon={<DemoIcon />}
        title="Konsta UI"
        titleRightText={
          <button
            type="button"
            onClick={() => setNotificationWithButton(false)}
          >
            <XmarkCircleFill className="w-6 h-6 fill-stone-400 dark:fill-stone-500" />
          </button>
        }
        subtitle="Notification with close button"
      >
        <div className="shrink">Click (x) button to close me</div>
      </Notification>
      <Notification
        opened={notificationCloseOnClick}
        icon={<DemoIcon />}
        title="Konsta UI"
        titleRightText="now"
        subtitle="Notification with close on click"
        onClick={() => setNotificationCloseOnClick(false)}
      >
        <div className="shrink">Click me to close</div>
      </Notification>
      <Notification
        opened={notificationCallbackOnClose}
        icon={<DemoIcon />}
        title="Konsta UI"
        titleRightText="now"
        subtitle="Notification with close on click"
        onClick={() => {
          setNotificationCallbackOnClose(false);
          setAlertOpened(true);
        }}
      >
        <div className="shrink">Click me to close</div>
      </Notification>
      <Dialog
        opened={alertOpened}
        onBackdropClick={() => setAlertOpened(false)}
        title="Konsta UI"
        content="Notification closed"
        buttons={
          <DialogButton onClick={() => setAlertOpened(false)}>Ok</DialogButton>
        }
      />
      <Block strongIos outlineIos className="space-y-4">
        <p>
          Konsta UI comes with simple Notifications component that allows you to
          show some useful messages to user and request basic actions.
        </p>
        <p>
          <Button onClick={() => openNotification(setNotificationFull)}>
            Full layout notification
          </Button>
        </p>
        <p>
          <Button onClick={() => openNotification(setNotificationWithButton)}>
            With Close Button
          </Button>
        </p>
        <p>
          <Button onClick={() => openNotification(setNotificationCloseOnClick)}>
            Click to Close
          </Button>
        </p>
        <p>
          <Button
            onClick={() => openNotification(setNotificationCallbackOnClose)}
          >
            Callback on Close
          </Button>
        </p>
      </Block>
    </Page>
  );
}

NotificationPage.displayName = 'NotificationPage';
