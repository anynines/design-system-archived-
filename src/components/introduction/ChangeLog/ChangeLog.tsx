import React from 'react'
import styled from 'styled-components'

export interface Change {
  title: string
  description: string
}

export type Category = Change[]

export interface ChangeLogProps {
  changelog: Category
  className?: string
  isPublished?: boolean
  date: string
  style?: React.CSSProperties
  version: string
}

export const ChangeLog: React.FC<ChangeLogProps> = ({
  className,
  changelog,
  isPublished = false,
  date,
  style,
  version
}) => {
  const renderChanges = (changes): JSX.Element => {
    return (
      changes.map((change): JSX.Element => {
        return (
          <li>
            <code>{change.title}</code>
            <br />
            <span>{change.description}</span>
          </li>
        )
      })
    )
  }

  const renderChangelog = (): JSX.Element => {
    return (
      <>
        {Object.keys(changelog).map((category): JSX.Element => {
          return (
            <>
              <h4>{category}</h4>
              <ul className='ul'>
                {renderChanges(changelog[category])}
              </ul>
            </>
          )
        })}
      </>
    )
  }

  return (
    <StyledChangeLog
      className={`change-log ${className}`}
      style={style}
      date={date}
      version={version}
    >
      <div className='change-log--header'>
        <h3>{version}</h3>
        <div className='change-log--tag-wrapper'>
          {isPublished
            ? <span className='success'>Published</span>
            : <span className='notice'>Unpublished</span>}
          <span>{date}</span>
        </div>

      </div>
      {renderChangelog()}
    </StyledChangeLog>
  )
}

const StyledChangeLog = styled.div`
  background-color: var(--color-black);
  border-radius: var(--radius);
  border: var(--border);
  padding: 30px;
  margin-bottom: 30px;

  .change-log--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: var(--border);
    margin-bottom: 30px;
    padding-bottom: 15px;

    h3 {
      margin-bottom: 0;
    }

    h4 {
      margin-bottom: 15px;
    }

    span {
      font-size: 12px;
      font-weight: var(--font-weight-rg);
      padding: 4px 8px;
      background: rgba(0,0,0,.5);
      border-radius: calc(var(--radius) / 2);
      margin-left: 10px;

      &.notice {
        background-color: var(--color-notice);
      }

      &.success {
        background-color: var(--color-success);
      }
    }
  }

  ul {
    margin-bottom: 30px;
    list-style-type: none;

    li {
      margin: 15px 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  code {
    background-color: rgba(0,0,0,.5);
  }
`
