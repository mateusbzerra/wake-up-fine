import { Header } from "@components/Header/Header";
import { WakeUpTimeList } from "@containers/WakeUpTimeList/WakeUpTimeList";
import React, { Suspense } from "react";

export default function WakeUpPage() {
  return (
    <div className="mx-6">
      <Header />
      <Suspense fallback="Loading...">
        <WakeUpTimeList />
      </Suspense>
    </div>
  );
}
