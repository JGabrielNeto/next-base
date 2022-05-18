import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactChild } from 'react';

type layoutProps = FlexProps & {
  children: ReactChild;
};

const DefaultLayout = ({ children, ...rest }: layoutProps): JSX.Element => {
  return (
    <Flex width="max" height="max" backgroundColor="black.650" {...rest}>
      {children}
    </Flex>
  );
};

export default DefaultLayout;
