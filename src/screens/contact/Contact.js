import React from 'react';
import { withTranslation } from 'react-i18next';
import { Icon } from 'semantic-ui-react';
import styles from './Contact.module.less';
import EnquireNow from './EnquireNow';

const Contact = (props) => {
  const { t } = props;

  return (
    <div className={styles.contact}>
      <div>
        <h1>Contact Information</h1>
        <p>{t('contact_information')}</p>
      </div>
      <EnquireNow />
      <div>
        <div>
          <div>
            <h1>Address</h1>
            <p>26, Perumal West Street, Tamil Nadu, India</p>
          </div>
          <div>
            <h1>Email Us</h1>
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </div>
          <div>
            <h1>Call Now</h1>
            <a href="tel:1234567890">1234567890</a>
          </div>
        </div>
        <div>
          <iframe
            title="location"
            width="470"
            height="287"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5810.815668190342!2d80.26584035597054!3d13.082100781871773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526600eba2c087%3A0x667ed14b3cb54484!2sChennai%20Park!5e0!3m2!1sen!2sus!4v1739516242965!5m2!1sen!2sus"
          />
        </div>
        <div>
          <Icon name="whatsapp" size="big" />
          <Icon name="instagram" size="big" />
          <Icon name="facebook f" size="big" />
        </div>
      </div>
    </div>
  );
};

export default withTranslation('common')(Contact);
