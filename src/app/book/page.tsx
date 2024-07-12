import { Button, Input, Popconfirm, Space, Upload } from "antd";
import { UploadOutlined, UserOutlined } from '@ant-design/icons';

export default function Book() {
  const trips = [
    { from: "guiuan", to: "tacloban", company: "Guiuan Express", companyId: "1", vehicle: "tHiAce15", schedule: "2024-12-01T00:00:00.000Z" },//december 1 8am
    { from: "tacloban", to: "guiuan", company: "Guiuan Express", companyId: "1", vehicle: "tHiAce15", schedule: "2024-12-01T00:00:00.000Z"  },
    { from: "tacloban", to: "borongan", company: "Guiuan Express", companyId: "1", vehicle: "tHiAce15", schedule: "2024-12-01T00:00:00.000Z"  },
    { from: "borongan", to: "tacloban", company: "Guiuan Express", companyId: "1", vehicle: "tHiAce15", schedule: "2024-12-01T00:00:00.000Z"  },
    { from: "tacloban", to: "ormoc", company: "Guiuan Express", companyId: "1", vehicle: "tHiAce15", schedule: "2024-12-01T00:00:00.000Z"  },    
    { from: "ormoc", to: "tacloban", company: "Guiuan Express", companyId: "1", vehicle: "tHiAce15", schedule: "2024-12-01T00:00:00.000Z"  },    
  ]
  let today = JSON.parse(JSON.stringify(new Date()))
  const dateUTC = new Date(Date.UTC(2024, 11, 1, 0, 0, 0)); // Midnight UTC on December 1, 2024
  const datePHT = new Date(dateUTC.getTime() + 8 * 60 * 60 * 1000); // Add 8 hours to get Philippine time
  
  console.log(datePHT.toISOString()); // This will show the date in ISO format with the correct time
  

  return (
    <div>   
      {today} <br />
      {datePHT.toString()}
      <Space>
        {/* <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item> */}
        <Space className="flex flex-col items-start p-3">
          <label>From</label>
          <Input size="large" placeholder="Origin"/>
        </Space>
        <Space>
          {/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              },
              {
                value: '3',
                label: 'Communicated',
              },
              {
                value: '4',
                label: 'Identified',
              },
              {
                value: '5',
                label: 'Resolved',
              },
              {
                value: '6',
                label: 'Cancelled',
              },
            ]}
          /> */}
        </Space>
      </Space>
    </div>
  )
}