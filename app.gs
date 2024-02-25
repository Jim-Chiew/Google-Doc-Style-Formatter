//persistant storing of attributes settings
const documentProperties = PropertiesService.getDocumentProperties();


function onOpen() {
  DocumentApp.getUi()
  .createMenu('Styles')
  .addItem('Format Code', 'formatCode')
  .addItem('Set Format', 'setFormat')
  .addToUi();
}


let style = {};
// check if document property is already set
if (Object.keys(documentProperties.getProperties()).length != 0){
  style = documentProperties.getProperties();
} else {
  // Define default code styling
  style[DocumentApp.Attribute.FONT_FAMILY] = "Roboto Mono;500";
  style[DocumentApp.Attribute.FONT_SIZE] = 8;
  style[DocumentApp.Attribute.FOREGROUND_COLOR] = "#990000";
}


// Apply code formatting
function formatCode() {
  let selection = DocumentApp.getActiveDocument().getSelection();
  if (selection) {
    let elements = selection.getRangeElements();
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      // Only modify text.
      if (element.getElement().editAsText) {
        let text = element.getElement().editAsText();

        // style element even if its partially selected
        if (element.isPartial()) {
          text.setAttributes(element.getStartOffset(), element.getEndOffsetInclusive(), style);
        } else {
          text.setAttributes(style);
        }
      }
    }
  }
}

// get attribute from current text.
function setFormat(){
  // get attribute from cursor
  if (DocumentApp.getActiveDocument().getCursor()){
    let inferred_text = DocumentApp.getActiveDocument().getCursor().getElement().getAttributes();
    set_format_attribute(inferred_text);

  // get attribute from selection
  } else if (DocumentApp.getActiveDocument().getSelection()){
    let inferred_text = DocumentApp.getActiveDocument().getSelection().getRangeElements()[0].getElement().asText().getAttributes();
    set_format_attribute(inferred_text);
  }
}

function set_format_attribute(inferred_text){
  prompt(inferred_text, DocumentApp.Attribute.FONT_FAMILY, String, "Enter font Family name", "Example: Roboto Mono\n\nCancel to not set")
  prompt(inferred_text, DocumentApp.Attribute.FONT_SIZE, Number, "Enter font size", "Example: 12.5\n\nCancel to not set")
  prompt(inferred_text, DocumentApp.Attribute.FOREGROUND_COLOR, String, "Enter text colour(hex code)", "Example: #990000\n\nCancel to not set")
  prompt(inferred_text, DocumentApp.Attribute.BACKGROUND_COLOR, String, "Enter background colour(hex code)", "Example: #990000\n\nCancel to not set")
  prompt(inferred_text, DocumentApp.Attribute.BOLD, Boolean, "Set Bold", "1 or cencle to not set")
  prompt(inferred_text, DocumentApp.Attribute.ITALIC, Boolean, "Set Italic", "1 or cencle to not set")
  prompt(inferred_text, DocumentApp.Attribute.STRIKETHROUGH, Boolean, "Set Strike through", "1 or cencle to not set")

}

//prompt user if unable to get attribute due to current bug with apps scripts
function prompt(inferred_text, attribute, attribute_format, prompt_title, prompt_message){
  let ui = DocumentApp.getUi();

  // check if able to get actually inferred text property. if yes yet that is the property
  if(!inferred_text[attribute]){
    // if unable to get, prompt user to meanually enter value.
    let prompt = ui.prompt(prompt_title, prompt_message, ui.ButtonSet.OK_CANCEL);
    let response_value = prompt.getResponseText();

    // if value is not set delete propertie.
    if (response_value === "" || prompt.getSelectedButton() === ui.Button.CANCEL){
      documentProperties.deleteProperty(attribute);
    } else {
      documentProperties.setProperty(attribute, attribute_format(response_value));
    }
  } else {
    documentProperties.setProperty(attribute, inferred_text[attribute]);
  }
}
