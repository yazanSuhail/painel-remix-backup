import * as S from "./styles";

import { success, warning, error, info } from "~/assets/Icons";

export interface IAlertProps {
  message: string;
  icon: "error" | "warning" | "info" | "success";
  subMessage?: string;
}

function Alert(props: IAlertProps) {
  const getIconComponent = () => {
    switch (props.icon) {
      case "error":
        return error;
      case "warning":
        return warning;
      case "info":
        return info;
      case "success":
        return success;
      default:
        return "";
    }
  };

  const ComponentIcon: string = getIconComponent();

  return (
    <S.ComponentWrapper>
      <S.Icon src={ComponentIcon} />
      <S.AlertContainer>
        <S.Message>{props.message}</S.Message>
        <S.SubMessage>{props.subMessage}</S.SubMessage>
      </S.AlertContainer>
    </S.ComponentWrapper>
  );
}

export default Alert;
