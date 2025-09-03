export default function QRDisplay({ qrImage, value }) {
  if (!qrImage) {
    return (
      <div className="text-gray-500 text-center">
        Enter something to generate a QR code
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={qrImage}
        alt={`QR code for ${value}`}
        width={200}
        height={200}
        className="border rounded"
      />
      <a
        href={qrImage}
        download="qr-code.png"
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Download QR
      </a>
    </div>
  );
}
