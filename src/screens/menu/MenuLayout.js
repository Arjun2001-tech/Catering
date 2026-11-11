import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import VegList from './VegList';
import NonVegList from './NonVegList';
import styles from './Menu.module.less';

const MenuLayout = (props) => {
  const { t } = props;
  const menuTabs = ['vegetarian', 'non_vegetarian'];
  const [activeTab, setActiveTab] = useState(menuTabs[0]);

  let Component = null;

  const compobj = {
    vegetarian: VegList,
    non_vegetarian: NonVegList,
  };
  Component = compobj[activeTab];

  return (
    <div className={styles.menu_layout}>
      <h1>Our Menu</h1>
      <p>
        At Savory Spoon Catering, we understand that each customer
        and their requirements are different and unique.
        We are flexible when it comes to the menu. In any function,
        there would be some guests who are vegetarians.
        We take care of your Vegetarian catering needs as well.
        We offer a wide range of both Non-vegetarian and Vegetarian menu options to suit
        the venue, budget, size and style of celebration.
      </p>
      <div>
        {(menuTabs.map((tab, i) => (
          <div
            className={menuTabs[i] === activeTab ? styles.Batch : ''}
            onClick={() => setActiveTab(tab)}
            role="button"
            tabIndex={i + 1}
            onKeyDown={null}
            key={tab}
          >
            {t(tab)}
            {menuTabs[i] === activeTab && <div />}
          </div>
        )))}
      </div>
      {
        Component && (
          <Component />
        )
      }
    </div>
  );
};

export default withTranslation('common')(MenuLayout);
