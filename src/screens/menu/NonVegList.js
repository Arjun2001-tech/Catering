import React from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';
import data from './MenuImg.json';
// import styles from './Menu.module.less';

function NonVegList() {
  // const { t } = props;

  return (
    <div>
      {/* <h1>{t('NonVegList')}</h1> */}
      <div>
        {(data.non_vegetarian.map((ele, i) => (
          <div id={i}>
            <div>
              <Image src={ele.img} alt={ele.title} size="" />
            </div>
            {/* <h1>{ele.title}</h1>
            <p>{ele.content}</p> */}
          </div>
        )))}
      </div>
    </div>
  );
}

export default withTranslation('common')(NonVegList);
