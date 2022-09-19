import './Business.scss';

export const Business = () => {
  return (
    <div className='business'>
      <div className='container'>
        <div className='business__container'>
          <h1 className='business__title'>For Business</h1>

          <p className='business__subtitle'>
            We believe that most trips in the city don’t require the use of a
            personal car.
          </p>

          <button type='submit' className='business__button'>
            Discover solutions
          </button>
        </div>
      </div>
    </div>
  );
};
