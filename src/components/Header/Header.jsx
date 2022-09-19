import './Header.scss';
import searchicon from '../../assets/img/search.svg';
import { Cookie } from '../Cookie/Cookie';

export const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__box'>
          <div className='header__content'>
            <h1 className='header__title'>
              The fast, affordable way to send parcels and cargoes
            </h1>
            <p className='header__subtitle'>
              Send a shipment from one of thousands of Parcel Lockers or have a
              courier pick it up
            </p>

            <form className='form' action='#' method='get'>
              <div className='form__container'>
                <div className='form__icon'>
                  <img src={searchicon} alt='' />
                </div>
                <input
                  name='username'
                  type='text'
                  placeholder='Enter parcel number for tracking'
                  className='form__field'
                  required
                ></input>
              </div>
              <button type='submit' className='form__button'>
                Track parcel
              </button>
            </form>
          </div>
        </div>
        <div className='header__cookie'>
          <Cookie />
        </div>
      </div>
    </div>
  );
};
