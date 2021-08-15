import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

import './index.css'

const ReactTypingComponent = (props) => {
  const { typingText } = props

  return (
    <ReactTypingEffect
      text={typingText}
      cursorRenderer={(cursor) => <h1>{cursor}</h1>}
      displayTextRenderer={(text, i) => {
        return (
          <div class="about-container">
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`
                return (
                  <span key={key} style={i % 2 === 0 ? { color: 'magenta' } : {}}>
                    {char}
                  </span>
                )
              })}
            </h1>
          </div>
        )
      }}
    />
  )
}

export default ReactTypingComponent
