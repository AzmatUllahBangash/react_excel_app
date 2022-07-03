import React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const SpreadSheet = () => {
  return (
    <div className='container'>
          <SpreadsheetComponent
              allowOpen={true}
              openUrl={"https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"}
              allowSave={true}
              saveUrl={"https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"}
          
          ></SpreadsheetComponent>
    </div>
  )
}

export default SpreadSheet
