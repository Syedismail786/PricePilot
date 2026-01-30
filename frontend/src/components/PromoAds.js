import { useEffect, useState } from "react";

const videoAds = [
  {
    brand: "APPLE",
    product: "iPhone 17 Pro Max",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    link: "https://www.amazon.in"
  },
  {
    brand: "SAMSUNG",
    product: "Galaxy S25 Ultra",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    link: "https://www.flipkart.com"
  },
  {
    brand: "SONY",
    product: "Bravia 4K OLED TV",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    link: "https://www.amazon.in"
  }
];

export default function PromoAds() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % videoAds.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const ad = videoAds[index];

  return (
    <div className="max-w-2xl mx-auto mb-20">

      <div
        onClick={() => window.open(ad.link, "_blank")}
        className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
      >
        <video
          key={ad.video}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-[320px] object-cover"
        >
          <source src={ad.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm tracking-widest opacity-80">
            {ad.brand}
          </p>
          <h2 className="text-3xl font-bold">
            {ad.product}
          </h2>
          <p className="text-lg">
            Limited Time Offer
          </p>
        </div>
      </div>
    </div>
  );
}
