import React from 'react'
import styled from 'styled-components'

export interface AuthLayoutProps {
  bgImage?: string
  authLayout?: AuthLayoutType
}

export type AuthLayoutType = '' | 'center-full-bg' | 'full-page-left' | 'full-page-right'

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  bgImage = 'https://images.pexels.com/photos/266834/pexels-photo-266834.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  authLayout,
  children
}) => {
  return (
    <StyledAuthLayout className={`layout-${authLayout}`} bgImage={bgImage}>
      <div className='auth-container'>
        <div className='auth-form'>{children}</div>
        {
          authLayout !== 'center-full-bg'
            ? <div className='auth-image' />
            : <></>
        }
      </div>
    </StyledAuthLayout>
  )
}

export interface StyledAuthLayoutProps {
  bgImage: string
}

const StyledAuthLayout = styled.div<StyledAuthLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-dark);

  .auth-container {
    display: flex;
    align-items: stretch;
    overflow: hidden;
    background-color: var(--color-black);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    width: 900px;

    .auth-form {
      padding: 50px;
      width: 50%;
    }

    .auth-image {
      background-color: rgba(0,0,0,.25);
      background-image: url(${(props): string => { return props.bgImage }});
      background-position: center center;
      background-size: cover;
      width: 50%;
    }
  }

  &.layout-center-full-bg { 
    background-image: url(${(props): string => { return props.bgImage }});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    
    .auth-image {
      display: none;
    }

    .auth-container {
      width: 500px;
      box-shadow: 0 3px 7px var(--color-darker);

      .auth-form {
        width: 100%;
      }
    }
  }

  &.layout-full-page-left, &.layout-full-page-right {
    .auth-container {
      width: 100%;
      height: 100vh;
      border-radius: 0;

      .auth-form {
        width: 500px;
      }

      .auth-image {
        width: 100%;
      }
    }
  }

  &.layout-full-page-right {
    .auth-container {
      flex-direction: row-reverse;
    }
  }
`
