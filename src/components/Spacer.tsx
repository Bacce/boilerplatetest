export interface SpacerProps {
    size: 8 | 16 | 24 | 32 | 48 | 64 | 96;
}
export const Spacer = ({size}:SpacerProps) => ( <div style={{width: size, height: size,}}/> );