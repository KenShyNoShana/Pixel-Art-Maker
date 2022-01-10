const clear = document.getElementById("submit");
const grid = document.getElementById("grid");

// creates grid
function makeGrid()
{
    let row = document.getElementById("row").value;
    let column = document.getElementById("column").value;
    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < column; j++)
        {
            let div = document.createElement("div");
            div.style.cssText = "border: 1px solid black; width: 15px; height: 15px;";
            grid.appendChild(div);
            
        }
    }
    return console.log(row, column);
}

function removeGrid()
{
    while(grid.firstChild)
    {
        grid.removeChild(grid.lastChild);
    }
}

// calculates new width of grid, removes the old one and creates the new grid with new width
function gridChange()
{
    grid.style.cssText =    `width: calc(${row.value} * 17px);
                            height: calc(${column.value} * 17px);
                            padding: 0;`;
    removeGrid();
    return makeGrid();
}

function colorCell(evt)
{
    let color = document.getElementById("color");
    console.log(color.value)
    /* since the cssText property? defines the inline style of the element, i have to define the whole style all over again,
     as of now i did not find a way to add it to the existing style :(
     also i do not get why the commented code below doesnt work, shouldnt it refer to the clicked div aswell?
    */
    //grid.style.cssText.target = `border: 1px solid black; width: 15px; height: 15px; background-color: ${color.value};`;


    // bug occured because the parent div was selected and its width property changed to 15px, only happened with the "click" event, theirfore "mousedown" is used
    if(evt.target === grid)
    {
        return console.log("prevented bug for now");
    }
    else
    {
        evt.target.style.cssText = `border: 1px solid black; width: 15px; height: 15px; background-color: ${color.value};`;
    }
    
}

row.addEventListener("change", gridChange);
column.addEventListener("change", gridChange);
gridChange();
grid.addEventListener(/*"click" ||*/ "mousedown", colorCell);
clear.addEventListener("click", gridChange);