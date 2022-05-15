import { Engine, Scene, FreeCamera, Vector3 } from "@babylonjs/core";

class App {
    constructor() {
        let canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "renderCanvas";
        document.body.appendChild(canvas);

        let engine = new Engine(canvas, true);
        let scene = new Scene(engine);

        let camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

        camera.setTarget(Vector3.Zero());

        engine.runRenderLoop(() => {
            scene.render();
        });

        window.addEventListener('resize', () => {
            engine.resize();
        });
    }
}

new App();