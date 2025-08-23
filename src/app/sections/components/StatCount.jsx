"use client";

import React from "react";
import CountUp from "react-countup";

export default function StatCount({ stats }) {
  return (
    <div>
      <CountUp
        start={0}
        end={stats}
        duration={2.75}
        className="text-3xl font-bold text-foreground"
      />
    </div>
  );
}
