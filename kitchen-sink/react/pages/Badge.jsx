import React from 'react';
import {
  Badge,
  Icon,
  Link,
  List,
  ListItem,
  Tabbar,
  TabbarLink,
} from 'tailwind-mobile/react';
import {
  PersonCircleFill,
  EnvelopeFill,
  Calendar,
  CloudUploadFill,
} from 'framework7-icons/react';
import { MdPerson, MdEmail, MdToday, MdFileUpload } from 'react-icons/md';
import DemoIcon from '../components/DemoIcon';
import Page from '../components/Page';

export default function BadgePage() {
  return (
    <Page
      title="Badge"
      navRight={
        <Link navbar iconOnly>
          <Icon
            ios={<PersonCircleFill className="w-7 h-7" />}
            material={<MdPerson className="w-6 h-6" />}
            badge="5"
            badgeColors={{ bg: 'bg-red-500' }}
          />
        </Link>
      }
    >
      <Tabbar labels className="left-0 bottom-0 fixed">
        <TabbarLink
          active
          icon={
            <Icon
              ios={<EnvelopeFill className="w-7 h-7" />}
              material={<MdEmail className="w-6 h-6" />}
              badge="5"
              badgeColors={{ bg: 'bg-green-500' }}
            />
          }
          label="Inbox"
        />
        <TabbarLink
          icon={
            <Icon
              ios={<Calendar className="w-7 h-7" />}
              material={<MdToday className="w-6 h-6" />}
              badge="7"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Calendar"
        />
        <TabbarLink
          icon={
            <Icon
              ios={<CloudUploadFill className="w-7 h-7" />}
              material={<MdFileUpload className="w-6 h-6" />}
              badge="1"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Upload"
        />
      </Tabbar>
      <List>
        <ListItem
          media={<DemoIcon />}
          title="Foo Bar"
          after={<Badge colors={{ bg: 'bg-gray-500' }}>0</Badge>}
        />

        <ListItem
          media={<DemoIcon />}
          title="Ivan Petrov"
          after={<Badge>CEO</Badge>}
        />

        <ListItem
          media={<DemoIcon />}
          title="John Doe"
          after={<Badge colors={{ bg: 'bg-green-500' }}>5</Badge>}
        />

        <ListItem
          media={<DemoIcon />}
          title="Jane Doe"
          after={<Badge colors={{ bg: 'bg-yellow-500' }}>NEW</Badge>}
        />
      </List>
    </Page>
  );
}
BadgePage.displayName = 'BadgePage';
