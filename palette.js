(function(global) {

    function allowDrop(event) {
        var draggedObjectId = event.dataTransfer.getData("text");
        console.log(draggedObjectId);
        var draggedObject = document.getElementById(draggedObjectId);

        console.log(draggedObject);
        if (draggedObject.className.indexOf("block") !== -1) {
            console.log("Dropping block");
            event.preventDefault();
        }
    }

    function blockHtml(name, defaultValue) {
        var blockDiv = document.createElement("div");
        blockDiv.setAttribute('class', 'block');
        blockDiv.setAttribute('draggable', 'true');

        blockDiv.ondragstart = function(ev) {
            console.log("Drag started " + ev.srcElement.id);
            ev.srcElement.className += " dgragging";
            ev.dataTransfer.setData("text", ev.target.id);
        }
        blockDiv.ondrag = function(event) {
            console.log("Dragging");
        }

        
        blockDiv.textContent = name;
        var textVal = document.createElement("input");
        textVal.setAttribute('type','numeric');
        textVal.value = defaultValue;

        blockDiv.appendChild(textVal);
        return blockDiv;
    }

    function loadPalette() {
        console.log("load Palette");
        var palette = document.getElementsByClassName("palette")[0];
        palette.appendChild(blockHtml('left', '10'));
        palette.appendChild(blockHtml('right', 5));
    }
    global.Palette = {loadPalette: loadPalette,
                        allowDrop: allowDrop};
    
})(window);
