const GalleryItem = ({ src, selected, onToggle }) => {
  return (
    <div>
      <img src={src} alt="Gallery Item" />
      <input
        type="checkbox"
        className="select-checkbox"
        checked={selected}
        onChange={onToggle}
      />
    </div>
  );
};

export default GalleryItem;
