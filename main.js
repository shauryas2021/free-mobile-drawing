var width = screen.width;
new_width = screen.width;
new_height= screen.height;
var last_position_of_x, last_position_of_y;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
       console.log("my_touchstart")
       last_position_of_touch_x = e.touches[0] - canvas.offsetLeft;
         last_position_of_touch_y = e.touches[0] - canvas.offsetTop;
       color = document.getElementById("color").value;
       width_of_line = document.getElementById("width_of_line").value;


    
    }


    



    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

