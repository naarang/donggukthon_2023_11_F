import CustomStamp from "./CustomStamp";
import { 
  StampContainer,
  EnterDiv,
  MineStamp,
  Label,
  Button
} from "./styled";
import plus from '../../assets/icon/plus_btn.svg';
import CustomCarousel from "./Carousel";
import sealFrame from '../../assets/icon/seal_basic.svg';

const MySeal = () => {
  return(
    <div style={{ height: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
      <img src={sealFrame} style={{width: 213, height: 142}}/>
      <EnterDiv>씰 만들러 가기</EnterDiv>
      <MineStamp>
        <Label>
          <div style={{marginLeft: 20}}>내가 만든 씰</div>
          <Button>
            <img src={plus} style={{width: 14, height: 14}}/>
            <div style={{color: '#2D9985', marginLeft:2}}>전체보기</div>
          </Button>
        </Label>
        <div style={{marginTop: 11}}>
          <CustomCarousel/>
        </div>
      </MineStamp>
    </div>
  );
};

export default MySeal;