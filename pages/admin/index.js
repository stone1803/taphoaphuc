import React, { Component } from "react";
import { connect } from "react-redux";
import { actionNew } from "../api/tipsAction";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

class BaiViet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      tomTat: "",
      tenBaiViet: "",
      hinhAnh: "",
      noiDung: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actionNew(this.state);
    Swal.fire({
      icon: "error",
      title: "Thêm mới thành công",
      text: "Cảm ơn bạn chia sẽ bài viết",
    });
    this.refs.clear.value = "";
  };
  onContentStateChange = (content) => {
    this.setState({
      content,
    });
  };
  onEditorStateChange = (content) => {
    this.setState({
      content,
    });
  };

  render() {
    let { content } = this.state;
    let { auth } = this.props;
    if (!auth.uid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vui lòng đăng ký thành viên để post bài",
      });
      return <Redirect to="/SignUp" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="black-text grey-text"> Them moi bai viet</h5>
          <div className="input-field">
            <label htmlFor="so">Url</label>
            <input
              type="text"
              id="url"
              onChange={this.handleChange}
              ref="clear"
            />
          </div>
          <div className="input-field">
            <label htmlFor="tenQue">Tên Bài Viêt</label>
            <textarea
              type="text"
              id="tenBaiViet"
              onChange={this.handleChange}
              ref="clear"
            />
            <p>Hình Ảnh</p>
            <textarea
              type="text"
              id="HinhAnh"
              onChange={this.handleChange}
              ref="clear"
            />
            <p>Nghĩa</p>
            <textarea
              type="text"
              id="tomTat"
              onChange={this.handleChange}
              ref="clear"
            />
            <p>Nội dung chính bài Tips</p>

            <CKEditor
              ref="clear"
              typ
              id="noiDung"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                // const dataHtml = editor.setData("sadas")
                this.setState({
                  noiDung: data,
                });
              }}
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              // onBlur={(event, editor) => {
              //   console.log("Blur.", editor);
              // }}
              // onFocus={(event, editor) => {
              //   console.log("Focus.", editor);
              // }}
            />
            {/* <Editor onChange={this.handleChange} /> */}
            {/* 
            <Editor
              apiKey="jk9c3h3oj9ii5i1fjfgehqnmrscbu9nnydi2mnewmaiouyu3"
              value={this.state.content}
              onEditorChange={this.handleEditorChange}
              init={{ plugins: "link table" }}
            /> */}
          </div>
          {/* <div>
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <textarea
              disabled
              value={
                content &&
                draftToMarkdown(convertToRaw(content.getCurrentContent()))
              }
            /> */}
          {/* </div> */}
          <div>
            {/* <Editor
                initialEditorState={content}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              /> */}
          </div>
          <div className="input-field">
            <button className="btn pink">ADD </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebaseReducer.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionNew: (data) => dispatch(actionNew(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaiViet);
