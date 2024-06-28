import { fabric } from "fabric";
import { useState, useEffect } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SidebarProps {
  canvas: fabric.Canvas;
  img: fabric.Image;
  onThemeSelect: (theme: string) => void;
  frameImages: Record<string, string>;
  adjustSaturation: (value: number) => void;
  adjustBrightness: (value: number) => void;
  adjustExposure: (value: number) => void;
  adjustContrast: (value: number) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const themes = ["theme1", "theme2", "theme3"];

const Sidebar: React.FC<SidebarProps> = ({
  canvas,
  img,
  onThemeSelect,
  frameImages,
  adjustSaturation,
  adjustBrightness,
  adjustExposure,
  adjustContrast,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [saturation, setSaturation] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [contrast, setContrast] = useState(0);

  const theme = useTheme();

  const handleThemeChange = (event: SelectChangeEvent<string>) => {
    const theme = event.target.value as string;
    setSelectedTheme(theme);
    onThemeSelect(theme);
  };

  useEffect(() => {
    adjustSaturation(saturation);
  }, [saturation]);

  useEffect(() => {
    adjustBrightness(brightness);
  }, [brightness]);

  useEffect(() => {
    adjustExposure(exposure);
  }, [exposure]);

  useEffect(() => {
    adjustContrast(contrast);
  }, [contrast]);

  return (
    <div className="bg-white border-l border-gray-200 flex-shrink-0 w-64 h-full p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="text-black font-medium">사진에 기록할 한 마디</div>
          <input
            type="text"
            className="bg-white border border-gray-200 rounded-lg py-2 px-3"
            placeholder="사진에 남기고 싶은 한 문장 기록하기"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-black font-medium">
            사진 액자로 쓸 테마 고르기
          </div>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <Select
              displayEmpty
              value={selectedTheme}
              onChange={handleThemeChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected) {
                  return <em>액자 선택</em>;
                }
                return selected;
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>액자 선택</em>
              </MenuItem>
              {themes.map((theme) => (
                <MenuItem
                  key={theme}
                  value={theme}
                  style={{
                    fontWeight: selectedTheme === theme ? "bold" : "normal",
                  }}
                >
                  {theme}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {[
          {
            label: "밝기",
            value: brightness,
            onChange: setBrightness,
            min: -1,
            max: 1,
          },
          {
            label: "노출",
            value: exposure,
            onChange: setExposure,
            min: -1,
            max: 1,
          },
          {
            label: "대비",
            value: contrast,
            onChange: setContrast,
            min: -1,
            max: 1,
          },
          {
            label: "채도",
            value: saturation,
            onChange: setSaturation,
            min: -1,
            max: 1,
          },
        ].map(({ label, value, onChange, min, max }) => (
          <div key={label} className="flex flex-col gap-3">
            <div className="text-black font-medium">{label}</div>
            <div className="text-gray-600">{value}</div>
            <input
              type="range"
              min={min}
              max={max}
              step="0.1"
              value={value}
              onChange={(e) => onChange(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        ))}
        <button className="bg-pink-200 rounded-lg py-2 text-black text-center font-medium">
          설정 저장하기
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
