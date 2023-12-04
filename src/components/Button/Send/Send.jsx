import { Btn, Image} from '../Send/Send.styled';

import arrowRight from '../../../images/arrow-right.png';

const Send = () => {
  return (
    <>
      <Btn>
        <span>Send</span>
        <Image src={arrowRight} alt="arrow-right" />
      </Btn>
    </>
  );
};

export default Send;
