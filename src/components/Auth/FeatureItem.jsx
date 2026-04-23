export default function FeatureItem({ iconClass, iconColor, text }) {
    return (
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-[#141824] flex items-center justify-center shrink-0 border border-gray-800/50">
          <i className={`${iconClass} text-xl`} style={{ color: iconColor }}></i>
        </div>
        <span className="text-gray-300 font-medium text-[15px]">{text}</span>
      </div>
    );
  }