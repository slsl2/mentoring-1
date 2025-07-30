import "../styles/ErrorModal.css";
interface ErrorModalProps {
  onClose: () => void; // 모달 닫기 동작
}

function ErrorModal({ onClose }: ErrorModalProps) {
  return (
    <div className="error-backdrop">
      <div className="error-modal">
        <div className="error-top">
          <span>Something went wrong</span>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="error-bottom">
          <button className="ok-btn" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
