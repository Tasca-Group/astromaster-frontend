"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StyleSelector from "./StyleSelector";
import PackageSelector from "./PackageSelector";
import FamilyMembers, { type FamilyMember } from "./FamilyMembers";
import FeatureComparison from "./FeatureComparison";
import AnimateOnScroll from "./AnimateOnScroll";
import { PRICES } from "@/lib/constants";

function getDiscount(totalPersons: number): number {
  if (totalPersons >= 3) return 0.15;
  if (totalPersons === 2) return 0.10;
  return 0;
}

interface Props {
  prefillGeburtsdatum?: string;
}

export default function OrderFlow({ prefillGeburtsdatum }: Props) {
  const router = useRouter();
  const [design, setDesign] = useState<"dark" | "light">("dark");
  const [paket, setPaket] = useState<"normal" | "pro">("pro");
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);

  const totalPersons = 1 + familyMembers.length;
  const basePrice = PRICES[paket];
  const discount = getDiscount(totalPersons);
  const originalTotal = basePrice * totalPersons;
  const discountedTotal = Math.round(originalTotal * (1 - discount));
  const savings = originalTotal - discountedTotal;

  function handleCheckout() {
    const orderData = {
      design,
      paket,
      familyMembers,
      prefillGeburtsdatum,
    };
    sessionStorage.setItem("astro-order", JSON.stringify(orderData));
    router.push("/checkout-test");
  }

  return (
    <div className="space-y-16">
      {/* 1. Design Selection */}
      <AnimateOnScroll>
        <StyleSelector selected={design} onSelect={setDesign} />
      </AnimateOnScroll>

      {/* 2. Package Selection */}
      <AnimateOnScroll>
        <PackageSelector selected={paket} onSelect={setPaket} />
      </AnimateOnScroll>

      {/* 3. Family Feature */}
      <AnimateOnScroll>
        <FamilyMembers
          members={familyMembers}
          onChange={setFamilyMembers}
          maxTotal={5}
        />
      </AnimateOnScroll>

      {/* 4. Feature Comparison */}
      <AnimateOnScroll>
        <FeatureComparison />
      </AnimateOnScroll>

      {/* 5. Pricing Summary + CTA */}
      <AnimateOnScroll>
        <div className="max-w-md mx-auto">
          <div className="p-6 rounded-2xl bg-card border border-border mb-6 text-center">
            <p className="text-sm text-muted mb-2">
              {totalPersons}&times; {paket === "pro" ? "Pro" : "Standard"}-Analyse
              {discount > 0 && (
                <span className="ml-2 text-gold">
                  {Math.round(discount * 100)}% Familienrabatt
                </span>
              )}
            </p>
            <div className="flex items-center justify-center gap-3">
              {discount > 0 && (
                <span className="text-2xl text-muted line-through">
                  {originalTotal}&euro;
                </span>
              )}
              <span className="text-3xl font-bold text-gold">
                {discountedTotal}&euro;
              </span>
            </div>
            {savings > 0 && (
              <p className="text-sm text-gold mt-2">
                Du sparst {savings}&euro;
              </p>
            )}
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-gold hover:bg-gold-hover text-bg font-semibold text-lg rounded-xl transition-colors"
          >
            Jetzt kaufen
          </button>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
