import React, { useState, useRef } from 'react';
import { Camera, ArrowLeft, ArrowRight, X, Upload, ImagePlus } from 'lucide-react';
import './GallerySection.css';

const INITIAL_PHOTOS = [];

const ITEMS_PER_PAGE = 6;

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos, setPhotos] = useState(INITIAL_PHOTOS);
  const [currentPage, setCurrentPage] = useState(1);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newUrls = files.map((file) => URL.createObjectURL(file));
      setPhotos((prev) => [...newUrls, ...prev]);
      setCurrentPage(1); // Jump to first page to see newly added photo
      setIsModalOpen(false);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const totalPages = Math.max(1, Math.ceil(photos.length / ITEMS_PER_PAGE));
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentPhotos = photos.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      {/* Hidden native file input for real photo upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*,video/*"
        multiple
        style={{ display: 'none' }}
      />

      <div className="gallery-section__content">
        <h2 className="gallery-section__title">Gallery</h2>

        <button 
          className="gallery-section__upload-btn" 
          onClick={() => setIsModalOpen(true)}
        >
          <Upload size={20} strokeWidth={2} />
          Upload Photo
        </button>

        {/* Gallery Grid */}
        {currentPhotos.length > 0 ? (
          <div className="gallery-grid">
            {currentPhotos.map((src, index) => (
              <div key={index} className="gallery-card">
                <img src={src} alt={`Gallery item ${indexOfFirstItem + index + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <ImagePlus size={48} strokeWidth={1.2} />
            <p>No photos yet</p>
            <span>Upload your favorite moments to share with everyone!</span>
          </div>
        )}

        {/* Working Pagination */}
        <div className="gallery-section__pagination">
          <button 
            className="gallery-section__page-btn" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            <ArrowLeft size={16} />
          </button>
          <span className="gallery-section__page-text">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            className="gallery-section__page-btn" 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
            style={{ opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Upload Photo Modal */}
      {isModalOpen && (
        <div className="gallery-modal-overlay">
          <div className="gallery-modal">
            <button className="gallery-modal__close" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            <p className="gallery-modal__text">
              Let's Celebrate the joy with little one! ❤️<br/>
              Please share your photos or videos with us.
            </p>
            <button 
              className="gallery-modal__action-btn"
              onClick={triggerFileInput}
            >
              <Camera size={20} />
              <span>Select Photos</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
