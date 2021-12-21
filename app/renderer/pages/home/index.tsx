import { Button, message } from 'antd'
import React, { memo } from 'react'
import path from 'path'

// import vizHtml from '@viz'
console.log(`file://${path.resolve()}/app/viz/test.js`)

// console.log(vizHtml)

export default memo(function HomePage() {
  return (
    <div>
      <Button onClick={() => message.info('info----')}>+++++++2</Button>
      <webview
        src={`file://${path.resolve()}/app/viz/index.html`}
        style={{
          height: 800
        }}
      />
    </div>
  )
})
