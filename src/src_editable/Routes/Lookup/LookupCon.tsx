import React from 'react';
import styled from 'styled-components';
// import * as sqlite3 from 'sqlite3';
import Excel from 'exceljs/excel';
import { PrismaClient } from '@prisma/client';
import WH100per from '../../GlobalLib/Styles/IteratePattern/WH100per';
import { ExcelFileLocation } from '../../GlobalLib/RecycleFunction/etc/ExcelFileLocation';
// import Excel from "exceljs";

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
  const execute = async () => {
    try {
      console.log(ExcelFileLocation());
      const workbook = new Excel.Workbook();
      const file = await workbook.xlsx.readFile(ExcelFileLocation());
      const worksheet = file.getWorksheet('시험대');
      worksheet.getCell(5, 5).value = 'foo3';
      const fic = worksheet.getCell(5, 5).value;
      console.log(fic);
      await workbook.xlsx.writeFile(ExcelFileLocation());
    } catch (e) {
      console.log(e);
    }
  };
  const dbSet = async () => {};
  const dbSet2 = () => {
    // let db = new sqlite3.Database(
    //   "D:/프로그래밍 자료/Desktop App/Electron_ver1-laver_and_tofu_system/src/GlobalLib/Assets/db/chinook.db",
    //   (err: any) => {
    //     if (err) {
    //       console.error(err.message);
    //     }
    //     console.log("Connected to the chinook database.");
    //   }
    // );
    // db.close((err: any) => {
    //   if (err) {
    //     return console.error(err.message);
    //   }
    //   console.log("Close the database connection.");
    // });
  };

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
