import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import WokwiCat from '/static/img/wokwi-cat.svg';

export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              404 :(
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The 1st paragraph of the 404 page">
              Sorry, the page doesn't exist or has moved.
            </Translate>
            &nbsp;
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page"
              values={{
                homepage: (
                  <Link to="/">
                    <Translate
                      id="theme.NotFound.homepageLink"
                      description="Label for the link to the homepage">
                      homepage
                    </Translate>
                  </Link>
                )
              }}>
              Let's go back to the homepage.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p3"
              description="A paragraph describing what Wokwi offers"
              values={{
                Arduino: <Link to="https://wokwi.com/arduino">Arduino</Link>,
                ESP32: <Link to="https://wokwi.com/esp32">ESP32</Link>,
                STM32: <Link to="https://wokwi.com/stm32">STM32</Link>,
                Pico: <Link to="https://wokwi.com/pi-pico">Pico</Link>,
                wokwiWebsite: <Link to="https://wokwi.com">wokwi.com</Link>
              }}>
            </Translate>
          </p>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <WokwiCat style={{fill: 'currentColor'}}/>
          </div>

        </div>
      </div>
    </main>
  );
}
