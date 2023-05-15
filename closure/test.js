function parent(){
    let name = "Selim Mia";
    function child(){
        var name = "Child Name";
        console.log(name, this.name);
    }
    child();
}

parent();