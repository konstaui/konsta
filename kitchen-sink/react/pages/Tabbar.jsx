import React, { useState } from 'react';
import {
  Tabbar,
  TabbarLink,
  Block,
  Icon,
  List,
  ListItem,
  Toggle,
} from 'tailwind-mobile/react';
import {
  EnvelopeFill,
  Calendar,
  CloudUploadFill,
} from 'framework7-icons/react';
import { MdEmail, MdToday, MdFileUpload } from 'react-icons/md';

import Page from '../components/Page';

export default function TabbarPage() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [isTabbarLabels, setIsTabbarLabels] = useState(false);
  return (
    <Page title="Tabbar">
      <Tabbar labels={isTabbarLabels} className="left-0 bottom-0 fixed">
        <TabbarLink
          active={activeTab === 'tab-1'}
          onClick={() => setActiveTab('tab-1')}
          icon={
            isTabbarLabels && (
              <Icon
                ios={<EnvelopeFill className="w-7 h-7" />}
                material={<MdEmail className="w-6 h-6" />}
              />
            )
          }
          label="Tab 1"
        />
        <TabbarLink
          active={activeTab === 'tab-2'}
          onClick={() => setActiveTab('tab-2')}
          icon={
            isTabbarLabels && (
              <Icon
                ios={<Calendar className="w-7 h-7" />}
                material={<MdToday className="w-6 h-6" />}
              />
            )
          }
          label="Tab 2"
        />
        <TabbarLink
          active={activeTab === 'tab-3'}
          onClick={() => setActiveTab('tab-3')}
          icon={
            isTabbarLabels && (
              <Icon
                ios={<CloudUploadFill className="w-7 h-7" />}
                material={<MdFileUpload className="w-6 h-6" />}
              />
            )
          }
          label="Tab 3"
        />
      </Tabbar>

      <List>
        <ListItem
          title="Tabbar Labels"
          after={
            <Toggle
              checked={isTabbarLabels}
              onChange={() => setIsTabbarLabels(!isTabbarLabels)}
            />
          }
        />
      </List>

      {activeTab === 'tab-1' && (
        <Block strong className="space-y-4">
          <p>
            <b>Tab 1</b>
          </p>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              accusantium necessitatibus, nihil quas praesentium at quibusdam
              cupiditate possimus et repudiandae dolorum delectus quo, similique
              voluptatem magni explicabo adipisci magnam ratione!
            </span>
            <span>
              Quod praesentium consequatur autem veritatis, magni alias
              consectetur ut quo, voluptatum earum in repellat! Id, autem! Minus
              suscipit, ad possimus non voluptatem aliquam praesentium earum
              corrupti optio velit tenetur numquam?
            </span>
            <span>
              Illo id ipsa natus quidem dignissimos odio dolore veniam,
              accusamus vel assumenda nulla aliquam amet distinctio! Debitis
              deserunt, et, cum voluptate similique culpa assumenda inventore,
              facilis eveniet iure optio velit.
            </span>
            <span>
              Maiores minus laborum placeat harum impedit, saepe veniam iusto
              voluptates delectus omnis consectetur tenetur ex ipsa error
              debitis aspernatur amet et alias! Sit odit cum voluptas quae? Est,
              omnis eos?
            </span>
          </p>
        </Block>
      )}
      {activeTab === 'tab-2' && (
        <Block strong className="space-y-4">
          <p>
            <b>Tab 2</b>
          </p>
          <p>
            <span>
              Dicta beatae repudiandae ab pariatur mollitia praesentium fuga
              ipsum adipisci, quia nam expedita, est dolore eveniet, dolorum
              obcaecati? Veniam repellendus mollitia sapiente minus saepe
              voluptatibus necessitatibus laboriosam incidunt nihil autem.
            </span>
            <span>
              Officia pariatur qui, deleniti eum, et minus nisi aliquam nobis
              hic provident quisquam quidem voluptatem eveniet ducimus. Commodi
              ea dolorem, impedit eaque dolor, sint blanditiis magni accusantium
              natus reprehenderit minima?
            </span>
            <span>
              Dicta reiciendis ut vitae laborum aut repellendus quasi beatae
              nulla sapiente et. Quod distinctio velit, modi ipsam
              exercitationem iste quia eaque blanditiis neque rerum optio, nulla
              tenetur pariatur ex officiis.
            </span>
            <span>
              Consectetur accusamus delectus sit voluptatem at esse! Aperiam
              unde maxime est nemo dicta minus autem esse nobis quibusdam iusto,
              reprehenderit harum, perferendis quae. Ipsum sit fugit similique
              recusandae quas inventore?
            </span>
          </p>
        </Block>
      )}
      {activeTab === 'tab-3' && (
        <Block strong className="space-y-4">
          <p>
            <b>Tab 3</b>
          </p>
          <p>
            <span>
              Vero esse ab natus neque commodi aut quidem nobis. Unde, quam
              asperiores. A labore quod commodi autem explicabo distinctio saepe
              ex amet iste recusandae porro consectetur, sed dolorum sapiente
              voluptatibus?
            </span>
            <span>
              Commodi ipsum, voluptatem obcaecati voluptatibus illum hic aliquam
              veritatis modi natus unde, assumenda expedita, esse eum fugit?
              Saepe aliquam ipsam illum nihil facilis, laborum quia, eius ea
              dolores molestias dicta.
            </span>
            <span>
              Consequatur quam laudantium, magnam facere ducimus tempora
              temporibus omnis cupiditate obcaecati tempore? Odit qui a,
              voluptas eveniet similique, doloribus eum dolorum ad, enim ea
              itaque voluptates porro minima. Omnis, magnam.
            </span>
            <span>
              Debitis, delectus! Eligendi excepturi rem veritatis, ad
              exercitationem tempore eveniet voluptates aut labore harum dolorem
              nemo repellendus accusantium quibusdam neque? Itaque iusto
              quisquam reprehenderit aperiam maiores dicta iure necessitatibus
              est.
            </span>
          </p>
        </Block>
      )}
    </Page>
  );
}
TabbarPage.displayName = 'TabbarPage';
