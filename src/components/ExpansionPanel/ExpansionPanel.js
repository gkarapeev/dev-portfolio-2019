import React from 'react'
import './ExpansionPanel.css'
import triangle from '../../img/triangle.svg'
import Paper from '../Paper/Paper'
 
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
const myStyle = {...vs2015, hljs: {...vs2015.hljs, background: '#323232', padding: '2em', margin: '1.5em', 'border-radius': '6px'}}

SyntaxHighlighter.registerLanguage('javascript', js);

class ExpansionPanel extends React.Component {

  state = {
    expanded: false
  }

  handleExpandToggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <Paper bg='white' classes={['exPanel']}>
        <h3 onClick={this.handleExpandToggle}>{this.props.title}</h3>
        <img src={triangle} alt='expand' className='triangle' onClick={this.handleExpandToggle}/>
        {this.state.expanded ?
          <div className='snippetCont'>
            <p>Example Code</p>
            <SyntaxHighlighter
              language='javascript'
              style={myStyle}>
              {this.props.snippet}
            </SyntaxHighlighter>
          </div>
          : null
        }
      </Paper>
    )
  }
};

export default ExpansionPanel;