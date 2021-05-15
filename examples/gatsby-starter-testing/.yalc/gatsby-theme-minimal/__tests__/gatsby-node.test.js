import React from "react"
import { jest } from "@jest/globals"

import gatsbyNode from "../gatsby-node"

describe(`Gatsby Node`, () => {
  it(`onPreInit logs successfully`, () => {
    const gatsbyNodeHelpers = {
      reporter: {
        info: jest.fn(),
      },
    }
    const themeOptions = {
      optionA: `valueA`,
    }

    gatsbyNode.onPreInit(gatsbyNodeHelpers, themeOptions)

    expect(gatsbyNodeHelpers.reporter.info.mock.calls.length).toBe(2)
    expect(gatsbyNodeHelpers.reporter.info.mock.calls[0][0]).toBe(
      `Logging to the console from "packages/gatsby-theme-minimal" with themeOptions:`
    )
    expect(gatsbyNodeHelpers.reporter.info.mock.calls[1][0])
      .toMatchInlineSnapshot(`
      "{
       \\"optionA\\": \\"valueA\\"
      }"
    `)
  })
})
