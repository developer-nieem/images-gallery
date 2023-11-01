import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


export function SortableItem({ src, selected, onToggle, item }) {
    
 
    const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDivClick = () => {
    onToggle();


    console.log('click worked');
  };

 

  return (
    <div   >
      <div className="gallery-item m-3"  ref={setNodeRef} style={style} {...attributes} {...listeners} >
        <img src={src} alt="Gallery Item" className="img-fluid img-item" />
        <input
          type="checkbox"
          className={`select-checkbox ${selected ? "select-block" : ""}`}
          checked={selected}
          onChange={onToggle}
        />
      </div>
    </div>
  );
}
