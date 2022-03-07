// Global Scope- If the variable or function is defined inside the file, but not defined inside of any function or loop, then it is global scope. Global scope means that the variable or function is available and "visible" from all areas of the file.
var beatles = ['Paul', 'George', 'John', 'Ringo'];

// Local Scope- (functional(within a function) or block scoped(within a loop or a conditional)) 
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];

            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//Var- Functional Scoped, not Block Scoped (outside loop and conditional)
//Let + Const- Functional Scoped, and Block Scoped (inside loop and conditional)