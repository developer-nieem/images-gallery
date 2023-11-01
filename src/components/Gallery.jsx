import React, { useState } from "react";
import { SortableItem } from "./SortableGalleryItem";

// Import dnd file
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";



const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, src: "image-1.webp", selected: false },
    { id: 2, src: "image-2.webp", selected: false },
    { id: 3, src: "image-3.webp", selected: false },
    { id: 4, src: "image-4.webp", selected: false },
    { id: 5, src: "image-5.webp", selected: false },
    { id: 6, src: "image-6.webp", selected: false },
    { id: 7, src: "image-7.webp", selected: false },
    { id: 8, src: "image-8.webp", selected: false },
    { id: 9, src: "image-9.webp", selected: false },
    { id: 10, src: "image-10.jpeg", selected: false },
    { id: 11, src: "image-11.jpeg", selected: false },
  ]);

  // For Checkbox
  const [selectedItems, setSelectedItems] = useState(new Set());


  
  // Function to handle checkbox changes
  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
    
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = new Set(prevSelectedItems);
      if (updatedSelectedItems.has(itemId)) {
        updatedSelectedItems.delete(itemId);
      } else {
        updatedSelectedItems.add(itemId);
      }
      return updatedSelectedItems;
    });
  };




  // For delete image function 

  const handleDeleteSelected = () => {
    setItems((prevItems) => prevItems.filter((item) => !item.selected));
  };


  // Set how many items select 
  const selectedCount = items.filter((item) => item.selected).length;


  // For DND Function
  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setItems((items) => {
      const oldIndex = items.findIndex((user) => user.id === active.id);
      const newIndex = items.findIndex((user) => user.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };


  return (
    <div>
      <div className="card">
        <div className="card-header">{selectedCount}</div>
        <div className="gallery ">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              className="item border-1"
              items={items}
              strategy={rectSortingStrategy}
            >
              {items.map((item) => (
                <div key={item.id} className="item border-1 ">
                  <SortableItem
                   
                    src={item.src}
                    selected={selectedItems.has(item.id)}
                    onToggle={() => handleCheckboxChange(item.id)}
                    item={item}
                  >
                    {" "}
                  </SortableItem>
                </div>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
