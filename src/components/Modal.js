const styled = require ('react-emotion').default;
let React = require("react");
let {Color, Text} = require("scenegraph");

const FormModal = styled('div')`
  width: 350px;
`;


module.exports = class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.applyStyle = this.applyStyle.bind(this);
    this.onFormClick = this.onFormClick.bind(this);
  }

  applyStyle() {
    let text;
    this.props.selection.items.forEach((node) => {
        if (node instanceof Text) {
            if (!text) {
                text = node;
            }
        }
    });
    if (text) {
        text.styleRanges = [{
            length: text.text.length,
            fontFamily: 'Impact',
            fontStyle: 'Regular',
            fontSize: 40,
            charSpacing: 0,
            underline: false,
            fill: new Color("#fff")
        }];
        text.stroke = new Color("#000");
        text.strokeEnabled = true;
        text.strokeWidth = 1;
    }
  }

  async onFormClick(e) {
    await this.applyStyle();
    this.props.dialog.close("ok");
  };

  render() {
      return (
          <FormModal>
              <h1>Prototypo integration test</h1>
              <p>On va changer ce style de font</p>
              <footer>
                  <button type="submit" uxp-variant="cta" onClick={this.onFormClick}>C'est parti</button>
              </footer>
          </FormModal>
      );
  }
}