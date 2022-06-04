import React, { Component } from "react";
import { Input, Button, Table, Space, message, Row, Col, Radio, Form, Descriptions } from 'antd';
import bluepic from "../assets/blue.png"
import greenpic from "../assets/green.png"
import redpic from "../assets/red.png"
import yellowpic from "../assets/yellow.png"
import orangepic from "../assets/orange.png"
import purplepic from "../assets/purple.png"
import PrbDataService from "../services/prb.service";
import { RightOutlined, } from '@ant-design/icons';
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
    title: 'sub\nframe\n1',
    dataIndex: 's00',
    key: 's00',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n2',
    dataIndex: 's01',
    key: 's01',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n3',
    dataIndex: 's10',
    key: 's10',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n4',
    dataIndex: 's11',
    key: 's11',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n5',
    dataIndex: 's20',
    key: 's20',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n6',
    dataIndex: 's21',
    key: 's21',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n7',
    dataIndex: 's30',
    key: 's30',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n8',
    dataIndex: 's31',
    key: 's31',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n9',
    dataIndex: 's40',
    key: 's40',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n10',
    dataIndex: 's41',
    key: 's41',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n11',
    dataIndex: 's50',
    key: 's50',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n12',
    dataIndex: 's51',
    key: 's51',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n13',
    dataIndex: 's60',
    key: 's60',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n14',
    dataIndex: 's61',
    key: 's61',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n15',
    dataIndex: 's70',
    key: 's70',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n16',
    dataIndex: 's71',
    key: 's71',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n17',
    dataIndex: 's80',
    key: 's80',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n18',
    dataIndex: 's81',
    key: 's81',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n19',
    dataIndex: 's90',
    key: 's90',
    width: 30,
    render: (text) => <img src={text} alt="" width="30px" />
  },
  {
    title: 'sub\nframe\n20',
    dataIndex: 's91',
    key: 's91',
    width: 30,
    render: (text) => <img src={text} alt="" width={30} />
  },
];

// example data
const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    prb: 'PRB' + (5 - i),
    s00: orangepic,
    s01: orangepic,
    s10: orangepic,
    s11: orangepic,
    s20: orangepic,
    s21: orangepic,
    s30: orangepic,
    s31: orangepic,
    s40: orangepic,
    s41: orangepic,
    s50: orangepic,
    s51: orangepic,
    s60: orangepic,
    s61: orangepic,
    s70: orangepic,
    s71: orangepic,
    s80: orangepic,
    s81: orangepic,
    s90: orangepic,
    s91: orangepic,
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
      dataSize: 0.0,
      prbNum: 1.4,
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
          case "bluepic":
            element[key] = bluepic;
            break;
          case "redpic":
            element[key] = redpic;
            break;
          case "greenpic":
            element[key] = greenpic;
            break;
          case "yellowpic":
            element[key] = yellowpic;
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

  sendMessage = (create) => {
    stompClient.send("/app/message", {}, JSON.stringify(create));
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
                case "bluepic":
                  element[key] = bluepic;
                  break;
                case "redpic":
                  element[key] = redpic;
                  break;
                case "greenpic":
                  element[key] = greenpic;
                  break;
                case "yellowpic":
                  element[key] = yellowpic;
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

    this.sendMessage(false);
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

        if (mes !== 'failed') {
          this.setState({
            submitted: false
          })
          this.sendMessage(true);
        }
      })
      .catch(e => {
        console.log(e);
      })
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

  sendReload = () => {
    stompClient.send("/app/delete", {}, '');
  }

  reload = () => {
    // this.forceUpdate();
    this.sendReload();
    window.location.reload(); // state & props 有重新渲染
  }

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div className="container" style={{ marginTop: -28 }}>
            <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
              <Col>
                <Form layout="inline">
                  <Form.Item>
                    <Radio.Group defaultValue="1.4" onChange={this.onChange}>
                      <Radio value="1.4">1.4 MHz</Radio>
                      <Radio value="3">3 MHz</Radio>
                      <Radio value="5">5 MHz</Radio>
                      <Radio value="10">10 MHz</Radio>
                      <Radio value="15">15 MHz</Radio>
                      <Radio value="20">20 MHz</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      onClick={this.onSearch}
                      size={"large"}
                      shape={"circle"}
                      icon={<RightOutlined />}
                    />
                  </Form.Item>
                </Form>
                {/* <Search
                  name="prb"
                  addonBefore="BW (MHz)"
                  placeholder="Please enter a number"
                  allowClear
                  enterButton="Submit"
                  size="large"
                  onChange={this.onChange}
                  // type="number"  //会有小的选择框不需要
                  // onKeyUp={this.onKeyUp}   // 按回车会自动输入，否则会调用两次
                  onSearch={this.onSearch}
                /> */}
              </Col>
            </Row>
          </div>

        ) : (
          <div className="container mt-3">
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
              <Row justify="space-between" align="bottom">
                  <Col span={14}>
                    <Descriptions title="" size="small" bordered>
                      <Descriptions.Item label="BPSK"><img src={bluepic} alt="" width="30px" /></Descriptions.Item>
                      <Descriptions.Item label="QPSK"><img src={greenpic} alt="" width="30px" /></Descriptions.Item>
                      <Descriptions.Item label="8-PSK"><img src={redpic} alt="" width="30px" /></Descriptions.Item>
                      <Descriptions.Item label="16-QAM"><img src={yellowpic} alt="" width="30px" /></Descriptions.Item>
                      <Descriptions.Item label="32-QAM"><img src={orangepic} alt="" width="30px" /></Descriptions.Item>
                      <Descriptions.Item label="64-QAM"><img src={purplepic} alt="" width="30px" /></Descriptions.Item>
                    </Descriptions>
                  </Col>
                  <Col span={8}>
                    <Space align="end" direction="vertical" size="middle">
                      <Search
                        name="signal"
                        addonBefore="Data size (Mo)"
                        placeholder="Please enter the size"
                        enterButton="Submit"
                        size="middle"
                        onChange={this.onChangeDataSize}
                        onSearch={this.postData}
                      />
                      <Button type="primary" size="middle" onClick={this.reload} danger>
                        Restart
                      </Button>
                    </Space>
                  </Col>
              </Row>
            </Space>
          </div>
        )}
      </div>
    );
  }
}
