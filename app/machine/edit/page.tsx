"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fabric } from "fabric";
import EditorToolbar from "../../../components/machine/EditorToolbar";
import Sidebar from "../../../components/machine/EditorSidebar";
import frameImg1 from "@/assets/machine/frameImg1.png";
import frameImg2 from "@/assets/machine/frameImg2.png";
import frameImg3 from "@/assets/machine/frameImg3.png";

const frameImages: Record<string, string> = {
  theme1: frameImg1.src,
  theme2: frameImg2.src,
  theme3: frameImg3.src,
};

const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 770;
const SIDEBAR_WIDTH = 250;
const TOTAL_WIDTH = CANVAS_WIDTH + SIDEBAR_WIDTH;

export default function EditPhoto() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [penColor, setPenColor] = useState<string>("black");
  const [imgObject, setImgObject] = useState<fabric.Image | null>(null);
  const [frameObject, setFrameObject] = useState<fabric.Image | null>(null);
  const [nowPanel, setNowPanel] = useState<string>("selection");
  const [showPenColorPicker, setShowPenColorPicker] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const image = sessionStorage.getItem("uploadedImage");
    if (image) {
      initializeCanvas(image);
    } else {
      router.push("/print/page");
    }
  }, [router]);

  const initializeCanvas = async (imageUrl: string) => {
    const canvasElement = new fabric.Canvas("canvas", {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      isDrawingMode: true,
      backgroundColor: "white",
    });
    setCanvas(canvasElement);

    try {
      const img = await new Promise<fabric.Image>((resolve, reject) => {
        fabric.Image.fromURL(imageUrl, (img) => {
          if (img) resolve(img);
          else reject("Failed to load uploaded image");
        });
      });

      img.scaleToWidth(CANVAS_WIDTH);
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
    } catch (error) {
      router.push("/print/page");
    }
  };

  const handleThemeSelect = (theme: string) => {
    const frameSrc = frameImages[theme];
    if (frameSrc && canvas) {
      fabric.Image.fromURL(frameSrc, (img) => {
        img.scaleToWidth(canvas.getWidth());
        img.set({
          originX: "center",
          originY: "center",
          left: canvas.getWidth() / 2,
          top: canvas.getHeight() / 2,
          selectable: false,
          evented: false,
          name: "frame",
        });

        setFrameObject(img);
        canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
      });
    }
  };

  const applyFilter = (index: number, filter: fabric.IBaseFilter) => {
    if (imgObject) {
      imgObject.filters = imgObject.filters || [];
      imgObject.filters[index] = filter;
      imgObject.applyFilters();
      canvas?.renderAll();
    }
  };

  const adjustSaturation = (value: number) => {
    applyFilter(0, new fabric.Image.filters.Saturation({ saturation: value }));
  };

  const adjustBrightness = (value: number) => {
    applyFilter(1, new fabric.Image.filters.Brightness({ brightness: value }));
  };

  const adjustExposure = (value: number) => {
    applyFilter(2, new fabric.Image.filters.Brightness({ brightness: value }));
  };

  const adjustContrast = (value: number) => {
    applyFilter(3, new fabric.Image.filters.Contrast({ contrast: value }));
  };

  const showUnderDevelopmentAlert = () => {
    alert("아직 개발 중입니다");
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
      canvas.on("path:created", () => {
        if (frameObject) {
          canvas.bringToFront(frameObject);
        }
      });

      if (frameObject) {
        canvas.bringToFront(frameObject);
      }

      canvas.renderAll();
    }
  }, [canvas, frameObject]);

  return (
    <main className="relative bg-white min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center justify-start w-full max-w-3xl mt-10 px-4 gap-6">
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
      <div
        className="flex flex-col bg-[#f5f5f5] my-10"
        style={{ width: `${TOTAL_WIDTH}px`, margin: "0 auto" }}
      >
        <EditorToolbar
          canvas={canvas}
          penColor={penColor}
          setPenColor={setPenColor}
          showPenColorPicker={showPenColorPicker}
          setShowPenColorPicker={setShowPenColorPicker}
          showStickerPicker={false}
          setShowStickerPicker={showUnderDevelopmentAlert}
          addSticker={showUnderDevelopmentAlert}
          toggleCropping={showUnderDevelopmentAlert}
          nowPanel={nowPanel}
          setNowPanel={setNowPanel}
          showUnderDevelopmentAlert={showUnderDevelopmentAlert}
        />
        <div className="flex w-full h-full">
          <canvas
            id="canvas"
            className="bg-transparent"
            style={{
              border: "1px solid #000",
              width: `${CANVAS_WIDTH}px`,
              height: `${CANVAS_HEIGHT}px`,
            }}
          ></canvas>
          {canvas && imgObject && (
            <Sidebar
              canvas={canvas}
              img={imgObject}
              onThemeSelect={handleThemeSelect}
              frameImages={frameImages}
              adjustSaturation={adjustSaturation}
              adjustBrightness={adjustBrightness}
              adjustExposure={adjustExposure}
              adjustContrast={adjustContrast}
            />
          )}
        </div>
        <div className="bg-[#925bb0] w-full h-16 flex items-center justify-end px-4">
          <button
            onClick={exportImage}
            className="bg-[#ff7d7d] text-white rounded-lg px-4 py-2"
          >
            출력하기
          </button>
        </div>
      </div>
    </main>
  );
}
