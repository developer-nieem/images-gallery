import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


export function SortableItem({ src, selected, onToggle, item }) {
 
 
    const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };


  const handleCheckboxClick = (event) => {
    // Prevent the drag-and-drop library from intercepting the click event
    event.stopPropagation();

    // Handle the checkbox click
    onToggle();
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} >
      <div className="gallery-item m-3" onClick={handleCheckboxClick} >
        <img src={src} alt="Gallery Item" className="img-fluid img-item" />
        <input
          type="checkbox"
          className={`select-checkbox ${selected ? "select-block" : ""}`}
          checked={selected}
        />
      </div>
    </div>
  );
}
