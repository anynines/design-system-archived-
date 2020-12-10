import React from 'react'
import styled from 'styled-components'

export interface CodeProps {
  className?: string
  code?: string
  language?: string
  style?: React.CSSProperties
}

export const Code: React.FC<CodeProps> = ({
  children,
  className,
  code,
  language = 'html',
  style
}) => {
  return (
    <StyledCode style={style} className={`code-wrapper ${className}`}>
      <div className='language-label'>
        <span>{language}</span>
      </div>
      <pre>
        <code>
          {code || children}
        </code>
      </pre>
    </StyledCode>
  )
}

const StyledCode = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-xl);
  border: var(--border);
  background-color: var(--color-black);
  width: 100%;
  border-radius: var(--radius);

  pre {
    display: block;
    margin: 0;
    padding: var(--space-lg);
    width: 100%;
    font-size: var(--text-lg);
    max-width: 100%;
    overflow-x: auto;
  }

  .language-label {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--color-white-10);
    padding: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-bd);
    border-radius: var(--radius) 0 0 0;
  }

  .hljs {
    background-color: var(--color-black);
    color: #abb2bf;
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
  
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-symbol,
  .hljs-title {
    color: #61aeee;
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
