import { Button, Modal } from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";

export const IconSelector = (props) => {
  const { isOpen, closeModal, setIcon, hasColorChoice } = props;
  const [icons, setIcons] = useState([]);
  const colors = wp.data.select( "core/editor" ).getEditorSettings().colors;
  const getColor = value => wp.blockEditor.getColorObjectByColorValue(colors,value);
  const [color, setColor] = useState(colors[0] || 'primary-7OO');

  const [inputValue, setInputValue] = useState('');
  const [iconsFiltered, setIconsFiltered] = useState(icons);
  const handleInputChange = event => setInputValue(event.target.value);
  useEffect(() => { setIconsFiltered( icons.filter(icon => icon.toLowerCase().includes(inputValue.toLowerCase()))); }, [inputValue]);
  
  useEffect(() => {
    const iconRules = [...[...document.styleSheets]
      .find(s => [...s.rules]
      .find(r => r.selectorText && r.selectorText.includes(".icon."))).rules]
      .filter(e => e.selectorText && e.selectorText.includes(".icon."))
      .map(e => e.selectorText.split(".icon.")[1].split(",")[0]);
    setIcons(iconRules);
    setIconsFiltered(iconRules);
  }, []);

  const getContrastColor = bgColor => {
    if (!bgColor) { return ''; }
    bgColor = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(bgColor.substring(0, 2), 16); // Red
    const g = parseInt(bgColor.substring(2, 4), 16); // Green
    const b = parseInt(bgColor.substring(4, 6), 16); // Blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? 'black' : 'white';
  }


  return (
    <>
      { isOpen  && (
        <Modal 
          title={ "🚀 Liste des icones" } 
          onRequestClose={ closeModal }
        >
          { hasColorChoice
            ? <div className="icons-color-palette">
                <ColorPalette
                  disableCustomColors={ true }
                  value={ color?.color || '#OOOOOO' }
                  onChange={ (value) => { setColor(getColor(value)); } }
                  clearable={ false }
                />
                <input 
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Rechercher une icone..." style={{
                    width: "100%",
                    marginTop: 16,
                    padding: 8
                  }}
                />
              </div>
            : <></>
          }
          <div
            className="icons editor-styles-wrapper"
            style={{ 
              "display" : "flex",
              "flexWrap" : "wrap",
              "overflow" : "scroll",
              "padding" : ".75rem",
              "border": "1px solid gray",
              background: getContrastColor(color?.color || "000000")
            }}
          >
            {iconsFiltered.filter((_, index) => index % 2 === 0).map((name, index) => (
              /** On éviter les doubles d'icones car l'ajout de is-style-couleurs-originales ajouter un doublon dans ce tableau */
              <Button
                name={ name }
                title={ name }
                type="button"
                key={ name }
                onClick={() => {
                  closeModal();
                  setIcon(name, wp.editor.getColorClassName("background-color", color?.slug || 'primary-700' ));
                }}
                style={{
                  "width": "2.35rem",
                  "height": "2.35rem"
                }}
              >
                <i className={`icon ${name} ${wp.editor.getColorClassName("background-color", color?.slug || 'primary-700' )}` } aria-hidden="true">{ name }</i>
              </Button>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}