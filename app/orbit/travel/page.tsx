"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AmbientLight,
  BufferGeometry,
  EllipseCurve,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer,
} from "three";

import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { useQuery } from "@tanstack/react-query";
import { getFriends } from "@/api/orbit/orbitAPI";
import { QUERY_KEY } from "@/constant/queryKey";
import { sortAndReturnTopN } from "@/util/sort";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Portal from "@/components/portal/Portal";

export default function Travel() {
  const mountRef = useRef<HTMLDivElement>(null);

  type LabelInfo = {
    name: string;
    element: HTMLElement | null;
  };
  const [labels, setLabels] = useState<LabelInfo[]>([]);

  const { data: responseData, isLoading } = useQuery({
    queryKey: [QUERY_KEY.Friends],
    queryFn: getFriends,
  });

  const distancePriority: { [key: string]: number } = {
    closer: 0,
    high: 1,
    medium: 2,
    low: 3,
  };

  const sortFunction = useCallback(
    (a: GetFriendsResponse, b: GetFriendsResponse): number => {
      if (distancePriority[a.distance] < distancePriority[b.distance]) {
        return -1;
      }
      if (distancePriority[a.distance] > distancePriority[b.distance]) {
        return 1;
      }
      if (a.updated_at < b.updated_at) {
        return -1;
      }
      if (a.updated_at > b.updated_at) {
        return 1;
      }
      return 0;
    },
    []
  );

  useEffect(() => {
    if (responseData) {
      const sortedUserInfos = sortAndReturnTopN(responseData, sortFunction, 4);
      setLabels(
        sortedUserInfos.map((userInfo) => ({
          name: userInfo.friend_name,
          element: null,
        }))
      );
    }
  }, [responseData, sortFunction]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = 1280;
    const height = 1124;

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, width / height, 0.1, 1000);
    const renderer = new WebGLRenderer();
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const ambientLight = new AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const sunLight = new PointLight(0xffff00, 30, 100, 1.1);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    mount.appendChild(labelRenderer.domElement);

    const createPlanet = (size: number, image: string, distance: number) => {
      const planet = new Mesh(
        new SphereGeometry(size, 32, 32),
        new MeshStandardMaterial({
          map: new TextureLoader().load(image),
        })
      );
      scene.add(planet);
      planet.position.set(distance, 0, 0);

      const planetOrbit = new Object3D();
      planetOrbit.position.set(0, 0, 0);
      planetOrbit.add(planet);
      scene.add(planetOrbit);

      const curve = new EllipseCurve(
        0,
        0,
        distance,
        distance,
        0,
        2 * Math.PI,
        false,
        0
      );

      const points = curve.getPoints(50);
      const orbitGeometry = new BufferGeometry().setFromPoints(points);
      const orbitMaterial = new LineBasicMaterial({ color: 0xffffff });
      const orbitLine = new Line(orbitGeometry, orbitMaterial);
      orbitLine.rotation.x = Math.PI / 2;
      scene.add(orbitLine);

      return { planet, planetOrbit };
    };

    const sun = new Mesh(
      new SphereGeometry(4, 32, 32),
      new MeshBasicMaterial({
        map: new TextureLoader().load("/sun.jpg"),
      })
    );
    scene.add(sun);

    const { planet: mercury, planetOrbit: mercuryOrbit } = createPlanet(
      2,
      "/mercury.jpg",
      7.8
    );

    const { planet: venus, planetOrbit: venusOrbit } = createPlanet(
      2,
      "/venus.jpg",
      14.4
    );

    const { planet: earth, planetOrbit: earthOrbit } = createPlanet(
      2,
      "/earth.jpg",
      20
    );

    const { planet: mars, planetOrbit: marsOrbit } = createPlanet(
      2,
      "/mars.jpg",
      28
    );

    const planets = [mercury, venus, earth, mars];
    labels.forEach((labelInfo, index) => {
      const labelDiv = document.createElement("div");
      labelDiv.className = "label";
      labelDiv.textContent = labelInfo.name;
      labelDiv.style.cssText =
        "padding: 0px 20px;background: #333;color: #E086D3;border-radius: 9px;font: 16px;box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);";
      const label = new CSS2DObject(labelDiv);
      label.position.set(0, -5, 0);
      planets[index].add(label);
      labelInfo.element = labelDiv;
    });

    camera.position.set(30, 47, 40);
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      sun.rotation.y += 0.004;
      mercury.rotation.y += 0.0017;
      venus.rotation.y += 0.00041;
      earth.rotation.y += 0.1;
      mars.rotation.y += 0.097;

      mercuryOrbit.rotation.y += 0.0123;
      venusOrbit.rotation.y += 0.00486;
      earthOrbit.rotation.y += 0.003;
      marsOrbit.rotation.y += 0.00159;

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
      mount.removeChild(labelRenderer.domElement);
    };
  }, [labels]);

  useEffect(() => {
    labels.forEach((label) => {
      if (label.element) {
        label.element.textContent = label.name;
      }
    });
  }, [labels]);

  if (isLoading)
    return (
      <Portal selector="loading">
        <LoadingSpinner />
      </Portal>
    );
  return (
    <main className="px-20 pt-[107px] pb-[84px] relative flex flex-col items-center">
      <h1 className="font-semibold text-[33px] text-[#EAEAEA] absolute -translate-x-2/4 left-2/4 text-center pointer-events-none mt-[60px]">
        엔솔 궤도에서 우주 여행하기
      </h1>
      <div ref={mountRef} />
    </main>
  );
}
