import {Meta, Story} from "@storybook/react";
import { Col, colProps, GridContainer } from "../../components/Layout";
import { Placeholder } from "../../components/Placeholder";

export default {
  title: 'Components/Layout/Column',
  component: Col,
  parameters: {
    docs: {
      description: {
        component: 'Column'
      }
    }
  },
  argTypes: {
    sm: {control: { type: 'select' },},
    md: {control: { type: 'select' },},
    lg: {control: { type: 'select' },},
  },

} as Meta;
  
const Template: Story<colProps> = (args:colProps) => <GridContainer>
  {[...Array(12)].map(()=>(<Col sm={args.sm} md={args.md} lg={args.lg}>
    <Placeholder/>
  </Col>))}
</GridContainer>;

export const Default = Template.bind({});

Default.args = {
  sm: 2,
  md: 3,
  lg: 6
};