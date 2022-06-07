import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled, Theme } from '@mui/system';
import tw from 'tailwind.macro';

/* eslint-disable-next-line */
export interface ButtonProps {
  text?: string,
}

const CustomButton = styled(ButtonUnstyled)(
  ({ theme }: { theme: Theme }) => `
    padding: 10px;
    border-radius: 5px;
    background-color: purple;
    color: white;
    ${tw`bg-black`}
`);

export function Button(props: ButtonProps) {
  return (
    <CustomButton >
      {props.text || 'Welcome to Custom Button of el-web-app!'}
    </CustomButton>
  );
}

export default Button;
