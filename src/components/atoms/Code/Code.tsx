import React from 'react'
import styled from 'styled-components'
import Highlight from 'react-highlight.js'

export interface CodeProps {
  language?: string
  code?: string
  className?: string
  style?: React.CSSProperties
}

export const Code: React.FC<CodeProps> = ({
  language = 'html',
  code,
  className,
  style,
  children
}) => {
  return (
    <StyledCode style={style} className={className}>
      <div className='language-label'>
        <span>{ language }</span>
      </div>
      <Highlight language={language}>
        { code || children }
      </Highlight>
    </StyledCode>
  )
}

const StyledCode = styled.div`
  position: relative;
  background-color: var(--color-black);
  border: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  width: 100%;

  pre {
    display: block;
    padding: var(--space-lg);
    width: 100%;
    font-size: var(--text-lg);
    max-width: 100%;
    overflow-x: auto;
    margin: 0;
  }

  .language-label {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--color-white-10);
    padding: 8px;
    font-size: var(--text-sm);
  }

  .hljs {
    color: #abb2bf;
    background-color: var(--color-black);
  }
  
  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }
  
  .hljs-doctag,
  .hljs-formula,
  .hljs-keyword {
    color: #c678dd;
  }
  
  .hljs-deletion, 
  .hljs-name, 
  .hljs-section, 
  .hljs-selector-tag, 
  .hljs-subst {
    color: #e06c75;
  }
  
  .hljs-literal {
    color: #56b6c2;
  }
  
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string,
  .hljs-regexp,
  .hljs-string {
    color: #98c379;
  }
  
  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }
  
  .hljs-attr,
  .hljs-number,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-pseudo,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable {
    color: #d19a66;
  }
  
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-symbol,
  .hljs-title {
    color: #61aeee;
  }
  
  .hljs-emphasis {
    font-style: italic;
  }
  
  .hljs-strong {
    font-weight: 700;
  }
  
  .hljs-link {
    text-decoration:underline
  }
`
