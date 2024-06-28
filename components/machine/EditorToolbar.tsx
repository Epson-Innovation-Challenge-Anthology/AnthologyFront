import { fabric } from "fabric";
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
  toggleCropping: () => void;
  nowPanel: string;
  setNowPanel: (panel: string) => void;
  showUnderDevelopmentAlert: () => void;
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
  showUnderDevelopmentAlert,
}) => {
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

  return (
    <div className="bg-[#c5b6dd] border-b border-gray-300 h-16 w-full flex items-center px-4">
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
        onClick={showUnderDevelopmentAlert}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        지우개
      </motion.button>
      <motion.button
        onClick={showUnderDevelopmentAlert}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        스티커
      </motion.button>
      <motion.button
        onClick={showUnderDevelopmentAlert}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        선택 모드
      </motion.button>
      <motion.button
        onClick={showUnderDevelopmentAlert}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 mr-2"
      >
        자르기
      </motion.button>
    </div>
  );
};

export default EditorToolbar;
