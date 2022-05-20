import React, { Component } from "react";
import { Input, Button, Table, Space, message, Row, Col } from 'antd';
import blackpic from "../assets/black.png"
import bluepic from "../assets/blue.png"
import greenpic from "../assets/green.png"
import redpic from "../assets/red.png"
import yellowpic from "../assets/yellow.png"
import orangepic from "../assets/orange.png"
import pinkpic from "../assets/pink.png"
import purplepic from "../assets/purple.png"
import greypic from "../assets/grey.png"
import PrbDataService from "../services/prb.service";
// import { InfoCircleOutlined, } from '@ant-design/icons';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';


const { Search } = Input;


const columns = [
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   key: 'name',
  //   width: 100,
  //   fixed: 'left',
  //   filters: [
  //     {
  //       text: 'Joe',
  //       value: 'Joe',
  //     },
  //     {
  //       text: 'John',
  //       value: 'John',
  //     },
  //   ],
  //   onFilter: (value, record) => record.name.indexOf(value) === 0,
  // },
  {
    title: 'PRB',
    dataIndex: 'prb',
    key: 'prb',
    width: 20,
  },
  {
    title: 'subframe 0',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's00',
        key: 's00',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's01',
        key: 's01',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 1',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's10',
        key: 's10',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's11',
        key: 's11',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 2',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's20',
        key: 's20',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's21',
        key: 's21',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 3',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's30',
        key: 's30',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's31',
        key: 's31',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 4',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's40',
        key: 's40',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's41',
        key: 's41',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 5',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's50',
        key: 's50',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's51',
        key: 's51',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 6',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's60',
        key: 's60',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's61',
        key: 's61',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 7',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's70',
        key: 's70',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's71',
        key: 's71',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 8',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's80',
        key: 's80',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's81',
        key: 's81',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      }
    ]
  },
  {
    title: 'subframe 9',
    children: [
      {
        title: 'slot 0',
        dataIndex: 's90',
        key: 's90',
        width: 30,
        render: (text) => <img src={text} alt="" width="30px" />
      },
      {
        title: 'slot 1',
        dataIndex: 's91',
        key: 's91',
        width: 30,
        render: (text) => <img src={text} alt="" width={30} />
      }
    ]
  },
];

// example data
const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    prb: 'PRB' + (5 - i),
    s00: blackpic,
    s01: blackpic,
    s10: blackpic,
    s11: blackpic,
    s20: blackpic,
    s21: blackpic,
    s30: blackpic,
    s31: blackpic,
    s40: blackpic,
    s41: blackpic,
    s50: blackpic,
    s51: blackpic,
    s60: blackpic,
    s61: blackpic,
    s70: blackpic,
    s71: blackpic,
    s80: blackpic,
    s81: blackpic,
    s90: blackpic,
    s91: blackpic,
  });
}

