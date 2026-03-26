import {Navbar} from "@/app/navbar/components/Navbar"
import { Hero } from "./hero/components/Hero";
import { ModelsGrid } from "./fashion_model/components/Models_Grid";
import { OutStandingSection } from "./outstanding/components/Images_Section";
import { ProductSection } from "./catalog/components/Product_Section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ModelsGrid />
      <OutStandingSection />
      <ProductSection />
    </main>
  );
}
