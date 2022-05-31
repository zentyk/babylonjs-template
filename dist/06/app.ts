import {
    Engine,
    Scene,
    FreeCamera,
    Vector3, MeshBuilder, PointLight, DirectionalLight, SpotLight, HemisphericLight, Color3
} from "@babylonjs/core";
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
        let camera = new FreeCamera(
            "camera1",
            new Vector3(0, 0, -10),
            scene
        );

        camera.attachControl(canvas,true);

        let sphere = MeshBuilder.CreateSphere("sphere", {diameter: 1, diameterX: 1}, scene);
        sphere.position.y = 0.5;
        let ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

        //let light = new PointLight("pointLight", new Vector3(1, 1, -2), scene);
        //let light = new DirectionalLight("DirectionalLight", new Vector3(0, -10, -5), scene);
        //let light = new SpotLight("spotLight", new Vector3(0, 5, 0), new Vector3(0, -2, 0), Math.PI / 2, 10, scene);
        let light = new HemisphericLight("HemiLight", new Vector3(0, 1, 0), scene);

        light.diffuse = new Color3(0.5, 0, 0);
        light.specular = new Color3(0, 1, 0);

        return scene;
    }
}

new App();