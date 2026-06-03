import FeatureItem from './FeatureItem';
import LogoIcon from '../LogoIcon/LogoIcon';

export default function AuthLeftPanel() {
  return (
    <div className="hidden lg:flex w-[40%] bg-[#060A14] flex-col justify-between p-12 relative overflow-hidden">
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: 'rgba(189,32,38,0.05)' }}
      ></div>

      <div className="relative z-10">
        <div className="w-36 h-10">
          <LogoIcon />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center mb-20">
        <p className="text-gradient-ember text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
          Action Capture System
        </p>

        <h1 className="text-white text-5xl xl:text-[56px] font-black leading-[1.05] tracking-tight mb-2">
          ALL YOUR MOMENTS,
          <br />
          <span className="text-gradient-ember">PERFECTLY</span>
          <br />
          <span className="text-gradient-ember">PRESERVED</span>
        </h1>

        <p className="text-gray-400 text-lg mt-6 mb-12 max-w-md">
          Your best sports memories, at your fingertips.
        </p>

        <div className="flex flex-col gap-6">
          <FeatureItem
            iconClass="ph-fill ph-video-camera"
            iconColor="#ef4444"
            text="Play at an Akture-equipped court"
          />
          <FeatureItem
            iconClass="ph-fill ph-qr-code"
            iconColor="#f97316"
            text="Scan the QR code after your game"
          />
          <FeatureItem
            iconClass="ph-fill ph-download-simple"
            iconColor="#22c55e"
            text="Purchase, download & share in HD"
          />
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-gray-500 text-sm">
          Trusted by athletes across Texas — expanding nationwide.
        </p>
      </div>
    </div>
  );
}