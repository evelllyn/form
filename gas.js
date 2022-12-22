function test(){
  /**取得試算表 */
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  /**取得工作表 */
  let ws = ss.getSheetByName('工作表4');
  /**取得範圍 */
  let range;

  /**跑回圈 */
  let data = ['單位','日期','金額','其他'];
  let rowIndex = 1;
  let colIndex;

   // 字串轉數字 parseInt() Number()

   for (let i in data){
    let colIndex = parseInt(i)+1;
    range = ws.getRange(rowIndex,colIndex);
    range.setValue(data[i]);
  }


  for (let i=0; i < data.length; i++){
  let colIndex = i+1;

    /**寫資料 */
    range = ws.getRange(rowIndex,colIndex);
    range.setValue(data[i]);

  }

  /**寫資料 */
  range = ws.getRange(1,1);
  range.setValue('單位');

  /**寫資料 */
  range = ws.getRange(1,2);
  range.setValue('日期');

  /**寫資料 */
  range = ws.getRange(1,3);
  range.setValue('金額金額');

  /**寫資料 */
  range = ws.getRange(1,4);
  range.setValue('其他');
  console.log(ss)