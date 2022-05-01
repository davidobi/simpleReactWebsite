import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

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
    </>
  );
}

export default App;
