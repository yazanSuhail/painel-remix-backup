import React, { useState } from "react";
import * as S from "./styles";
import { downwardsArrow } from "~/assets/Icons";

interface IFoldersDropDownButtonProps {
  foldersList: string[];
  selectedFolder: string;
  setSelectedFolder: (folder: string) => void;
}

function FoldersDropDownButton({
  foldersList,
  selectedFolder,
  setSelectedFolder,
}: IFoldersDropDownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFolderClick = (folder: string) => {
    setSelectedFolder(folder);
    setIsOpen(false);
    console.log("Selected folder:", folder);
    // Perform any action you want when a folder is clicked
  };

  return (
    <S.Container>
      <S.ButtonContainer role="button" onClick={toggleDropdown}>
        {selectedFolder} <img src={downwardsArrow} alt="dropdown arrow" />
      </S.ButtonContainer>
      {isOpen && (
        <S.DropdownContainer>
          {foldersList.map((folder, index) => (
            <S.FolderItem key={index} onClick={() => handleFolderClick(folder)}>
              {folder}
            </S.FolderItem>
          ))}
        </S.DropdownContainer>
      )}
    </S.Container>
  );
}

export default FoldersDropDownButton;
