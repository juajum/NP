import './Services.scss';
import icon from '../../assets/img/external_link.svg';
import iconWhite from '../../assets/img/external_link_white.svg';

export const Services = () => {
  return (
    <div className='services'>
      <div className='container'>
        <div className='services__container services-grid'>
          <div className='services__card services-grid__1'>
            <h3 className='services__subtitle'>Services</h3>
            <img src={icon} alt='' className='services__icon' />
            <h1 className='services__title'>Estimate cost</h1>
            <div className='services__img-1'></div>
          </div>

          <div className='services__card services-grid__2'>
            <h3 className='services__subtitle'>Services</h3>

            <img src={icon} alt='' className='services__icon' />

            <h1 className='services__title'>Our tariffs</h1>
            <div className='services__img-2'></div>
          </div>

          <div className='services-clients services-grid__3'>
            <h3 className='services-clients__subtitle'>Services</h3>

            <img src={iconWhite} alt='' className='services-clients__icon' />

            <h1 className='services-clients__title'>For clients</h1>
            <div className='services-clients__text'>
              Qualitatively, quickly and at a convenient time for you will
              deliver your parcel to any part of the country.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
