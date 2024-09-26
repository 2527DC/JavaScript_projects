import { useEffect, useRef } from "react";
import "./New.css";

const NewFloat = () => {
  const blockref = useRef(null);
  const x = useRef(0);

  const y = useRef(0);
  const left = useRef(0);
  const top = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
 

    const handlemousemove = (e) => {
        if (!dragging.current)  return ;
            
      const newLeft = left.current + (e.clientX - x.current);
      const newTop = top.current +  (e.clientY - y.current);

      blockref.current.style.left = `${newLeft}px`;
      blockref.current.style.top = `${newTop}px`;
      

    };
    
const handlemouseup = () => {
        dragging.current=false;
      };

    window.addEventListener("mousemove", handlemousemove);
    window.addEventListener("mouseup", handlemouseup);

    return () => {
        window.removeEventListener("mousemove", handlemousemove);
        window.removeEventListener("mouseup", handlemouseup);
      };
  },[]);
  
  const handlemoving = (e) => {

    dragging.current = true;
    x.current = e.clientX;
    y.current = e.clientY;
    left.current = blockref.current.offsetLeft;
    top.current = blockref.current.offsetTop;
  };
  return (
    <>
      <div className="block" ref={blockref} onMouseDown={handlemoving}>
        <h1> i am boss</h1>
      </div>
    </>
  );
};
export default NewFloat;
