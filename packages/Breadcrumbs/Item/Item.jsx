import React from 'react'
import PropTypes from 'prop-types'

import Link from '@tds/core-link'
import Text from '@tds/core-text'
import { media } from '@tds/core-responsive'
import colours from '@tds/core-colours/colours'

import joinClassNames from '../../../shared/utils/joinClassNames'
import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'
import typography from '../../../shared/styles/Typography/typography'

import linkStyles from '../../Link/Link.modules.scss'

const styles = {
  item: {
    display: 'inline',
    ...typography.sizes.small,
    ...media.from('md')({
      ...typography.sizes.medium,
    }),
  },
  linkItem: {
    color: colours.shuttleGrey,
  },
  lastItem: {
    color: colours.telusPurple,
    fontWeight: 700,
  },
  slash: {
    margin: '0 0.5rem',
  },
}

const Item = ({ href, reactRouterLinkComponent, children, current, ...rest }) => {
  const linkOptions = { ...rest }
  if (reactRouterLinkComponent) {
    linkOptions.to = href
    linkOptions.reactRouterLinkComponent = reactRouterLinkComponent
  } else {
    linkOptions.href = href
  }
  return (
    <ColoredTextProvider
      tag="li"
      colorClassName={[styles.item, current ? styles.lastItem : styles.linkItem]}
    >
      {current ? (
        <Text className={joinClassNames(linkStyles.base, linkStyles.inheritColor)}>{children}</Text>
      ) : (
        <span>
          <Link {...linkOptions}>{children}</Link>
          <span css={[styles.item, styles.slash]} aria-hidden="true">
            /
          </span>
        </span>
      )}
    </ColoredTextProvider>
  )
}

Item.propTypes = {
  /**
   * Target URL.
   */
  href: PropTypes.string.isRequired,
  /**
   * @ignore
   *
   * React Router Link component. The reactRouterLinkComponent property will be passed down from from the parent `<Breadcrumbs>`.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Breadcrumb text
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   *
   * Indicates whether or not the Item should be as current/activ
   */
  current: PropTypes.bool,
}

Item.defaultProps = {
  reactRouterLinkComponent: undefined,
  current: false,
}

export default Item
