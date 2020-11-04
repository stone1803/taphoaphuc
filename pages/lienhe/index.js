import React, { Component } from "react";
import Layout from "../layout/mylayout";
import { connect } from "react-redux";
import { actionNew } from "../api/tipsAction";

 class LienHeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: "",
      email: "",
      dienThoai: "",
      noiDung: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.actionNew(this.state);

    let tieuDe = `
    <p>Có 1 khách ${this.state.hoTen}</p>
    `;
    let noiDungGui = `
    <p><b>Người gửi  : ${this.state.hoTen};</b></p>
    <p><b>Người số điện thoại  : ${this.state.dienThoai};</b></p>
    <p><b>Người số điện thoại  : ${this.state.email};</b></p>
    <p><b>Người số điện thoại  : ${this.state.noiDung};</b></p>
    `;
    
  };

  render() {
    return (
      <Layout>
        <section id="contact mt-2">
          <div className="container">
            <div className="well well-sm mt-2">
              <h3>
                <strong>LIÊN HỆ VỚI LÃO BẠCH</strong>
              </h3>
            </div>
            <div className="row">
              <div className="col-md-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2457563896014!2d106.69310241480092!3d10.79248019231068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f168552b03%3A0xd9c0bd1fa7cc5eec!2zU2hvcCBMw6NvIELhuqFjaA!5e0!3m2!1svi!2s!4v1604456139884!5m2!1svi!2s"
                  width="600"
                  height="450"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div className="col-md-5">
                <h4>
                  <strong>MÌNH SẼ PHẢN HỒI SỚM NHẤT</strong>
                </h4>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      id="hoTen"
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                      
                      placeholder="Tên của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="email"
                      onChange={this.handleChange}
                      type="email"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="dienThoai"
                      onChange={this.handleChange}
                      type="tel"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="noiDung"
                      onChange={this.handleChange}
                      className="form-control"
                      rows={3}
                      placeholder="Nội Dung"
                    />
                  </div>
                  <button
                    className="btn btn-default"
                    type="submit"
                    name="button"
                  >
                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
                    GỬI
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actionNew: (data) => dispatch(actionNew(data)),
  };
};
export default connect(null, mapDispatchToProps)(LienHeIndex);
