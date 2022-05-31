import {
    Engine,
    Scene,
    FreeCamera,
    Vector3,
    MeshBuilder,
    HemisphericLight
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
        const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);

        let box = MeshBuilder.CreateBox("box", {height:0.5, width:0.5, depth:0.5}, scene);
        box.position = new Vector3(-2,0,0);

        let sphere = MeshBuilder.CreateSphere("sphere", {diameter:0.5, diameterX:0.5}, scene);
        sphere.position = new Vector3(-1,0,0);

        let cone = MeshBuilder.CreateCylinder("cone", {diameterTop : 0.5, diameterBottom:0.5, tessellation:32, height:0.5}, scene);
        cone.position = new Vector3(0,0,0);

        let plane = MeshBuilder.CreatePlane("plane", {width: 0.5,height:0.5}, scene);
        plane.position = new Vector3(1,0,0);

        let ground = MeshBuilder.CreateGround("gd", {width: 0.5,height:0.5, subdivisions:4}, scene);
        ground.position = new Vector3(2,0,0);

        let capsule = MeshBuilder.CreateCapsule("ribbon", {orientation:Vector3.Up(), radius:0.25, height:0.75}, scene);
        capsule.position = new Vector3(0,1,0);

        let disc = MeshBuilder.CreateDisc("disc", {radius:0.25, arc:0.75});
        disc.position =  new Vector3(-1,1,0);

        let torus = MeshBuilder.CreateTorus("torus", {diameter:0.5, thickness:0.15, tessellation:16}, scene);
        torus.position =  new Vector3(1,1,0);

        let torus_knot = MeshBuilder.CreateTorusKnot("knot", {radius:0.25,tube:0.025, radialSegments:64, tubularSegments:32,p:1,q:5});
        torus_knot.position = new Vector3(2,1,0)

        let groundHm = MeshBuilder.CreateGroundFromHeightMap("ground", './ground.png', {width:0.5, height:0.5, subdivisions:32, minHeight:0, maxHeight:0.5}, scene);
        groundHm.position = new Vector3(-2,1,0);

        return scene;
    }
}

new App();