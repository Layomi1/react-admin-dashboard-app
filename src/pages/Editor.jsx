import {Header}from '../components';
import {HtmlEditor, Image, Toolbar, Link, QuickToolbar, Inject,RichTextEditorComponent} from "@syncfusion/ej2-react-richtexteditor"
import {EditorData} from "../data/dummy"

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent >
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]}/>
      </RichTextEditorComponent>
      </div>

  )
}

export default Editor