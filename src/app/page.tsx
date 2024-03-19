import OfferSection from "./components/OfferSection/OfferSection";
import OtherOffers from "./components/OtherOffers/OtherOffers";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import OtherAdds from "./components/otherAdds/OtherAdds";
import RecommendedItems from "./components/recommendedItems/RecommendedItems";
import TodaysDeal from "./components/todaysDeal/TodaysDeal";

export default function Home() {
  return (
    <>
      <Category/>
      <Banner/>
      <TodaysDeal/>
      <RecommendedItems/>
      <OfferSection/>
      <OtherOffers/>
      <OtherAdds/>
    </>
  );
}
