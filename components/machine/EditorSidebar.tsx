import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SidebarProps {
  canvas: fabric.Canvas;
  img: fabric.Image;
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

const themes = [
  'Theme 01',
  'Theme 02',
  'Theme 03',
  'Theme 04',
  'Theme 05',
];

const Sidebar: React.FC<SidebarProps> = ({ canvas, img }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [saturation, setSaturation] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [contrast, setContrast] = useState(0);

  const theme = useTheme();

  const handleThemeChange = (event: SelectChangeEvent<string>) => {
    setSelectedTheme(event.target.value as string);
  };

  const applyFilter = (index: number, filter: fabric.IBaseFilter) => {
    if (!img.filters) return;
    img.filters[index] = filter;
    img.applyFilters();
    canvas.renderAll();
  };

  const adjustSaturation = (value: number) => {
    setSaturation(value);
    applyFilter(0, new fabric.Image.filters.Saturation({ saturation: value }));
  };

  const adjustBrightness = (value: number) => {
    setBrightness(value);
    applyFilter(1, new fabric.Image.filters.Brightness({ brightness: value }));
  };

  const adjustExposure = (value: number) => {
    setExposure(value);
    applyFilter(2, new fabric.Image.filters.Brightness({ brightness: value }));
  };

  const adjustContrast = (value: number) => {
    setContrast(value);
    applyFilter(3, new fabric.Image.filters.Contrast({ contrast: value }));
  };

  useEffect(() => {
    if (img.filters === undefined) {
      img.filters = [];
    }

    img.filters[0] = new fabric.Image.filters.Saturation({ saturation });
    img.filters[1] = new fabric.Image.filters.Brightness({ brightness });
    img.filters[2] = new fabric.Image.filters.Brightness({ brightness: exposure });
    img.filters[3] = new fabric.Image.filters.Contrast({ contrast });

    img.applyFilters();
    canvas.renderAll();
  }, [saturation, brightness, exposure, contrast]);

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
          <div className="text-black font-medium">사진 액자로 쓸 테마 고르기</div>
          <FormControl sx={{ m: 1, width: '100%' }}>
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
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>액자 선택</em>
              </MenuItem>
              {themes.map((theme) => (
                <MenuItem
                  key={theme}
                  value={theme}
                  style={{ fontWeight: selectedTheme === theme ? 'bold' : 'normal' }}
                >
                  {theme}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {[
          { label: "밝기", value: brightness, onChange: adjustBrightness, min: -1, max: 1 },
          { label: "노출", value: exposure, onChange: adjustExposure, min: -1, max: 1 },
          { label: "대비", value: contrast, onChange: adjustContrast, min: -1, max: 1 },
          { label: "채도", value: saturation, onChange: adjustSaturation, min: -1, max: 1 },
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
