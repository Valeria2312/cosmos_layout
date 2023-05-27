import React from 'react';
import styles from './App.module.scss'
import {Logo} from './components/Logo/Logo';
import {SocialNetworks} from './components/SocialNatworks/SocialNetworks'
import {Title} from './components/Title/title'
import {Button} from './components/Button/button'
import {Navigation} from './components/Navigation/navigation'

function App() {
  return (
    <div className={styles.App}>
      <section className={`${styles.section} ${styles.sectionMain}` }>
          <header className={`${styles.header}`}>
              <Logo/>
              <SocialNetworks/>
              <Button onClick={() => {}}>Whitepaper</Button>
          </header>
          <Navigation/>
          <div>
              <Title size="medium">From dust TO&nbsp;dawn</Title>
              <ul className={styles.buttonList}>
                  <li>
                      <Button onClick={() => {}}>Mint</Button>
                  </li>
                  <li>
                      <Button onClick={() => {}}>Connect Wallet</Button>
                  </li>
              </ul>
          </div>
      </section>
    </div>
  );
}

export default App;
