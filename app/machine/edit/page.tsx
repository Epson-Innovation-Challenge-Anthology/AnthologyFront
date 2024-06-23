"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fabric } from "fabric";
import Link from "next/link";

export default function EditPhoto() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [penColor, setPenColor] = useState<string>("black");
  const [showPenColorPicker, setShowPenColorPicker] = useState<boolean>(false);
  const [showStickerPicker, setShowStickerPicker] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const image = sessionStorage.getItem("uploadedImage");
    if (image) {
      initializeCanvas(image);
    } else {
      router.push("/print/page");
    }
  }, [router]);

  const initializeCanvas = (imageUrl: string) => {
    const canvasElement = new fabric.Canvas("canvas", {
      width: 800,
      height: 600,
    });
    setCanvas(canvasElement);

    fabric.Image.fromURL(imageUrl, (img) => {
      canvasElement.add(img);
      canvasElement.renderAll();
    });
  };

  const enableEraser = () => {
    if (canvas) {
      canvas.isDrawingMode = true;
      const eraserBrush = new fabric.PencilBrush(canvas);
      eraserBrush.color = "white";
      eraserBrush.width = 10;
      canvas.freeDrawingBrush = eraserBrush;
    }
  };

  const enablePen = () => {
    if (canvas) {
      canvas.isDrawingMode = true;
      const penBrush = new fabric.PencilBrush(canvas);
      penBrush.color = penColor;
      penBrush.width = 5;
      canvas.freeDrawingBrush = penBrush;
    }
  };

  const addSticker = (stickerUrl: string) => {
    if (canvas) {
      fabric.Image.fromURL(stickerUrl, (img) => {
        img.scale(0.1);
        canvas.add(img);
        canvas.renderAll();
      });
    }
  };

  const enableSelectionMode = () => {
    if (canvas) {
      canvas.isDrawingMode = false;
    }
  };

  const rotateImage = () => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        activeObject.rotate((activeObject.angle ?? 0) + 15);
        canvas.renderAll();
      }
    }
  };

  const resizeImage = (scale: number) => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        activeObject.scale((activeObject.scaleX ?? 1) * scale);
        canvas.renderAll();
      }
    }
  };

  return (
    <main className="px-20 pt-20 pb-[84px]">
      <h1>사진 편집하기</h1>
      <button
        onClick={enableEraser}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        지우개
      </button>
      <button
        onClick={() => setShowPenColorPicker(!showPenColorPicker)}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        펜
      </button>
      {showPenColorPicker && (
        <div>
          <input
            type="color"
            value={penColor}
            onChange={(e) => setPenColor(e.target.value)}
          />
          <button onClick={enablePen}>펜 적용</button>
        </div>
      )}
      <button
        onClick={() => setShowStickerPicker(!showStickerPicker)}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        스티커
      </button>
      {showStickerPicker && (
        <div>
          <img
            src="/path/to/sticker1.png"
            alt="Sticker 1"
            onClick={() => addSticker("/path/to/sticker1.png")}
          />
          <img
            src="/path/to/sticker2.png"
            alt="Sticker 2"
            onClick={() => addSticker("/path/to/sticker2.png")}
          />
          {/* 더 많은 스티커 추가 가능 */}
        </div>
      )}
      <button
        onClick={enableSelectionMode}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        선택 모드
      </button>
      <button
        onClick={rotateImage}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        회전
      </button>
      <button
        onClick={() => resizeImage(1.1)}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        확대
      </button>
      <button
        onClick={() => resizeImage(0.9)}
        className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]"
      >
        축소
      </button>
      <canvas id="canvas"></canvas>
      <Link href="/machine/print" passHref>
        <button className="bg-[#AE76CC] text-white h-8 w-20 rounded-[5px]">
          출력하기
        </button>
      </Link>
    </main>
  );
}
