import React from 'react'
import NextLink from 'next/link'
import classNames from 'classnames'

import classes from './Link.styles.scss'

function Link({to = '/', className = '', children, ...customProps}) {
  const targetProps = to.startsWith('/') ? {} : {target: '_blank', rel: 'noopener noreferrer'}

  return (
    <NextLink href={to} {...customProps}>
      <a className={classNames(classes.link, className)} {...targetProps}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
