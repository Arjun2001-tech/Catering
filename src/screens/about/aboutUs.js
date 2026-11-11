import React from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';
import logo from '../../assets/images/story.png';
import styles from './aboutUs.module.less';

const AboutUs = (props) => {
  const { t } = props;

  return (
    <div className={styles.about_us}>
      <div>
        <Image src={logo} alt="no" />
      </div>
      <div>
        <h1>A few words about us</h1>
        <p>{t('Catering Services Chennai')}</p>
        <div>
          <p>
            Divine Caterers is well-established as one of the best catering services in Chennai,
            as we have been catering to the best in and around Chennai.
            We are a team of catering services led by a well-accomplished chef.
          </p>

          <p>
            Our creative culinary journey stemmed from the desire to provide our clients with
            a unique experience with a team of professionals following the latest trend
            with the best Catering services in Chennai.
            We believe in providing our clients with quality food for their utmost satisfaction.
          </p>

          <p>
            No matter what the cuisine is, we make sure that we maintain top
            catering services in Chennai with strict quality and hygiene standards.
            We provide specialized food and beverages in large quantities for events
            and occasions for your catering services in Chennai.
          </p>

        </div>
      </div>
    </div>
  );
};

export default withTranslation('common')(AboutUs);
