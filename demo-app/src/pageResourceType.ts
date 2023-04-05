import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { pageView, PageIcon } from './pageView';

function pageResourceType(ctx: IPublicModelPluginContext) {
  return {
    category: '页面',
    defaultViewType: 'page',
    defaultTitle: window?.pageConfig?.title,
    editorViews: [pageView],
    icon: PageIcon,

    async init() {
      // 注册应用级插件
    },
  };
}

pageResourceType.resourceName = 'page';
pageResourceType.resourceType = 'editor';

export default pageResourceType;
