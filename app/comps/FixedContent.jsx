import React from 'react';
export default class FixedContent extends React.Component {

  setFontSize() {
    var designedWidth = 750;
    let actualWidth = Math.min(450, $(window).width());
    document.documentElement.style.fontSize = actualWidth * 100 / designedWidth + 'px';
  }

  componentWillMount() {
    this.setFontSize();
  }

  componentDidMount() {
    window.addEventListener("resize", this.setFontSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setFontSize);
  }

  adjustWidth() {
    $(this.refs.content).css(this.getContentStyle());
  }

  render(){
    var {className, children, style} = this.props;
    return (
      <div ref="content" className={className} style={{...style || {}}}>
        {children}
      </div>
    );
  }
}


