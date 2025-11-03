function MapTempat({ latitude, longitude }) {
  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&hl=id&z=15&output=embed`;

  return (
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
}

export default MapTempat;
