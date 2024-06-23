"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fabric } from "fabric";
import Link from "next/link";
import EditorToolbar from "../../../components/machine/EditorToolbar";
import Sidebar from "../../../components/machine/EditorSidebar";

export default function Edit() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [penColor, setPenColor] = useState<string>("black");
  const [showPenColorPicker, setShowPenColorPicker] = useState<boolean>(false);
  const [showStickerPicker, setShowStickerPicker] = useState<boolean>(false);
  const [isCropping, setIsCropping] = useState<boolean>(false);
  const [imgObject, setImgObject] = useState<fabric.Image | null>(null);
  const [nowPanel, setNowPanel] = useState<string>("selection");
  const router = useRouter();
  const searchParams = useSearchParams();
  const themeImage = searchParams.get("theme");

  useEffect(() => {
    const image = sessionStorage.getItem("uploadedImage");
    if (image && themeImage) {
      initializeCanvas(image, themeImage);
    } else {
      router.push("/print/page");
    }
  }, [router, searchParams]);

  const initializeCanvas = (imageUrl: string, themeImageUrl: string) => {
    const canvasElement = new fabric.Canvas("canvas", {
      width: 1000,
      height: 800,
    });
    setCanvas(canvasElement);

    fabric.Image.fromURL(themeImageUrl, (img) => {
      img.scaleToWidth(canvasElement.getWidth());
      img.set({ selectable: false, evented: false });

      const centerX = canvasElement.getWidth() / 2;
      const centerY = canvasElement.getHeight() / 2;
      img.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
      });

      canvasElement.setBackgroundImage(
        img,
        canvasElement.renderAll.bind(canvasElement)
      );
    });

    fabric.Image.fromURL(imageUrl, (img) => {
      img.scaleToWidth(canvasElement.getWidth() / 2);

      const centerX = canvasElement.getWidth() / 2;
      const centerY = canvasElement.getHeight() / 2;
      img.set({
        left: centerX - img.getScaledWidth() / 2,
        top: centerY - img.getScaledHeight() / 2,
        selectable: false,
      });

      setImgObject(img);

      canvasElement.add(img);
      canvasElement.renderAll();
    });

    canvasElement.on("object:moving", (e) => {
      const obj = e.target;
      if (obj) {
        const left = obj.left ?? 0;
        const top = obj.top ?? 0;
        if (left < 0) obj.left = 0;
        if (top < 0) obj.top = 0;
        if (left + obj.getScaledWidth() > canvasElement.getWidth()) {
          obj.left = canvasElement.getWidth() - obj.getScaledWidth();
        }
        if (top + obj.getScaledHeight() > canvasElement.getHeight()) {
          obj.top = canvasElement.getHeight() - obj.getScaledHeight();
        }
      }
    });
  };

  const toggleCropping = () => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ selectable: !isCropping });
        canvas.renderAll();
      }
    }
    setIsCropping(!isCropping);
  };

  const addSticker = (stickerUrl: string) => {
    if (canvas) {
      fabric.Image.fromURL(stickerUrl, (img) => {
        img.scale(0.1);
        img.set({ selectable: true });
        canvas.add(img);
        canvas.renderAll();
      });
    }
  };

  const exportImage = () => {
    if (canvas) {
      const image = canvas.toDataURL({
        format: "jpeg",
        quality: 0.8,
      });
      sessionStorage.setItem("exportedImage", image);
      router.push("/machine/print");
    }
  };

  useEffect(() => {
    if (canvas) {
      const objects = canvas.getObjects();
      for (const obj of objects) {
        obj.selectable = nowPanel === "sticker";
      }
      canvas.renderAll();
    }
  }, [canvas, nowPanel]);

  return (
    <main className="relative bg-white min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center justify-start w-full max-w-2xl mt-10 px-4 gap-6">
        <div className="text-[#ae76cc] text-center font-semibold text-4xl">
          사진 편집하기
        </div>
        <div className="text-[#828282] text-center font-regular text-lg">
          사진 에디터 기능
        </div>
        <button
          onClick={() => router.push("/about")}
          className="bg-[#ae76cc] text-[#ffdddd] rounded-lg px-6 py-3 shadow"
        >
          서비스 소개페이지로 돌아기기
        </button>
      </div>
      <div className="flex flex-col bg-[#f5f5f5] w-[1256px] my-10">
        <EditorToolbar
          canvas={canvas}
          penColor={penColor}
          setPenColor={setPenColor}
          showPenColorPicker={showPenColorPicker}
          setShowPenColorPicker={setShowPenColorPicker}
          showStickerPicker={showStickerPicker}
          setShowStickerPicker={setShowStickerPicker}
          addSticker={addSticker}
          toggleCropping={toggleCropping}
          nowPanel={nowPanel}
          setNowPanel={setNowPanel}
        />
        <div className="flex w-full h-full">
          <canvas
            id="canvas"
            className="bg-transparent flex-grow"
            style={{ border: "1px solid #000" }}
          ></canvas>
          {canvas && imgObject && (
            <Sidebar canvas={canvas} img={imgObject} />
          )}
        </div>
        <div className="bg-[#925bb0] w-full h-16 flex items-center justify-end px-4">
          <button onClick={exportImage} className="bg-[#ff7d7d] text-white rounded-lg px-4 py-2">
            출력하기
          </button>
        </div>
      </div>
    </main>
  );
}

