import React from 'react';

export default function Banner() {
  return (
    <section className="h-96 relative bg-gray-600 rounded-lg">
      <div className="w-full h-full bg-cover bg-banner bg-center opacity-80 rounded-lg" />
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl font-jalnan">HMX WORLD</h2>
        <p className="text-2xl font-jalnan">
          HMX를 사랑하시는 여러분을 위한 스토어입니다!
        </p>
      </div>
    </section>
  );
}