var stompClient = null;
export default class GraphEx extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChangeDataSize = this.onChangeDataSize.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyUp_1 = this.onKeyUp_1.bind(this);
    this.postData = this.postData.bind(this);
    this.reload = this.reload.bind(this);

    this.state = {
      prb_list: [],
      dataSize: 0,
      prbNum: 6,
      submitted: true,
    };
  }

  componentDidMount() {
    this.retrieveRequirements();
    this.connect();
  }

  connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected = () => {
    stompClient.subscribe('/prb', this.onMessageReceived);
  }

  handleJsonIn = (payloadData) => {
    const jsona = JSON.stringify(payloadData);
    const jsonb = jsona.replace(/"cle"/g, '"key"');
    const endjson = JSON.parse(jsonb)
    return endjson;
  }

  handleJsonOut = (payloadData) => {
    const jsona = JSON.stringify(payloadData);
    const jsonb = jsona.replace(/"key"/g, '"cle"');
    const endjson = JSON.parse(jsonb)
    return endjson;
  }

  onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    const endjson = this.handleJsonIn(payloadData);

    endjson.forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        // console.log(`${key}: ${value}`);
        switch (value) {
          case "blackpic":
            element[key] = blackpic;
            break;
          case "bluepic":
            element[key] = bluepic;
            break;
          case "redpic":
            element[key] = redpic;
            break;
          case "greenpic":
            element[key] = greenpic;
            break;
          case "greypic":
            element[key] = greypic;
            break;
          case "yellowpic":
            element[key] = yellowpic;
            break;
          case "pinkpic":
            element[key] = pinkpic;
            break;
          case "purplepic":
            element[key] = purplepic;
            break;
          case "orangepic":
            element[key] = orangepic;
            break;
          default:
            break;
        }
      }
    });

    this.setState({
      prb_list: endjson,
    }, () => {
      // console.log(this.state.prb_list)  // 回调函数
    });
  }

  sendMessage = () => {
    // const payloadData = this.handleJsonOut(this.state.prb_list); //取消了payload传输
    // stompClient.send("/app/message", {}, JSON.stringify(payloadData));
    stompClient.send("/app/message", {}, '');
  }

  onError = (err) => {
    console.log(err);
  }

  retrieveRequirements() {
    PrbDataService.getAll()
      .then((response) => {
        if (response.data !== '') {
          // var params = []; 先定义再赋值🆗
          // const params = response.data;  直接const赋值🆗
          // 转换了字符🆗
          const endjson = this.handleJsonIn(response.data);

          // for (let index = 0; index < endjson.length; index++) {
          //   const element = endjson[index].s00;
          //   switch (element) {
          //     case "blackpic":
          //       endjson[index].s00 = blackpic
          //       break;

          //     default:
          //       break;
          //   }
          // }  复杂的写法但是🆗
          endjson.forEach(element => {
            for (const [key, value] of Object.entries(element)) {
              // console.log(`${key}: ${value}`);
              switch (value) {
                case "blackpic":
                  element[key] = blackpic;
                  break;
                case "bluepic":
                  element[key] = bluepic;
                  break;
                case "redpic":
                  element[key] = redpic;
                  break;
                case "greenpic":
                  element[key] = greenpic;
                  break;
                case "greypic":
                  element[key] = greypic;
                  break;
                case "yellowpic":
                  element[key] = yellowpic;
                  break;
                case "pinkpic":
                  element[key] = pinkpic;
                  break;
                case "purplepic":
                  element[key] = purplepic;
                  break;
                case "orangepic":
                  element[key] = orangepic;
                  break;
                default:
                  break;
              }
            }
          });

          this.setState({
            prb_list: endjson,
          });
          // console.log(endjson);
          // console.log("test test test");   //  测试
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  postData() {
    var mes;
    var data = {
      dataSize: this.state.dataSize,
    };

    PrbDataService.create(data)
      .then(response => {
        console.log(response);
        mes = response.data;
        switch (mes) {
          case 'success':
            message.success({
              content: 'success',
            });
            break;
          case 'oversize':
            message.warning({ content: 'oversize' });
            break;
          case 'enough':
            message.warning({ content: 'enough number of PRB' });
            break;
          case 'nothing there':
            message.warning({ content: 'nothing input' });
            break;
          case 'failed':
            message.error({ content: 'failed' });
            break;
          default:
            break;
        }
      })
      .catch(e => {
        console.log(e);
      })

    this.sendMessage();
  }

  onChangeDataSize(e) {
    this.setState({
      dataSize: e.target.value
    });
  }

  onChange(e) {
    this.setState({
      prbNum: e.target.value
    });
  }

  onSearch() {
    var data = {
      prbNum: this.state.prbNum
    };

    PrbDataService.create(data)
      .then(response => {
        let mes;
        mes = response.data;
        if (data.prbNum === '0') {  // typeof(data.prbNum) === string
          mes = 'zero';
        }
        switch (mes) {
          case 'success':
            message.success({
              content: 'success',
            });
            break;
          case 'zero':
            message.error({ content: 'reenter a number' });
            break;
          case 'oversize':
            message.warning({ content: 'oversize' });
            break;
          case 'enough':
            message.warning({ content: 'enough number of PRB' });
            break;
          case 'nothing there':
            message.warning({ content: 'nothing input' });
            break;
          case 'failed':
            message.error({ content: 'failed' });
            break;
          default:
            break;
        }
      })
      .catch(e => {
        console.log(e);
      })

    if (data.prbNum === '0') {
      return
    }

    this.setState({
      submitted: false
    })

    this.sendMessage();
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.onChangeInit();
    }
  }

  onKeyUp_1 = (e) => {
    if (e.keyCode === 13) {
      this.postData();
    }
  }

  reload = () => {
    // this.forceUpdate();
    window.location.reload(); // state & props 有重新渲染
  }

  render() {
    return (
      <div className="container" style={{ marginTop: -28 }}>
        {this.state.submitted ? (
          <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
              <Search
                name="prb"
                addonBefore="PRB Num"
                placeholder="Please enter a number"
                allowClear
                enterButton="Submit"
                size="large"
                onChange={this.onChange}
                // type="number"  //会有小的选择框不需要
                // onKeyUp={this.onKeyUp}   // 按回车会自动输入，否则会调用两次
                onSearch={this.onSearch}
              />
              {/* <br/>
              <Form>
                <Form.Item
                  label="Number of PRB"
                  required tooltip="This is a required field"
                  rules={[{ required: true, },]}
                >
                  <Input
                    name="prb"
                    type="number"
                    placeholder="please enter a number"
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={this.onSearch}>Submit</Button>
                </Form.Item>
              </Form> */}
            </Col>
          </Row>
        ) : (
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Table
              pagination={false}
              columns={columns}
              // dataSource={data}
              dataSource={this.state.prb_list}
              bordered
              size="middle"
            // scroll={{ x: 'calc(700px + 50%)', y: 240 }}
            />
            <Row>
              <Col span={8}>
                <Search
                  name="signal"
                  addonBefore="Data size (Mo)"
                  placeholder="Please enter the size"
                  enterButton="Submit"
                  size="large"
                  onChange={this.onChangeDataSize}
                  onSearch={this.postData}
                />
              </Col>
              <Col span={2} offset={14}>
                <Button type="primary" onClick={this.reload}>Restart</Button>
              </Col>
            </Row>
          </Space>)}
      </div>
    );
  }
}
