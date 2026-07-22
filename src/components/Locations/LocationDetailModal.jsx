import Modal from './Modal';

export default function LocationDetailModal({ location, onClose }) {
  const handleGetDirections = () => {
    if (location?.mapUrl) {
      window.open(location.mapUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!location) return null;

  return (
    <Modal isOpen={!!location} onClose={onClose}>
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-gray-200 dark:border-gray-700">
          <i className="ph ph-building text-3xl text-gray-400 dark:text-gray-500"></i>
        </div>

        <h3 className="text-2xl font-black text-onyx dark:text-white mb-2">{location.name}</h3>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
              location.status === 'active' ? 'bg-emerald' : 'bg-sunset'
            }`}
          >
            {location.status === 'active' ? 'Akture Active' : 'Coming Soon'}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-1">{location.address}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{location.city}</p>

        <div className="flex items-center justify-center text-sm font-bold text-slate bg-slate/10 w-fit mx-auto px-4 py-2 rounded-lg mb-6">
          <i className="ph-bold ph-navigation-arrow mr-1.5"></i>
          {location.distance}
        </div>

        <button
          onClick={handleGetDirections}
          className="w-full bg-onyx dark:bg-white dark:text-onyx text-white font-bold py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
        >
          Get Directions
        </button>
      </div>
    </Modal>
  );
}
