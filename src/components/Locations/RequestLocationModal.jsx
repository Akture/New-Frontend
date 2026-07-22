import { useState } from 'react';
import Modal from './Modal';

export default function RequestLocationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', court: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setSuccess(false);
    setForm({ name: '', email: '', court: '', message: '' });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h3 className="text-xl font-black text-onyx dark:text-white mb-4">Request a Location</h3>

      {success ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="ph-bold ph-check-circle text-2xl text-emerald"></i>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Request submitted successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="req-name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              id="req-name"
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember/30"
            />
          </div>

          <div>
            <label htmlFor="req-email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="req-email"
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember/30"
            />
          </div>

          <div>
            <label htmlFor="req-court" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Court Name / Facility
            </label>
            <input
              id="req-court"
              required
              type="text"
              value={form.court}
              onChange={(e) => setForm({ ...form, court: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember/30"
            />
          </div>

          <div>
            <label htmlFor="req-message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="req-message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember/30"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-ember text-white font-bold py-3 rounded-xl transition-all"
          >
            Submit Request
          </button>
        </form>
      )}
    </Modal>
  );
}
