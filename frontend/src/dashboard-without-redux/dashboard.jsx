import React, { Component } from "react";

import axios from "axios";
const BASE_URL = "http://localhost:3004/api";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: 0,
      debit: 0
    };
  }
  componentWillMount() {
    axios
      .get(`${BASE_URL}/billingCycles/summary`)
      .then(resp => this.setState(resp.data));
  }

  render() {
    //const { credit, debit } = this.props.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${this.state.credit}`}
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${this.state.debit}`}
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${this.state.credit - this.state.debit}`}
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
