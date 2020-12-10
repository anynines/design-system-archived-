import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface AnimationProps {
  className?: string
  infinite?: boolean
  style?: React.CSSProperties
  type: AnimationName
}

// T Y P E S
export type AnimationName = 'bounce' | 'fadeIn' | 'fadeOut' | 'pulse' | 'rotate' | 'shake' | 'slideInDown'

// C O M P O N E N T
export const Animation: React.FC<AnimationProps> = ({
  children,
  className,
  infinite = false,
  style,
  type
}) => {
  return (
    <StyledAnimation
      className={`animation ${className} ${type} ${infinite}`}
      style={style}
      infinite={infinite}
    >
      {children}
    </StyledAnimation>
  )
}

// S T Y L E S
const StyledAnimation = styled.div`
  --infinite-animation: ${(props): string => { return props.infinite ? 'infinite' : '' }};

  &.bounce {
    animation: bounce 3s var(--infinite-animation);

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-30px); }
      60% { transform: translateY(-15px); }
    }
  }

  &.fadeIn {
    animation: fadeIn 3s ease;
  
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  }

  &.fadeOut {
    animation: fadeOut 2.5s ease;
  
    @keyframes fadeOut {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }
  }

  &.pulse {
    animation: pulse 2s ease var(--infinite-animation);

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
  }

  &.rotate {
    animation: rotate 4s linear ;
    transform-origin: center;
  
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &.shake {
    animation: shake 3s var(--infinite-animation);
  
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(10px);
      }
    }
  }

  .slideInDown {
    animation: slideInDown;
    
    @keyframes slideInDown {
      from {
        transform: translate3d(0, -100%, 0);
        visibility: visible;
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`
