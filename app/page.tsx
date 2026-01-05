import About from "@/component/Adda_Inn";
import AddaServices from "@/component/AddaServices";
import Banner from "@/component/Banner";
import BestPlaces from "@/component/BestPlaces";
import BestRooms from "@/component/BestRooms";
import GuestTestimonials from "@/component/GuestTestimonials";
import LuxuryExperience from "@/component/LuxuryExperience";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <BestRooms />
      <AddaServices />
      <LuxuryExperience />
      <GuestTestimonials />
      <BestPlaces />
    </>
  );
}
