import React from 'react'
import { Tooltip } from "../Tooltip"

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    type: {
      control: {
        type: 'options',
        options: {
          dark: 'dark',
          success: 'success',
          warning: 'warning',
          error: 'error',
          light: 'light'
        }
      }
    },
    places: {
      control: {
        type: 'options',
        options: {
          top: 'top',
          right: 'right',
          bottom: 'bottom',
          left: 'left'
        }
      }
    },
    effect: {
      control: {
        type: 'options',
        options: {
          float: 'float',
          solid: 'solid'
        }
      }
    },
    id: {
      control: { type: 'text' }
    },
    textColor: {
      control: { type: 'text' }
    },
    backgroundColor: {
      control: { type: 'text' }
    }
  }
}

const paraStyles = { padding: 'var(--space-md)', borderRadius: 'var(--radius)', color: 'var(--color-dark)', display: 'inline-block', backgroundColor: 'var(--color-light)', cursor: 'pointer' }

export const Default = () => (
  <>
    <p style={paraStyles} data-tip data-for='default'>Hover over me</p>
    <Tooltip id='default'>
      Hello world
    </Tooltip>
  </>
)

export const Error = () => (
  <>
    <p style={paraStyles} data-tip data-for='error'>Hover over me</p>
    <Tooltip id='error' type='error' effect='solid' place='left'>
      Hello world
    </Tooltip>
  </>
)

export const Success = () => (
  <>
    <p style={paraStyles} data-tip data-for='success'>Hover over me</p>
    <Tooltip id='success' type='success' place='bottom'>
      Hello world
    </Tooltip>
  </>
)

export const Warning = () => (
  <>
    <p style={paraStyles} data-tip data-for='warning'>Hover over me</p>
    <Tooltip id='warning' type='warning' effect='solid' place='top'>
      Hello world
    </Tooltip>
  </>
)

export const Light = () => (
  <>
    <p style={paraStyles} data-tip data-for='light'>Hover over me</p>
    <Tooltip id='light' type='light'>
      Hello world
    </Tooltip>
  </>
)