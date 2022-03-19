import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import LatestVideos from "../components/LatestVideos";
import LearningPaths from "../components/LearningPaths";
import Newsletter from "../components/Newsletter";
import Steps from "../components/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      {/* bir şey gelecek */}
      <LatestArticles />
      <Steps />
      <LearningPaths />
      <LatestVideos />
      <FAQ />
      <Newsletter />
    </>
  );
}
