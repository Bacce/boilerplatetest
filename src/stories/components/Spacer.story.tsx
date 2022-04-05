import { Story, Meta } from "@storybook/react";
import { Spacer, SpacerProps } from "../../components/Spacer";

export default {
  title: 'Components/Layout/Spacer',
  component: Spacer,
  argTypes: {
    size: {
      name: 'size',
      controls: { type: 'select' },
      options: [8,16,24,32,48,64,96],
    }
  }
  
} as Meta;

const Template:Story<SpacerProps> = (args:SpacerProps) => (
  <div style={{border: "1px solid black", display: 'inline-block',}}>
    <Spacer size={args.size} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  size: 16
}