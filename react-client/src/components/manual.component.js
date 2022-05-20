import { Popover, Typography } from 'antd';
import React, { Component } from 'react';


const { Title, Paragraph, Text } = Typography;

class Manual extends Component {

  state = {}

  setName(name) {
    return (
      <div>
        <p>contributors: {name}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="container mt-3">
        <div >
          <Typography className="warp-content">
            <Title level={2}>Manual OFDM Simulator</Title>
            <Title level={3}>What is OFDM</Title>
            <Paragraph>
              <Text>
                OFDM Simulator is a website that simulate the signals transmission in the OFDM downlink channel <a target='_blank' rel='noopener noreferrer' href='https://github.com/constantin942/OFDM_Simulator#readme'>
                  README page
                </a>.
              </Text>
            </Paragraph>
            <Title level={3}>How does OFDM work?</Title>
            <Paragraph>
              <Text>
                In OFDM, several bits can be sent in parallel, or at the same time, in separate substream channels.<br />
                This enables each substream's data rate to be lower than would be required by a single stream of similar bandwidth.<br />
                This makes the system less susceptible to interference and enables more efficient data bandwidth.
              </Text>
            </Paragraph>
            <Title level={3}>Contributing</Title>
            <Paragraph>
              <Text>
                Open source: <a target='_blank' rel='noopener noreferrer' href="https://github.com/constantin942/OFDM_Simulator" >https://github.com/constantin942/OFDM_Simulator</a>
              </Text>
            </Paragraph>
            <Title level={3}>Developed by [RI53 team 6]</Title>
            <Paragraph>
              <Popover content={this.setName('Li Yuxiang')} >
                <a href="https://github.com/constantin942" target="_blank" rel="noopener noreferrer">
                  <span class="ant-avatar ant-avatar-circle ant-avatar-image">
                    <img src="https://avatars.githubusercontent.com/u/62027445?s=96&v=4" alt='' />
                  </span>
                </a>
              </Popover>
            </Paragraph>
            <Title level={3}>Contacts & Support</Title>
            <Paragraph>
              <ul>
                <li>
                The website still has room for improvement, please send all your comments to <a href="mailto:lyx942@foxmail.com">lyx942@foxmail.com</a> for any purposes.
                </li>
                <li>
                  <a target='_blank' rel='noopener noreferrer' href="https://teams.microsoft.com/_#/conversations/19:3b98cd8cc5af410ba20074a12db8857e@thread.v2?ctx=chat">
                    Help & contact on Microsoft Teams
                  </a>
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Version</Title>
            <Paragraph>
              <Text>
                1.0
              </Text>
            </Paragraph>
          </Typography>
          <br />
        </div>
      </div>
    )
  }
}

export default Manual
