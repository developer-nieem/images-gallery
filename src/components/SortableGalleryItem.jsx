import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


export function SortableItem({ src, selected, onClick, item }) {
    
 
    const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };



  return (
    <div  onMouseDown={onClick}>
      <div className= {`gallery-item m-3 ${selected ? "select-gallery-item" : ""}` }  ref={setNodeRef} style={style} {...attributes} {...listeners} >
        <img src={src} alt="Gallery Item" className="img-fluid img-item" />
        <input
          type="checkbox"
          className={`select-checkbox ${selected ? "select-block select-gallery-item" : ""}`}
          checked={selected}
        />
      </div>
    </div>
  );
}
