import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul >
        <input type="email" />
        <button type="button">JOIN US</button>
      </ul>
      <ul >
        <button className="buttonyoutube">  <a href="https://www.youtube.com/channel/UCsYg_Sejxwi0nXe2ztzCXlw/about" className={`icon fa-youtube`} />  Youtube</button>
        <button className="buttonspotify">   <a href="https://open.spotify.com/album/63nWC6Q3IC0IKRvI6DH2Lw" className={`icon fa-spotify`} />  Follow</button>
      </ul>
      <ul className="copyright">
        <li>&copy; 2019 Dream Nation |</li>
        <li> All Rights Reserved. |</li>
        <li> Send us Feedback |</li>
        <li> Privacy Policy |</li>
        <li> Terms and Conditions |</li>
        <li>
          Built by
          <a href="https://www.finesoftafrika.com"> Finesoft Afrika</a>  {' '}

        </li>
      </ul>
    </footer>
  );
}
