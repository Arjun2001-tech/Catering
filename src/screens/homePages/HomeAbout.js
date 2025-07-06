import React from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';
// import logo from '../../../public/catering-logo.png';
import logo from '../../assets/images/Aloft-Biryani-Festival-54-597x336x56x0x485x336x1610018850.png';
import styles from './HomePage.module.less';
// import './Header.css'

function HomeAbout() {
  return (
    <div className={styles.home_about}>
      <h1>Our Story</h1>
      <div>
        <Image src={logo} alt="no" />
        <p>
          Savory Spoon Catering is one of the most trusted names and among
          the Best Wedding Catering Services in Chennai,
          We serve sumptuous food to fulfill your each and every catering need.
          From catering for your dream wedding to serving for your special occasions,
          we can customize the entire food experience for you and your guests.
          It’s our privilege to provide an unforgettable experience to your taste buds,
          and an excellent service.
          Savory Spoon Catering services have all the expertise to make your function
          a grand success and a memorable one!
        </p>
      </div>
      <div>
        <div>
          <p className="counter">31</p>
          <h1>No of Years</h1>
        </div>

        <div>
          <p className="counter">250+</p>
          <h1>Team Members</h1>
        </div>

        <div>
          <p className="counter">2,500+</p>
          <h1>No of Events</h1>
        </div>

        <div>
          <p className="counter">100,000+</p>
          <h1>Satisfied Guests</h1>
        </div>
      </div>

    </div>
  );
}

export default withTranslation('common')(HomeAbout);
