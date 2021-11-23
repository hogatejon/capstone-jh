import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MessageComponent } from './message.component';
import { Message } from './Message';



export default {
  title: 'Shared/Toast Messages',
  component: MessageComponent,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500
    }
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ],
} as Meta;

const Template: Story<MessageComponent> = (args: MessageComponent) => ({
  props: args,
});

export const Success = Template.bind({});
Success.args = {
  message: new Message('Success', 'You Successfully did something!', 'success')
}

export const Error = Template.bind({});
Error.args = {
  message: new Message('Error', 'You messed something up!', 'error')
}

export const Warning = Template.bind({});
Warning.args = {
  message: new Message('Warning', 'You may have messed something up!', 'warn')
}
