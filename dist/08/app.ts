import {
    Engine,
    Scene,
    FreeCamera,
    Vector3, MeshBuilder, PointLight, DirectionalLight, SpotLight, HemisphericLight, Color3, StandardMaterial
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
            new Vector3(0, 1, -5),
            scene
        );

        camera.attachControl(canvas,true);

        let ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

        let light = new PointLight("pointLight", new Vector3(-2, 2, -2), scene);

        let box1 = MeshBuilder.CreateBox("box", {size: 0.75}, scene);
        let box2 = MeshBuilder.CreateBox("box", {size: 1}, scene);
        let box3 = MeshBuilder.CreateBox("box", {size: 0.5}, scene);

        box1.position = new Vector3(0,1,1);
        box2.position = new Vector3(0,1,-1);
        box3.position = new Vector3(1,1,0);

        let redMat = new StandardMaterial("redMat", scene);
        let transparentMat = new StandardMaterial("transparentMat", scene);
        let emissiveMat = new StandardMaterial("emissiveMat", scene);

        redMat.diffuseColor = new Color3(0, 0, 1);
        transparentMat.alpha = 0.1;
        emissiveMat.emissiveColor = new Color3(0,1,1);

        box1.material = redMat;
        box2.material = transparentMat;
        box3.material = emissiveMat;

        return scene;
    }
}

new App();