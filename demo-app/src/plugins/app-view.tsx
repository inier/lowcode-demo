import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { logo } from '@alilc/lce-graph-tools';
import { init, workspace } from '@alilc/lowcode-engine';

const TopContent = (ctx: IPublicModelPluginContext) => {
  return <div>APP TopArea </div>;
};
const LeftContent = () => {
  console.log(workspace.resourceList);
  return 'App-dev Left Content';
};
const RightContent = () => {
  return 'App-dev Right Content';
};

export function pluginDemo(ctx: IPublicModelPluginContext) {
  const { skeleton } = ctx;
  return {
    async init() {
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'TopTT',
        props: {
          align: 'left',
          width: 800,
        },
        index: -1,
        content: TopContent,
        contentProps: {
          ctx,
        },
      });
      skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'LeftTT',
        props: {
          align: 'left',
          width: 200,
          icon: 'zujianku',
        },
        index: -1,
        content: LeftContent,
        contentProps: {
          ctx,
        },
      });
      await ctx.plugins.register(logo);
    },
  };
}

pluginDemo.pluginName = 'pluginDemo';
