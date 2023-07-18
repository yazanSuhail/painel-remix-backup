import LinearProgress from "@mui/material/LinearProgress";
import * as S from "./styles";
import { useEffect, useState } from "react";

interface IProgressBarProps {
  usedStorage: number;
  totalStorage: number;
}

const ProgressBar = ({ usedStorage, totalStorage }: IProgressBarProps) => {
  const percentage = (usedStorage / totalStorage) * 100;

  function getPercentageColor(percentage: number) {
    if (percentage > 80 && percentage < 90) {
      return "warning";
    } else if (percentage < 80) {
      return "success";
    } else if (percentage > 90) {
      return "error";
    }
    return "success";
  }

  return (
    <S.LinearProgressContainer>
      <span>
        {usedStorage}GB de {totalStorage}GB usados
      </span>
      <LinearProgress
        variant="determinate"
        value={percentage}
        style={{
          backgroundColor: "#dad8d8",
          height: 20,
        }}
        color={getPercentageColor(percentage)}
      />
    </S.LinearProgressContainer>
  );
};

export default ProgressBar;
