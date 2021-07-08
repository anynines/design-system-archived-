import React from 'react'
import styled from 'styled-components'

// T Y P E S
import { CardAuthorProps, CardAuthor } from './CardAuthor'

// I N T E R F A C E
export interface SlideItemContentProps {
  title: string
  authors: CardAuthorProps[]
}

// C O M P O N E N T
export const SlideItemContent: React.FC<SlideItemContentProps> = (props) => {
  const { title, authors } = props

  return (
    <StyledSliderContent>
      <div className='card-content-wrapper'>
        <h1>{title}</h1>
        <div className='card-author-wrapper'>
          {
            authors.map((author, index) => {
              return (
                <CardAuthor
                  key={author.username + index.toString()}
                  className='card-author no-padding'
                  userGroup={author.userGroup}
                  username={author.username}
                  avatarUrl={author.avatarUrl}
                />
              )
            })
          }
        </div>
      </div>
    </StyledSliderContent>
  )
}

// S T Y L E S
const StyledSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.80;
  background-color: var(--color-dark);
  padding: var(--space-lg);
  width: 80%;
  height: 100%;
  
  .card-content-wrapper {
    margin: var(--space-lg);

    h1 {
      margin-bottom: var(--space-xs);
      line-height: calc(var(--heading-line-height) * 1.5);
    }

    .card-author-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      .card-author:not(:last-child) {
        margin-right: var(--space-md);
      }
    }
  }
`
