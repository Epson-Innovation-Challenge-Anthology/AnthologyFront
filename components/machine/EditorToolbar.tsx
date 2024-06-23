import { fabric } from "fabric";
import { useState } from "react";
import { motion } from "framer-motion";

interface EditorToolbarProps {
  canvas: fabric.Canvas | null;
  penColor: string;
  setPenColor: (color: string) => void;
  showPenColorPicker: boolean;
  setShowPenColorPicker: (show: boolean) => void;
  showStickerPicker: boolean;
  setShowStickerPicker: (show: boolean) => void;
  addSticker: (stickerUrl: string) => void;
  toggleCropping: () => void; // 자르기 토글 함수 추가
  nowPanel: string; // 현재 패널 상태
  setNowPanel: (panel: string) => void; // 패널 상태 설정 함수
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({
  canvas,
  penColor,
  setPenColor,
  showPenColorPicker,
  setShowPenColorPicker,
  showStickerPicker,
  setShowStickerPicker,
  addSticker,
  toggleCropping,
  nowPanel,
  setNowPanel,
}) => {
  const enableEraser = () => {
    if (canvas) {
      setNowPanel("eraser");
      canvas.isDrawingMode = true;
      const eraserBrush = new fabric.PencilBrush(canvas);
      eraserBrush.color = "white";
      eraserBrush.width = 10;
      canvas.freeDrawingBrush = eraserBrush;
    }
  };

  const enablePen = () => {
    if (canvas) {
      setNowPanel("brush");
      canvas.isDrawingMode = true;
      const penBrush = new fabric.PencilBrush(canvas);
      penBrush.color = penColor;
      penBrush.width = 5;
      canvas.freeDrawingBrush = penBrush;
    }
  };

  const enableSelectionMode = () => {
    if (canvas) {
      setNowPanel("selection");
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
    <div className="bg-[#c5b6dd] border-b border-gray-300 h-16 w-full flex items-center px-4">
      <motion.button
        onClick={enableEraser}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        지우개
      </motion.button>
      <motion.button
        onClick={() => {
          setShowPenColorPicker(!showPenColorPicker);
          enablePen();
        }}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        펜
      </motion.button>
      {showPenColorPicker && (
        <div className="inline-block">
          <input
            type="color"
            value={penColor}
            onChange={(e) => {
              setPenColor(e.target.value);
              enablePen();
            }}
            className="mr-2"
          />
        </div>
      )}
      <motion.button
        onClick={() => setShowStickerPicker(!showStickerPicker)}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        스티커
      </motion.button>
      <motion.button
        onClick={enableSelectionMode}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        선택 모드
      </motion.button>
      <motion.button
        onClick={toggleCropping}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        자르기
      </motion.button>
      <motion.button
        onClick={rotateImage}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        회전
      </motion.button>
      <motion.button
        onClick={() => resizeImage(1.1)}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        확대
      </motion.button>
      <motion.button
        onClick={() => resizeImage(0.9)}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2"
      >
        축소
      </motion.button>
    </div>
  );
};

export default EditorToolbar;
