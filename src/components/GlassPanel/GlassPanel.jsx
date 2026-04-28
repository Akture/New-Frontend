import './GlassPanel.css';

export default function GlassPanel({ className = '', style = {}, children, ...props }) {
  return (
    <div
      className={`glass-panel-base ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}