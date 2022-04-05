import { MainContainer } from "../../components/Layout";

export default {
    title: 'Components/Layout/MainContainer',
    component: MainContainer,
};

const Template = () => <div style={{background: "grey", height: 500,}}>The mainContainer wraps the whole UI, creates the main column and the whitespace on the sides. Can be used without Grid.</div>;

export const Default = Template.bind({});