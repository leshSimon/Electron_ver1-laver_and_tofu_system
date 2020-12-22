import React from 'react';
import styled from 'styled-components';
import Excel from 'exceljs/excel';
// import Excel from "exceljs";
import { PrismaClient } from '@prisma/client';
import WH100per from '../../GlobalLib/Styles/IteratePattern/WH100per';
import path from 'path';

const prisma = new PrismaClient();

const Background = styled(WH100per)`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #636e72;
  width: 100px;
  height: 50px;
  margin: 20px;
  cursor: pointer;
`;

const StartingMain = () => {
  const ExcelFileLocation = path.join(
    __dirname,
    '/src_editable/GlobalLib/Assets/excel/테스트.xlsx'
  );
  const execute = async () => {
    try {
      console.log(ExcelFileLocation);
      const workbook = new Excel.Workbook();
      const file = await workbook.xlsx.readFile(ExcelFileLocation);
      const worksheet = file.getWorksheet('시험대');
      worksheet.getCell(5, 5).value = 'foo3';
      const fic = worksheet.getCell(5, 5).value;
      console.log(fic);
      await workbook.xlsx.writeFile(ExcelFileLocation);
    } catch (e) {
      console.log(e);
    }
  };
  const dbSet = async () => {};

  return (
    <Background>
      <Button
        onClick={() => {
          execute();
        }}
      >
        실행 입력
      </Button>
    </Background>
  );
};

export default StartingMain;
