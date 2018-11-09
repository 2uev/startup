$(function() {
    $('#vid1').draggable({
        // grid: [100, 100]
    }).resizable({
        alsoResize: "#vid1 video",
        handles: "all",
        });
    $('#vid2').draggable({
        // grid: [100, 100]
    }).resizable({
        alsoResize: "#vid2 video",
        handles: "all",
        });
    $('#vid3').draggable({
        // grid: [100, 100]
    }).resizable({
        alsoResize: "#vid3 video",
        handles: "all",
        });
    $('#vid4').draggable({
        // grid: [100, 100]
    }).resizable({
        alsoResize: "#vid4 video",
        handles: "all",
       });
    $('#net_vid1').draggable({
        // grid: [100, 100]
    }).resizable({
        alsoResize: "#net_vid1 iframe",
        handles: "all",
    });
    $('#net_vid2').draggable({
        // grid: [100, 100]
    }).resizable({
        alsoResize: "#net_vid2 iframe",
        handles: "all",
    })
    });