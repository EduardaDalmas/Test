let name = "Duda";


class App{
    constructor() {
        this.name = "Duda";
        this.run();
    }

    showAlert() {
        console.log(name);
        console.log("----original----");
        name = "Bianca";

        console.log(name);
        console.log("----modificado----");

        console.log(this.name);
        console.log("----original----");

        alert(`Hello, ${name}`);
    }
    
    run() {
        this.showAlert();
    }
    
}


export default new App();