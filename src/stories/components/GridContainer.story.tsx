import { Col, GridContainer } from "../../components/Layout";

export default {
    title: 'Components/Layout/GridContainer',
    component: GridContainer,
  };
  
  const Template = () => <GridContainer><Col sm={4} md={8} lg={12}>GridContainer is a supporting wrapper for grid columns, not used separately.</Col></GridContainer>;
  
  export const Default = Template.bind({});