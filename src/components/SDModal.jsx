import { useEffect } from "react";

function SDModal({isOpen, onClose, recap}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  
  if(!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  }

  return (
    <div id="modal-backdrop" onClick={handleBackgroundClick} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-black">x</button>
        <h2 className="text-xl font-bold mb-4">Details</h2>
        <p className="overflow-y-auto" style={{ whiteSpace: "pre-line", maxHeight: "60vh" }}>{recap}</p>
      </div>
    </div>   
  )
}

export default SDModal;