import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ConfirmationComponent } from './confirmation.component';

export default {
  title: 'Shared/Confirmation Modal',
  component: ConfirmationComponent,
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
} as Meta;

const Template: Story<ConfirmationComponent> = (args: ConfirmationComponent) => ({
  props: args,
});

export const Delete = Template.bind({});
Delete.args = {
  panelHeader: 'Delete',
  message: 'Are you sure you want to delete this?'
}

export const Edit = Template.bind({});
Edit.args = {
  panelHeader: 'Edit Group',
  message: 'Are you positive that you want to edit this Group?'
}
