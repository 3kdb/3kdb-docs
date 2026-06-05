// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        'getting-started/installation',
        'getting-started/first-character',
        'getting-started/connecting',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/loading-chain',
      ],
    },
    {
      type: 'category',
      label: 'Command Reference',
      link: { type: 'doc', id: 'reference/index' },
      items: [
        'reference/misc',
        'reference/combat',
        'reference/corpse',
        'reference/bot',
        'reference/trackers',
        'reference/mapping',
        'reference/mip',
        'reference/crafting',
        'reference/eternal',
        'reference/rolm',
        'reference/guild',
        'reference/profession',
        'reference/chaos',
        'reference/fantasy',
        'reference/science',
        'reference/debug',
      ],
    },
    {
      type: 'category',
      label: 'Systems Deep Dive',
      items: [
        'common/actions',
        'common/events',
        'common/toggles',
        'common/strategy',
        'common/heartbeat',
      ],
    },
    {
      type: 'category',
      label: 'Guilds',
      items: [
        'guilds/overview',
        'guilds/structure',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/overview',
        'modules/mip',
        'modules/crafting',
        'modules/dmgtracker',
        'modules/map',
        'modules/deadman',
      ],
    },
    {
      type: 'category',
      label: 'Bots & Automation',
      items: [
        'bots/overview',
      ],
    },
    {
      type: 'category',
      label: 'Scripts',
      items: [
        'scripts/discord',
      ],
    },
  ],
};

module.exports = sidebars;
