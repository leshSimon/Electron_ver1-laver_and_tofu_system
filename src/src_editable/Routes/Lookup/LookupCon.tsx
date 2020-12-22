import React from 'react';
import styled from 'styled-components';
import Excel from 'exceljs/excel';
// import Excel from "exceljs";
import { PrismaClient } from '@prisma/client';
import WH100per from '../../GlobalLib/Styles/IteratePattern/WH100per';
import ExcelLocation from '../../GlobalLib/Assets/excel/ExcelLocation';
import { useShortMessage } from '../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage';

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
  const { addMessage } = useShortMessage();
  const execute = async () => {
    try {
      console.log(ExcelLocation);
      const workbook = new Excel.Workbook();
      const file = await workbook.xlsx.readFile(ExcelLocation);
      const worksheet = file.getWorksheet('시험대');
      worksheet.getCell(5, 5).value = 'foo3';
      const fic = worksheet.getCell(5, 5).value;
      console.log(fic);
      await workbook.xlsx.writeFile(ExcelLocation);
    } catch (e) {
      console.log(e);
    }
  };
  const dbSet = async () => {
    // await prisma.business_unit.create({
    //   data: {
    //     start_date: new Date('2015-1-1'),
    //     name: '김 사업단',
    //   },
    // });
    addMessage('쿠헬헬', 'ㄹㄹ');
  };

  return (
    <Background>
      <Button
        onClick={() => {
          dbSet();
        }}
      >
        실행 입력
      </Button>
    </Background>
  );
};

export default StartingMain;
