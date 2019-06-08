import React from 'react'
import './ExpansionPanel.css'
 
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
const myStyle = {...vs2015, hljs: {...vs2015.hljs, padding: '1em', margin: '1.5em', 'border-radius': '6px'}}

SyntaxHighlighter.registerLanguage('javascript', js);

console.log(vs2015);

class ExpansionPanel extends React.Component {

  state = {
    expanded: false
  }

  handleExpandToggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <div className={'exPanel'}>
        <h3 onClick={this.handleExpandToggle}>{this.props.title}</h3>
        <img src='triangle.svg' alt='expand' className='triangle' />
        <div>
        {this.state.expanded ? <SyntaxHighlighter
          language='javascript'
          style={myStyle}>
          {this.props.snippet}
        </SyntaxHighlighter> : null}
        </div>
      </div>
    )
  }
};

export default ExpansionPanel;