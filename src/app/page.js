import QRCode from "qrcode";
import TabForm from "../components/TabForm";
import QRDisplay from "../components/QRDisplay";

export default async function Home({ searchParams }) {
  const { type = "url", value = "" } = searchParams;

  let qrImage = null;
  if (value) {
    qrImage = await QRCode.toDataURL(value, { width: 200 });
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left: Tabs + Input Form */}
        <div className="flex-1">
          <TabForm type={type} value={value} />
        </div>

        {/* Right: QR Code Display */}
        <div className="flex-1 flex items-center justify-center">
          <QRDisplay qrImage={qrImage} value={value} />
        </div>
      </div>
    </main>
  );
}
