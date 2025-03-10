import React from "react";

export default function HomepageDivider({ children }: any) {
  return (
    <div className="bg-[#3d612c] h-24 w-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
