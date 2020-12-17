import React from 'react'
import styled from 'styled-components'

// L I B R A R Y
import { Button } from '../../atoms/Button/Button'
import { Icon } from '../../atoms/Icon/Icon'

// I N T E R F A C E S
export interface ImageProps {
  settingsVerticalLogo: string | undefined
  settingsHorizontalLogo: string | undefined
  settingsAppLogo: string | undefined
}

export interface ImageUploaderProps {
  addToFormData: (url: string | undefined, id: string) => void
  alt: string
  className?: string
  defaultValue?: string | undefined
  id: string
  images: ImageProps
  label: string
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  addToFormData,
  alt,
  className,
  defaultValue,
  id,
  label
}) => {
  const [currentImage, setCurrentImage] = React.useState<string | undefined>(defaultValue)

  const getUrl = (file: File): Promise<string | ArrayBuffer> => {
    return new Promise((res, rej) => {
      const reader: FileReader = new FileReader()
      reader.onload = (): void => {
        const str: string | null | ArrayBuffer = reader.result
        res(str as string)
      }
      reader.onerror = (e): void => { rej(e) }
      reader.readAsDataURL(file)
    })
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const target = e.target as HTMLInputElement
    let url = ''
    if (target.files !== null) {
      const [file] = target.files
      url = await getUrl(file) as string
    }
    addToFormData(url, id)
    setCurrentImage(url)
  }

  const handleUploadClick = (): void => {
    const elem = document.getElementById(id)
    if (elem !== null) elem.click()
  }
  React.useEffect(() => {
    addToFormData(defaultValue || '', id)
    setCurrentImage(defaultValue)
  }, [addToFormData, defaultValue, id])

  return (
    <StyledImageInput className={`image-uploader ${className}`}>
      <span>{label}</span>
      {currentImage ? <img src={currentImage} alt={alt} /> : <Icon icon='placeholder' />}
      <input type='file' id={id} onChange={handleChange} />
      <Button type='primary' onClick={handleUploadClick}>
        <span>
          Upload
        </span>
      </Button>
    </StyledImageInput>
  )
}

// S T Y L E S
const StyledImageInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 var(--space-lg);
  margin-bottom: var(--space-xl);
  background-color: var(--color-dark-50);
  border-radius: var(--radius);
  flex: 1;
  padding: var(--space-md);

  &:not(:last-child){
    margin-right: var(--space-md);
  }

  span {
    text-align: center;
    color: var(--color-light);
    font-size: var(--text-md);
    font-weight: var(--font-weight-bd);
  }

  svg, img {
    margin: var(--space-xl) var(--space-xl);
    width: auto;
    height: 3.75rem;
    max-width: 15.625rem;
  }

  img {
    display: block;
  }

  input[type=file] {
    display: none;
  }

  .btn {
    width: auto;
  }
`
