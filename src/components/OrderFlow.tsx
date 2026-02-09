"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StyleSelector from "./StyleSelector";
import PackageSelector from "./PackageSelector";
import FamilyMembers, { type FamilyMember } from "./FamilyMembers";
import FeatureComparison from "./FeatureComparison";
import PricePanel, { type PersonPricing } from "./PricePanel";
import AnimateOnScroll from "./AnimateOnScroll";
import { PRICES } from "@/lib/constants";

const PERSON_DISCOUNTS = [0, 0.10, 0.15, 0.20, 0.25];

export function getPersonDiscount(personIndex: number): number {
  return PERSON_DISCOUNTS[Math.min(personIndex, PERSON_DISCOUNTS.length - 1)];
}

export function calculatePricing(
  basePrice: number,
  familyMembers: FamilyMember[]
): {
  persons: PersonPricing[];
  totalOriginal: number;
  totalDiscounted: number;
  totalSavings: number;
} {
  const persons: PersonPricing[] = [];
  let totalOriginal = 0;
  let totalDiscounted = 0;

  // Person 1: Hauptperson
  const p1Price = basePrice;
  persons.push({ name: "Hauptperson", price: p1Price, discount: 0 });
  totalOriginal += basePrice;
  totalDiscounted += p1Price;

  // Person 2+: Family members
  familyMembers.forEach((member, i) => {
    const discount = getPersonDiscount(i + 1);
    const price = Math.round(basePrice * (1 - discount) * 100) / 100;
    persons.push({
      name: member.vorname || `Person ${i + 2}`,
      price,
      discount: Math.round(discount * 100),
    });
    totalOriginal += basePrice;
    totalDiscounted += price;
  });

  totalDiscounted = Math.round(totalDiscounted * 100) / 100;
  const totalSavings = Math.round((totalOriginal - totalDiscounted) * 100) / 100;

  return { persons, totalOriginal, totalDiscounted, totalSavings };
}

interface Props {
  prefillGeburtsdatum?: string;
  prefillGeburtszeit?: string;
  prefillGeburtsort?: string;
}

export default function OrderFlow({ prefillGeburtsdatum, prefillGeburtszeit, prefillGeburtsort }: Props) {
  const router = useRouter();
  const [design, setDesign] = useState<"dark" | "light">("dark");
  const [paket, setPaket] = useState<"normal" | "pro">("pro");
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);

  const basePrice = PRICES[paket];
  const pricing = calculatePricing(basePrice, familyMembers);

  function handleCheckout() {
    const orderData = {
      design,
      paket,
      familyMembers,
      prefillGeburtsdatum,
      prefillGeburtszeit,
      prefillGeburtsort,
    };
    sessionStorage.setItem("astro-order", JSON.stringify(orderData));
    router.push("/checkout");
  }

  return (
    <div>
      <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-8 lg:items-start">
        {/* Left: Configurator */}
        <div className="space-y-16 pb-32 lg:pb-0">
          <AnimateOnScroll>
            <StyleSelector selected={design} onSelect={setDesign} />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <PackageSelector selected={paket} onSelect={setPaket} />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <FamilyMembers
              members={familyMembers}
              onChange={setFamilyMembers}
              maxTotal={5}
              basePrice={basePrice}
            />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <FeatureComparison />
          </AnimateOnScroll>
        </div>

        {/* Right: Sticky Price Panel (desktop + mobile bottom bar) */}
        <PricePanel
          paket={paket}
          design={design}
          persons={pricing.persons}
          totalOriginal={pricing.totalOriginal}
          totalDiscounted={pricing.totalDiscounted}
          totalSavings={pricing.totalSavings}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}
