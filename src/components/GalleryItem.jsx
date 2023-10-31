const GalleryItem = ({ src, selected, onToggle }) => {
  return (
   
    <div className="gallery-item m-3" onClick={onToggle}>
    <img src={src} alt="Gallery Item"  className="img-fluid img-item"/>
    <input
      type="checkbox"
      className= {`select-checkbox ${selected ? "select-block" : ""}`}
      checked={selected}
      
    />
  </div>
  );
};

export default GalleryItem;
