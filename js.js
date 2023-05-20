document.addEventListener('mousemove', stare);
  function stare(e) {
   const to = {
    x: e.pageX, 
      y: e.pageY
      };
     const eyes = document.querySelectorAll('.eye');
     
     for (const eye in Array.from(eyes)) {
      eyes[eye].parentNode.style.display = 'block';
      lookTo(eyes[eye], to);
     }
  }

  function lookTo(eye, to){
   const offset = eye.offsetWidth;
   const white = eye.parentNode;
   white.style.transform = 'rotate(0deg)';
   const whiteRadius = white.offsetWidth/2;
   const whiteTop = white.offsetTop;
     const whiteLeft = white.offsetLeft;
     const mouseX = to.x;
     const mouseY = to.y;
     const x0New = mouseX - whiteRadius - whiteLeft;
       const y0New = mouseY - whiteRadius - whiteTop;
       const mouseR = Math.sqrt(x0New*x0New + y0New*y0New) + offset/2; 
       if (mouseR <= whiteRadius){
        eye.style.top = (mouseY - offset/2 - whiteTop) + 'px';
        eye.style.left = (mouseX - offset/2 - whiteLeft) + 'px';
   } else {
    const rotationAngle = (x,y) => {
     if (x>=0) {
      return Math.atan(y/x)*180/Math.PI;
     } 
     return Math.atan(y/x)*180/Math.PI - 180;
    };
    eye.style.top = (whiteRadius - offset/2) + 'px';
    eye.style.left = (whiteRadius*2 - offset) + 'px';
    white.style.transform = 'rotate('+ rotationAngle(x0New,y0New) + 'deg)';
    };
   };

  