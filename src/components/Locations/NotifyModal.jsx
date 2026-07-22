import { useState } from 'react';
import Modal from './Modal';

export default function NotifyModal({ isOpen, onClose, location }) {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setSuccess(false);
    setEmail('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h3 className="text-xl font-black text-onyx dark:text-white mb-2">Get Notified</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        We'll let you know when {location?.name} goes live.
      </p>

      {success ? (
        <div className="text-center py-6">
          <p className="text-emerald font-bold">You're on the list!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember/30"
          />
          <button
            type="submit"
            className="w-full bg-gradient-ember text-white font-bold py-3 rounded-xl transition-all"
          >
            Notify Me
          </button>
        </form>
      )}
    </Modal>
  );
}
