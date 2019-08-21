import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <input type="email" />
        <button type="button">JOIN US</button>
      </ul>
      <ul className="copyright">
        <button type="button">Youtube</button>
        <button type="button">Follow</button>
      </ul>
      <ul className="copyright">
        <li>&copy; 2019 Dream Nation |</li>
        <li> All Rights Reserved. |</li>
        <li> Send us Feedback |</li>
        <li> Privacy Policy |</li>
        <li> Terms and Conditions |</li>
        <li>
          Built by
          <a href="https://www.finesoftafrika.com">Finesoft Afrika</a>  {' '}

        </li>
      </ul>
    </footer>
  );
}
