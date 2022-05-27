import React,{useState,useEffect} from "react";

import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

 const Change = (args) => {
      document.getElementById('preview').style.backgroundColor = args.currentValue.hex
      
    }

const ColorP = () => {
  const [Color, setColor] = useState()


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" >{} </div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="font-2x1 mt-2 mb-4 font-semibold">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={Change}
            />
          </div>
          <div>
            <p className="font-2x1 mt-2 mb-4 font-semibold">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              change={Change}
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorP;
