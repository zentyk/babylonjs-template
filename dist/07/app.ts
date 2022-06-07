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
            new Vector3(0, 1, -5),
            scene
        );

        camera.attachControl(canvas,true);

        let ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

        let light = new PointLight("pointLight", new Vector3(1, 1, -2), scene);

        let box = MeshBuilder.CreateBox("box", {size: 0.75}, scene);
        box.position= new Vector3(0,1,0);

        let speed = 0.001;

        scene.onBeforeRenderObservable.add(() => {
            if(box.position.x<=5) {
                box.position.x += speed * scene.deltaTime;
            }

            //box.position.y -= speed * scene.deltaTime;
            box.rotation.y += speed * scene.deltaTime;
            box.scaling.z += speed * scene.deltaTime;
        });

        return scene;
    }
}

new App();