import { init, workspace } from '@alilc/lowcode-engine';
import { IPublicResourceList } from '@alilc/lowcode-types';
import pageResourceType from './pageResourceType';
import { pluginDemo } from './plugins/app-view';

import './global.scss';

(async function main() {
  workspace.registerResourceType(pageResourceType);
  workspace.setResourceList([
    {
      title: '123',
      name: 'demo1',
      type: 'webview',
      category: '123',
      icon: 'icon',
      options: {},
      resourceName: 'page',
    },
  ]);
  console.log(workspace.isActive, workspace.resourceList);
  await workspace.plugins.register(pluginDemo);

  init(undefined, {
    enableWorkspaceMode: true,
  });
})();
