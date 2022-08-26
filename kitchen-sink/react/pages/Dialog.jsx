import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Dialog,
  DialogButton,
  Block,
  List,
  ListItem,
  Radio,
  Button,
} from 'konsta/react';

export default function DialogPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [basicOpened, setBasicOpened] = useState(false);
  const [alertOpened, setAlertOpened] = useState(false);
  const [confirmOpened, setConfirmOpened] = useState(false);
  const [listOpened, setListOpened] = useState(false);
  const [radioValue, setRadioValue] = useState('batman');
  return (
    <Page>
      <Navbar
        title="Dialog"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <Block strong inset className="space-y-4">
        <p>
          Dialog is a type of modal window that appears in front of app content
          to provide critical information, or prompt for a decision to be made.
        </p>
      </Block>
      <Block strong inset>
        <p className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button rounded onClick={() => setBasicOpened(true)}>
            Basic
          </Button>
          <Button rounded onClick={() => setAlertOpened(true)}>
            Alert
          </Button>
          <Button rounded onClick={() => setConfirmOpened(true)}>
            Confirm
          </Button>
          <Button rounded onClick={() => setListOpened(true)}>
            List
          </Button>
        </p>
      </Block>
      <Dialog
        opened={basicOpened}
        onBackdropClick={() => setBasicOpened(false)}
        title="Dialog Title"
        content="Dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
        buttons={
          <>
            <DialogButton onClick={() => setBasicOpened(false)}>
              Action 2
            </DialogButton>
            <DialogButton onClick={() => setBasicOpened(false)}>
              Action 1
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={alertOpened}
        onBackdropClick={() => setAlertOpened(false)}
        title="Konsta UI"
        content="Hello world!"
        buttons={
          <>
            <DialogButton onClick={() => setAlertOpened(false)}>
              Ok
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={confirmOpened}
        onBackdropClick={() => setConfirmOpened(false)}
        title="Konsta UI"
        content="All good today?"
        buttons={
          <>
            <DialogButton onClick={() => setConfirmOpened(false)}>
              No
            </DialogButton>
            <DialogButton strong onClick={() => setConfirmOpened(false)}>
              Yes
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={listOpened}
        onBackdropClick={() => setListOpened(false)}
        title="Your super hero"
        content={
          <List nested className="-mx-4">
            <ListItem
              label
              title="Batman"
              after={
                <Radio
                  component="div"
                  value="batman"
                  checked={radioValue === 'batman'}
                  onChange={() => setRadioValue('batman')}
                />
              }
            />
            <ListItem
              label
              title="Spider-man"
              after={
                <Radio
                  component="div"
                  value="spiderman"
                  checked={radioValue === 'spiderman'}
                  onChange={() => setRadioValue('spiderman')}
                />
              }
            />
            <ListItem
              label
              title="Hulk"
              after={
                <Radio
                  component="div"
                  value="hulk"
                  checked={radioValue === 'hulk'}
                  onChange={() => setRadioValue('hulk')}
                />
              }
            />
          </List>
        }
        buttons={
          <>
            <DialogButton onClick={() => setListOpened(false)}>
              Confirm
            </DialogButton>
          </>
        }
      />
    </Page>
  );
}
DialogPage.displayName = 'DialogPage';
