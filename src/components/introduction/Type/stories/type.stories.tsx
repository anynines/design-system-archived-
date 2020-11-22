import React from 'react'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '👋 Get started/ Type Scale',
  parameters: {
    docs: { 
        description: { 
            component: 'Lorem ipsum dolor sit amet'
        } 
    },
  }
}

export const BaseType = () => (
  <Wrapper
    direction='column'
    justify='flex-start'
    align='flex-start'
    height='auto'
  >
    <h1>Headline One</h1>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen.</p>

    <hr/>

    <h2>Headline Two</h2>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen.</p>
    
    <hr/>
    
    <h3>Headline Three</h3>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen.</p>

    <hr/>
    
    <h4>Headline Four</h4>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen.</p>

    <hr/>

    <h5>Headline Five</h5>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen.</p>

    <hr/>
    
    <h6>Headline Six</h6>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen. In Lateinisch sieht zum Beispiel fast jede Schrift gut aus. Quod erat demonstrandum.</p>

    <hr/>
    
    <h4>Code Snippets</h4>
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen. <code>In Lateinisch sieht zum Beispiel</code> fast jede Schrift gut aus. Quod erat demonstrandum.</p>
    <pre>
      <code>
        Some example code goes here
      </code>
    </pre>

    <hr />
    
    <h4>Ordered List</h4>
    <ol className='ol'>
      <li>Some hot ordered item</li>
      <li>Another fresh numbered item</li>
      <li>The last but not the least ordered item</li>
    </ol>

    <hr />
    
    <h4>Unordered List</h4>
    <ol className='ul'>
      <li>Some hot ordered item</li>
      <li>Another fresh numbered item</li>
      <li>The last but not the least ordered item</li>
    </ol>
  </Wrapper>
)

export const Headlines = () => (
  <Wrapper
    direction='column'
    justify='flex-start'
    align='flex-start'
    height='auto'
  >
    <h1>Headline One</h1>
    <hr/>
    <h2>Headline Two</h2>
    <hr/>
    <h3>Headline Three</h3>
    <hr/>
    <h4>Headline Four</h4>
    <hr/>
    <h5>Headline Five</h5>
    <hr/>
    <h6>Headline Six</h6>
  </Wrapper>
)

export const Paragraph = () => (
  <Wrapper
    direction='column'
    justify='flex-start'
    align='flex-start'
    height='auto'
  >
    <p>Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning), um die Wirkung in anderen Sprachen zu testen. In Lateinisch sieht zum Beispiel fast jede Schrift gut aus. Quod erat demonstrandum.</p>
  </Wrapper>
)

export const OrderedList = () => (
  <Wrapper
    direction='column'
    justify='flex-start'
    align='flex-start'
    height='auto'
  >
    <ol className='ol'>
      <li>Some hot ordered item</li>
      <li>Another fresh numbered item</li>
      <li>The last but not the least ordered item</li>
    </ol>
  </Wrapper>
)

export const UnorderedList = () => (
  <Wrapper
    direction='column'
    justify='flex-start'
    align='flex-start'
    height='auto'
  >
    <ol className='ul'>
      <li>Some hot ordered item</li>
      <li>Another fresh numbered item</li>
      <li>The last but not the least ordered item</li>
    </ol>
  </Wrapper>
)

export const CodeSnippets = () => (
  <Wrapper
    direction='column'
    justify='flex-start'
    align='flex-start'
    height='auto'
  >
    <p>You can also use code snippets inside a paragraph <code>Some inline code</code> just this simple</p>
    <pre>
      <code>
        Some example code goes here
      </code>
    </pre>
  </Wrapper>
)