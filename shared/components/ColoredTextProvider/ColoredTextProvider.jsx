import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Styled = styled.div``

class ColoredTextProvider extends React.Component {
  getChildContext() {
    return {
      inheritColor: true,
    }
  }

  render() {
    const { colorClassName, tag, children } = this.props

    if (typeof colorClassName === 'object') {
      return (
        <Styled css={colorClassName} as={tag}>
          {children}
        </Styled>
      )
    }

    return React.createElement(tag, { className: colorClassName }, children)
  }
}

ColoredTextProvider.propTypes = {
  colorClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ColoredTextProvider.defaultProps = {
  tag: 'div',
}

ColoredTextProvider.childContextTypes = {
  inheritColor: PropTypes.bool,
}

export default ColoredTextProvider
