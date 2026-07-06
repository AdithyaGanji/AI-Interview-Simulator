import { useRef, useState } from 'react';
import { formatFileSize } from '../../../../lib/utils';
import { useConfigStore } from '../../../../store/useConfigStore';
import toast from "react-hot-toast";

export default function ResumeUpload() {
  const { selectedFile, setSelectedFile } = useConfigStore();
  const [isDragging, setIsDragging] = useState();
  const fileUploadInput = useRef();

  function validateFile(file) {
    if (!file)
      return false;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file.");
      return false;
    }

    if (file.size > 1_048_576) {
      toast.error("File size cannot exceed 1 MB.");
      return false;
    }

    return true;
  }

  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!validateFile(file))
      return;
    
    toast.success("File uploaded successfully.");
    setSelectedFile(file);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (!validateFile(file))
      return;
    
    toast.success("File uploaded successfully.");
    setSelectedFile(file);
  }

  return (
    <>
      <div className="setup-header-wrapper">
        <div className="setup-icon-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="setup-title-icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        </div>
        <div className="setup-title-group">
          <h2 className="setup-title">Upload Resume</h2>
          <p className="setup-subtitle">Please upload your resume in PDF format.</p>
        </div>
      </div>
      
      <div 
        className={`upload-dropzone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <svg viewBox="0 0 24 24" fill="none" className="upload-icon" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M12 18v-6" />
          <path d="M9 15l3-3 3 3" />
        </svg>

        <input 
          type="file"
          accept=".pdf"
          hidden={true}
          ref={fileUploadInput}
          onChange={handleFileUpload}
        />
        
        <p className="upload-text">Drag & drop your resume here</p>
        <span className="upload-or">or</span>
        <button 
          className="upload-btn"
          type="button"
          onClick={() => { fileUploadInput.current.click() }}
        >Choose File</button>
      </div>

      <p className="upload-support">Supports PDF (Max. Size 1 MB)</p>

      {selectedFile && (
        <div className="file-upload-status">
          <div className="pdf-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pdf-page-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="pdf-badge">PDF</span>
          </div>
          
          <div className="file-upload-meta">
            <div className="file-upload-name">
              {selectedFile?.name}
            </div>
            <div className="file-upload-info">
              <span className="file-upload-size">
                {formatFileSize(selectedFile?.size)}
              </span>
            </div>
          </div>
          
          <button 
            className="file-remove-btn" 
            type="button" 
            onClick={(e) => {
              setSelectedFile(null);
              if (fileUploadInput.current) {
                fileUploadInput.current.value = "";
              }
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="close-icon">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
