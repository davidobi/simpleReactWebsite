import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper 
        title= "Your own website of NFT Tokens"
        description= "Buy, Store, collect NFTs, exchange and earn crypto. Join 25 million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper 
        title= "Smart User Interface Marketplace"
        description= "Experience a buttery UI of ProNef Marketplace. Smooth Constant colours of fluent UI"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper 
        title= "Deployment"
        description= "ProNef is built using Expo which runs on all users devices. you can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper 
        title= "Creative way to showcase the store"
        description= "The app contains two screens, the first screen shows all NFT's while the second shows details on individual NFT's"
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {' '} <span className="bold">David Obi</span> </p>
      </div>
    </>
  );
}

export default App;
