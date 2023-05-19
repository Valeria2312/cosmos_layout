import React from 'react';
import styles from './App.module.scss'
import {Logo} from './components/Logo/Logo';
import {SocialNetworks} from './components/SocialNatworks/SocialNetworks'

function App() {
  return (
    <div className={styles.App}>
      <section className={`${styles.section} ${styles.sectionMain}` }>
          <header>
              <Logo/>
              <SocialNetworks/>
              <button onClick={() => {}}>Whitepaper</button>
          </header>
          {/*<Navigation/>*/}
          {/*<div>*/}
          {/*    <Title type="h2">FROM DUSK TO DAWN</Title>*/}
          {/*</div>*/}
          {/*<ul>*/}
          {/*    <li>*/}
          {/*        <Button onClick={() => {}}>Mint</Button>*/}
          {/*        <Button onClick={() => {}}>Connect Wallet</Button>*/}

          {/*    </li>*/}
          {/*    <li></li>*/}
          {/*</ul>*/}
      </section>
    </div>
  );
}

export default App;
