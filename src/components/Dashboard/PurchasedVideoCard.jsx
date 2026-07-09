import { useDispatch, useSelector } from 'react-redux';
import { downloadVideo } from '../../store/videoSlice';
import { getVideoThumbnail, getVideoTitle, formatDuration, formatDateTime } from '../../utils/videoUtils';

export default function PurchasedVideoCard({ video }) {
  const dispatch = useDispatch();
  const downloadProgress = useSelector((state) => state.video.downloadProgress[video.id]);
  const downloadStatus = useSelector((state) => state.video.downloadStatus[video.id]);

  const thumbnail = getVideoThumbnail(video);
  const title = getVideoTitle(video);
  const isDownloading = downloadStatus === 'loading';
  const isComplete = downloadStatus === 'success';
  const isFailed = downloadStatus === 'failed';

  const handleDownload = (e) => {
    e.stopPropagation();
    if (!isDownloading) dispatch(downloadVideo(video.id));
  };

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <i className="ph ph-video text-4xl text-gray-400 dark:text-gray-600"></i>
          </div>
        )}

        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded">
            {formatDuration(video.duration)}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-ember transition-colors">
          {title}
        </h3>

        {video.startTime && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            {formatDateTime(video.startTime)}
          </p>
        )}

        <div className="mt-auto">
          {isDownloading && (
            <div className="mb-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-ember h-1.5 rounded-full transition-all"
                  style={{ width: `${downloadProgress ?? 0}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                {downloadProgress ?? 0}%
              </p>
            </div>
          )}

          {isComplete && (
            <p className="text-xs text-emerald font-bold mb-2 flex items-center gap-1">
              <i className="ph-bold ph-check-circle"></i> Downloaded
            </p>
          )}

          {isFailed && (
            <p className="text-xs text-ember font-bold mb-2 flex items-center gap-1">
              <i className="ph-bold ph-warning"></i> Download failed
            </p>
          )}

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-onyx dark:text-white font-bold py-2 rounded-xl hover:bg-onyx hover:text-white hover:border-onyx dark:hover:bg-white dark:hover:text-onyx transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <><span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" /> Downloading…</>
            ) : (
              <><i className="ph-bold ph-download-simple"></i> Download</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
