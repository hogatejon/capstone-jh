import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { OrganizationComponent } from 'src/app/fishing-org/organization/organization.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FishingOrgComponent } from './fishing-org.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import withMock from 'storybook-addon-mock';

export default {
  title: 'Pages/Organization',
  component: FishingOrgComponent,
  decorators: [
    moduleMetadata({
      declarations: [OrganizationComponent, LoaderComponent],
      imports: [CommonModule, RouterTestingModule, HttpClientModule],
    }),
    withMock
  ],
} as Meta;

const Template: Story<OrganizationComponent> = (args: OrganizationComponent) => ({
  props: args,
});

export const AllOrgs = Template.bind({});
AllOrgs.args = {
  altText: false,
  darkMode: false
}

export const DarkMode = Template.bind({});
DarkMode.args = {
  altText: false,
  darkMode: true
}
