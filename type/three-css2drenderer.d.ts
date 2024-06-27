declare module 'three/examples/jsm/renderers/CSS2DRenderer' {
    import { Object3D, Camera, Scene } from 'three';
  
    export class CSS2DObject extends Object3D {
      constructor(element: HTMLElement);
      element: HTMLElement;
    }
  
    export class CSS2DRenderer {
      domElement: HTMLElement;
  
      constructor();
      getSize(): { width: number; height: number };
      render(scene: Scene, camera: Camera): void;
      setSize(width: number, height: number): void;
      setClearColor(color: any, alpha: number): void;
      clear(): void;
      dispose(): void;
    }
  }