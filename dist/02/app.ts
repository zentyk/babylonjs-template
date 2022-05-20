import {Engine, Scene, FreeCamera, Vector3, Color3} from "@babylonjs/core";
class App {
    constructor() {
        let canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id="renderCanvas";
        document.body.appendChild(canvas);

        let engine = new Engine(canvas, true);
        let scene = this.CreateScene(engine);

        engine.runRenderLoop(() => {
            scene.render();
        });

        window.addEventListener("resize", () => {
            engine.resize();
        });
    }

    CreateScene(engine: Engine): Scene {
        let scene = new Scene(engine);
        let camera = new FreeCamera("camara1", new Vector3(0, 5, -10), scene);
        return scene;
    }
}

new App();