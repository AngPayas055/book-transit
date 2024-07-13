"use client"
import { Button, Card, DatePicker, DatePickerProps, Input, Popconfirm, Space, Upload } from "antd";
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

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
  
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>   
      {/* {today} <br /> */}
      {/* {datePHT.toString()} */}
      <Card style={{ width: 820, margin: '100px auto'}}>
        {/* <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item> */}
        <span className="flex flex-row w-full max-w-[1200px]">
          
          <Space className="flex flex-col items-start p-3">
            <label className="ms-2">From</label>
            <Input size="large" placeholder="Origin"/>
          </Space>
          <Space className="flex flex-col items-start p-3">
            <label className="ms-2">To</label>
            <Input size="large" placeholder="Destination"/>
          </Space>
          <Space className="flex flex-col items-start p-3">
            <label className="ms-2">Departure</label>
            <DatePicker size="large" onChange={onChange} />
          </Space>
          <Space className="flex flex-col justify-end pb-3">
            <Button size="large" type="primary" icon={<SearchOutlined />} iconPosition="end">
              Search
            </Button>
          </Space>
        </span>
      </Card>
    </div>
  )
}