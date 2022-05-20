import {Engine, Scene, FreeCamera, Vector3, Color3, MeshBuilder, ArcRotateCamera} from "@babylonjs/core";
class App {
    constructor() {
        let canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id="renderCanvas";
        document.body.appendChild(canvas);

        let engine = new Engine(canvas, true);
        let scene = this.CreateScene(engine, canvas);

        engine.runRenderLoop(() => {
            scene.render();
        });

        window.addEventListener("resize", () => {
            engine.resize();
        });
    }

    CreateScene(engine: Engine, canvas : HTMLCanvasElement): Scene {
        let scene = new Scene(engine);
        scene.clearColor = new Color3(0.5,0.75,0.75);
        let camera = new ArcRotateCamera("camara", 0, Math.PI/2, 15, new Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, false);

        let cube = MeshBuilder.CreateBox("cubo", {size: 2}, scene);
        return scene;
    }
}

new App();