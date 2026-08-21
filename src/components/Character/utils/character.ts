import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            // Cores do personagem baseadas na referência
            const skinColor = 0xc88469; // Pele morena
            const shirtColor = 0x333333; // Camisa cinza escuro/chumbo
            const pantColor = 0x2b2b2b; // Calça um tom ligeiramente mais escuro
            const shoesColor = 0xeeeeee; // Tênis branco/cinza claro

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
                
                // Aplicação das cores definitivas
                if (mesh.material && mesh.material.name === 'default') {
                  mesh.material = mesh.material.clone();
                  
                  if (['Plane007', 'Ear001', 'Neck', 'Hand'].includes(mesh.name)) {
                    mesh.material.color.setHex(skinColor);
                  } else if (mesh.name === 'BODYSHIRT') {
                    mesh.material.color.setHex(shirtColor);
                  } else if (mesh.name === 'Pant') {
                    mesh.material.color.setHex(pantColor);
                  } else if (['Shoe', 'Sole'].includes(mesh.name)) {
                    mesh.material.color.setHex(shoesColor);
                  }
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
