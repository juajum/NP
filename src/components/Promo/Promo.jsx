import './Promo.scss';
import phone from '../../assets/img/Phone.png';
import GooglePlay from '../../assets/img/GooglePlay.svg';
import AppStore from '../../assets/img/AppStore.svg';

export const Promo = () => {
  return (
    <div className='promo'>
      <div className='container'>
        <div className='promo__container'>
          <div className='promo__box'>
            <h1 className='promo__title'>Empowering a million entrepreneurs</h1>

            <p className='promo__subtitle'>
              We believe that most trips in the city don’t require the use of a
              personal car.
            </p>

            <div className='promo__links'>
              <div>
                <a
                  href='https://play.google.com/store/apps/details?id=ua.novaposhtaa&hl=ru&gl=US'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={GooglePlay} alt='' />
                </a>
              </div>

              <div>
                <a
                  href='https://apps.apple.com/us/app/%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BF%D0%BE%D1%88%D1%82%D0%B0/id545980774'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={AppStore} alt='' />
                </a>
              </div>
            </div>
          </div>
          <img className='promo__phone' src={phone} alt='' />
        </div>
      </div>
    </div>
  );
};
