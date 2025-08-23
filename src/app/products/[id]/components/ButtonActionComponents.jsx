"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonActionComponents({ product }) {
  return (
    <div>
      <div className="space-y-3 pt-4">
        <Button
          onClick={() =>
            alert("Thankyou for clicking the feature will coming soon")
          }
          size="lg"
          className="w-full"
        >
          Add to Cart - ${product.price}
        </Button>
        <Button
          onClick={() =>
            alert("Thankyou for clicking the feature will coming soon")
          }
          variant="outline"
          size="lg"
          className="w-full"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
