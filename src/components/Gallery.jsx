import React, { useState } from "react";
import GalleryItem from "./GalleryItem";

// Import dnd file
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

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
  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );

    console.log('checkbox');
  };

  // For delete image function 
  const handleDeleteSelected = () => {
    setItems((prevItems) => prevItems.filter((item) => !item.selected));
  };


  const selectedCount = items.filter((item) => item.selected).length;

  const onDragEnd = (event) => {
    console.log("onDragEnd", event);
  };


  return (
    <div>
      <div className="card">
        <div className="card-header">Featured</div>
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
                    key={item.id}
                    src={item.src}
                    selected={item.selected}
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
