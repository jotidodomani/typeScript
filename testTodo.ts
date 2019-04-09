let toDoList: string[]=[];

let  AddToDoItem= (todoItem: string)=> {
    toDoList.push(todoItem);
    console.log("Item is added to the list");
}

let  viewToToList=()=> {
    toDoList.forEach(element => {
        console.log(element);
    });
}

let IndexView = (index: number) => {
    console.log("Item via index is : " + toDoList[index]);
}

AddToDoItem("Item 1 in to do list");
AddToDoItem("Item 2 in to do list");
viewToToList();
IndexView(1);
