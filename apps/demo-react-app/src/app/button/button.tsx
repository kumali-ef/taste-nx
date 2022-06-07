import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import styled from '@emotion/styled';
import tw from 'twin.macro';

/* eslint-disable-next-line */
export interface ButtonProps {
  text?: string,
}

const CustomButton = styled(ButtonUnstyled)(tw`
    p-2
    rounded-md
    bg-purple-500
    text-red-500
    hover:bg-gray-500
`);

const GrayButton = styled(CustomButton)(tw`
  bg-gray-500
`)

export function Button(props: ButtonProps) {
  return (
    <CustomButton>
      {props.text || 'Welcome to Custom Button of el-web-app!'}
    </CustomButton>
  );
}

export default Button;
