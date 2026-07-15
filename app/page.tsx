import { Nav } from "@sections/nav";
import { Hero } from "@sections/hero";
import { TrustStrip } from "@sections/trust-strip";
import { Mission } from "@sections/mission";
import { OurStory } from "@sections/our-story";
import { Programs } from "@sections/programs";
import { Impact } from "@sections/impact";
import { Gallery } from "@sections/gallery";
import { Donate } from "@sections/donate";
import { GetInvolved } from "@sections/get-involved";
import { Contact } from "@sections/contact";
import { Footer } from "@sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Mission />
        <OurStory />
        <Programs />
        <Impact />
        <Gallery />
        <Donate />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
