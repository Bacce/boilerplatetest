module.exports = {
  "stories": [
    "../src/stories/*/*.story.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/theming",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}