import { coloData, colorMappingData } from "../data/dummy";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor = args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-2">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-2">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
