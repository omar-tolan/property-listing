export default function MapView({ location }: { location: number[] }) {
  return (
    <div className="h-full">
      <iframe
        src={`https://www.google.com/maps?q=${location[0]},${location[1]}&hl=es;z=14&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0, height: "100%" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
