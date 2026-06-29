export default function ExploreVideoCard({ match, onAdd, addedToCart }) {
    return (
      <div className="bg-white dark:bg-surface rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.35)] border border-gray-200 dark:border-gray-800 hover:shadow-[0_0_20px_rgba(189,32,38,0.2)] transition-all duration-300 group flex flex-col">
        <div className="relative aspect-video bg-gray-200 dark:bg-gray-900 overflow-hidden">
          <div className={`absolute inset-0 ${match.gradientDir} ${match.gradient}`}></div>
  
          <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/40 transition-colors duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F172A] transform scale-90 group-hover:scale-100 transition-all shadow-md">
              <i className="ph-fill ph-play text-xl ml-1"></i>
            </div>
          </div>
  
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className="text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-sm"
              style={{ backgroundColor: match.qualityColor }}
            >
              {match.quality}
            </span>
  
            {match.hot && (
              <span className="bg-[#F59E0B] text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-sm flex items-center gap-1">
                <i className="ph-fill ph-fire"></i> Hot
              </span>
            )}
          </div>
  
          <div className="absolute bottom-3 right-3 bg-[#0F172A]/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <i className="ph-bold ph-clock"></i> {match.duration}
          </div>
        </div>
  
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-extrabold text-base text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-ember transition-colors line-clamp-2">
            {match.title}
          </h3>
  
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1.5">
            <i className="ph-bold ph-calendar-blank"></i> {match.time}
          </p>
  
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div className="text-xl font-black text-gray-900 dark:text-white">{match.price}</div>
  
            <button
              onClick={() => onAdd(match.id)}
              className={`${
                addedToCart
                  ? 'bg-ember text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-ember hover:text-white'
              } font-bold py-2 px-4 rounded-lg transition-colors text-xs uppercase tracking-wider flex items-center gap-1.5`}
            >
              <i className={`ph-bold ${addedToCart ? 'ph-check' : 'ph-shopping-cart-simple'} text-sm`}></i>
              {addedToCart ? 'Added' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    );
  }