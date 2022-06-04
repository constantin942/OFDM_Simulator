import { Typography } from 'antd';
import React, { Component } from 'react';


const { Title, Paragraph, Text } = Typography;

class Requirement extends Component {

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
            <Title level={3}>
              Project-XL: Orthogonal-Frequency Division Multiplexing in LTE for data transmission
            </Title>
            <Paragraph>
              <Text>
                This work consists in developing a standalone simulator. The objective is to simulate
                the OFDMA downlink data sent by a single antenna to a set of user devices within one
                cell. Simulation should include the carrier allocation, according to asynchronous
                heterogeneous traffic data.
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                The students must implement the arrival mechanisms of new communications with
                different data sizes (Mo) and different coding schemes over a single cell.
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                The simulator should represent the state of radio resources allocation over the cells.
                The number of sub-carriers is an input of the simulation. The radio resources allocation
                state may be represented by a matrix (see the LTE course - page 64) where the lines
                represent the sub-carriers and the columns the sub-frames. The columns should slide
                to left or right to show the time progression.
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                The simulator should display all the information about the new communication arrival,
                and associate different colour to each of them.
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                We assume that communications are not limited to a given throughput. Therefore, best
                effort strategy is applied, and all available resources are dynamically equally shared
                over current communications.
              </Text>
            </Paragraph>
          </Typography>
          <br />
        </div>
      </div>
    )
  }
}

export default Requirement
