import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { LoaderComponent } from './loader.component';

export default {
  title: 'Shared/Loader',
  component: LoaderComponent,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500
    }
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    loadingColor: { control: 'color' }
  }
} as Meta;

const Template: Story<LoaderComponent> = (args: LoaderComponent) => ({
  props: args,
});

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  loadingColor: '#869d7a'
}
