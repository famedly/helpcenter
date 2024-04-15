/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  helpcenterSidebar: [
    {
      type: 'category',
      label: 'Welcome to Famedly',
      link: { type: 'doc', id: 'help-center/first-steps/index' },
      items: [{ type: 'autogenerated', dirName: 'help-center/first-steps' }],
    },
    {
      type: 'category',
      label: 'Using Famedly',
      link: { type: 'doc', id: 'help-center/using-famedly/index' },
      items: [{ type: 'autogenerated', dirName: 'help-center/using-famedly' }],
    },
    {
      type: 'category',
      label: 'Your account',
      link: { type: 'doc', id: 'help-center/your-account/index' },
      items: [{ type: 'autogenerated', dirName: 'help-center/your-account' }],
    },
    {
      type: 'category',
      label: 'Administration',
      link: { type: 'doc', id: 'help-center/administration/index' },
      items: [{ type: 'autogenerated', dirName: 'help-center/administration' }],
    },
    {
      type: 'category',
      label: 'TIM Features',
      link: { type: 'doc', id: 'help-center/tim-features/index' },
      items: [{ type: 'autogenerated', dirName: 'help-center/tim-features' }],
    }
  ],
  apiSidebar: ['api/index', { type: 'autogenerated', dirName: 'api' }],
};

module.exports = sidebars;

