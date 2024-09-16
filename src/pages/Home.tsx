import FollowUsOnInstagram from "../components/FollowUsOnInstagram/FollowUsOnInstagram";
import FreshOutfits from "../components/FreshOutfits/FreshOutfits";
import Hero from "../components/Hero/Hero";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Pakery from "../components/Pakery/Pakery";
import ProductsCategories from "../components/ProductsCategories/ProductsCategories";
import SaleBanner from "../components/SaleBanner/SaleBanner";
import Shipping from "../components/Shipping/Shipping";
import TrendyItems from "../components/TrendyItems/TrendyItems";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Pakery/>
      <Shipping/>
      <NewArrivals/>
      <SaleBanner />
      <TrendyItems/>
      <FreshOutfits/>
      <ProductsCategories/>
      <FollowUsOnInstagram/>
    </div>
  )
}
