// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  horizon: [
    {
      type: 'category',
      label: 'Horizon',
      items: [
        {
          type: "autogenerated",
          dirName: "horizon",
        },
      ],
      collapsible: false,
    },
  ],
  anchor_platform: [
    {
      type: 'category',
      label: 'Anchor Platform',
      items: [
        {
          type: "autogenerated",
          dirName: "anchor-platform",
        },
      ],
    },
  ],
  stellar_disbursement_platform: [
    {
      type: "category",
      label: "Stellar Disbursement Platform",
      items: [
        {
          type: "autogenerated",
          dirName: "stellar-disbursement-platform",
        },
      ],
    },
  ],
  soroban_rpc: [
    {
      type: "category",
      label: "Soroban RPC",
      items: [
        {
          type: 'category',
          label: 'Introduction',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'doc',
            id: 'soroban-rpc/README',
          },
          items: [
            'soroban-rpc/goals',
            'soroban-rpc/anti-goals',
            'soroban-rpc/json-rpc',
            'soroban-rpc/pagination',
          ]
        },
        {
          type: 'category',
          label: 'Methods',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'generated-index',
            slug: 'soroban-rpc/methods'
          },
          items: [
            {
              type: "autogenerated",
              dirName: "soroban-rpc/methods",
            },
          ]
        },
      ],
    },
  ],
}

module.exports = sidebars;