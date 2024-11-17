import TextIntro from "../utils/text";
import CanvasIntro from "../utils/canvas";
import Divider from "../utils/divider";
import AboutSection from '../utils/aboutSection';
import AwardsSection from '../utils/premii';
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <>
      <TextIntro customStyle={{ marginBottom: '-25vh' }}/>
      <Spline scene="https://prod.spline.design/7WrLJQCGAUSYehDT/scene.splinecode" />
      <Divider/>
      <AboutSection/>
      <Divider />
      <AwardsSection/>
    </>
  );
}

export default Home;
