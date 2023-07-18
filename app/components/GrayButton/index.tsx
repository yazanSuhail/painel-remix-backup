import * as S from "./styles";

interface IButtonProps {
  Title: string;
  IconForMobileBtn?: any;
  onClick: () => void;
}

function GrayButton({ Title, IconForMobileBtn, onClick }: IButtonProps) {
  return (
    <>
      <S.DesktopGrayButton onClick={onClick}>{Title}</S.DesktopGrayButton>
      <S.MobileButtonContainer onClick={onClick}>
        <S.MobileGrayButton>
          <img src={IconForMobileBtn} width="32rem" />
        </S.MobileGrayButton>
        <div>{Title}</div>
      </S.MobileButtonContainer>
    </>
  );
}

export default GrayButton;
