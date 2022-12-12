export const AirbnbListing = ({ id, title }) => {
  return (
    <div
      className='airbnb-embed-frame'
      data-id={id}
      data-view='home'
      style={{ width: '450px', height: '200px', margin: 'auto' }}
    >
      <p>
        <a
          href={`https://www.airbnb.com/rooms/${id}?check_in=2023-05-10&amp;check_out=2023-05-13&amp;guests=1&amp;adults=2&amp;s=66&amp;source=embed_widget`}
        >
          View On Airbnb
        </a>
      </p>
      <p>
        <a
          href={`https://www.airbnb.com/rooms/${id}?check_in=2023-05-10&amp;check_out=2023-05-13&amp;guests=1&amp;adults=2&amp;s=66&amp;source=embed_widget`}
          rel='nofollow'
        >
          {title}
        </a>
      </p>
    </div>
  );
};
